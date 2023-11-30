import { useUserContext } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { signOutAccount } from "@/lib/appwrite/api";
import { useToast } from "../ui/use-toast";

const Topbar = () => {
    const { user, checkAuthUser } = useUserContext();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { toast } = useToast()

    async function onSignOut() {
        const signOut = await signOutAccount();
        if(!signOut) toast({ title: "Log out failed. Please try again." });

        const isLoggedIn = await checkAuthUser();
        if(!isLoggedIn) navigate('/sign-up');
        else toast({ title: "Log out failed. Please try again." })
    }
    return (
        <header className='min-h-[60px] border-b border-neutral-800 mb-5'>
            <div className="h-full w-full container flex justify-between items-center">
                <div className="flex-center">
                    <nav className="flex items-center space-x-7 text-sm font-semibold">
                        <Link to='/' className="flex-center mr-5">
                            <img src="/logo.svg" width={16} height={16} alt="" className="mr-1" />
                            <span className="font-bold text-base"> JS Test </span>
                        </Link>
                        <Link to='/' className={`transition-colors hover:text-white ${pathname === '/' ? 'text-white' : 'text-white/70'}`}>Home</Link>
                        <Link to='/quizzes/html' className={`transition-colors  hover:text-white ${pathname === '/quizzes/html' ? 'text-white' : 'text-white/70'}`}>HTML</Link>
                        <Link to='/quizzes/css' className={`transition-colors hover:text-white ${pathname === '/quizzes/css' ? 'text-white' : 'text-white/70'}`}>CSS</Link>
                        <Link to='/quizzes/javascript' className={`transition-colors  hover:text-white ${pathname === '/quizzes/javascript' ? 'text-white' : 'text-white/70'}`}>JavaScript</Link>
                    </nav>
                </div>

                <div className="flex-center">
                    <Button variant='outline' className="small-semibold mr-2" onClick={() => navigate('/myprofile')}>
                        <Avatar className="w-6 h-6 mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>{user.username}
                    </Button>
                    <Button variant='secondary' className="flex-center cursor-pointer" onClick={onSignOut}>
                        <img src="/assets/icons/logout.svg" className="hover: hover:white fill-white" alt="" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Topbar