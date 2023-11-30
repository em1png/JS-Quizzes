export type INewUser = {
  username: string;
  email: string;
  password: string;
};

export type IUser = {
  id: string;
  username: string;
  email: string;
};

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

export type IQuestion = {
  question: string, 
  answers: string[], 
  correctAnswer: number
}

export type IQuiz = {
  id: number,
  title: string,
  description: string,
  level: string,
  tags: string[],
  image: string,
  questions: IQuestion[],
}

