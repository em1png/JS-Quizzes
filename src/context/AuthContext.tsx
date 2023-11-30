import { getCurrentUser } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const INITIAL_USER = {
  id: "",
  username: "",
  email: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => { },
  setIsAuthenticated: () => { },
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const checkAuthUser = async () => {
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({ id: currentAccount.$id, username: currentAccount.username, email: currentAccount.email });
        setIsAuthenticated(true);
        return true;
      }

      setUser(INITIAL_USER);
      setIsAuthenticated(false);
      navigate("/sign-up");
      return false;
    }
    catch (error) {
      console.log(error);
      return false;
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cookieFallback") === "[]" || localStorage.getItem("cookieFallback") === null) navigate("/sign-in");
    checkAuthUser();
  }, []);

  const value = { user, setUser, isLoading, isAuthenticated, setIsAuthenticated, checkAuthUser };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
