import { useUserContext } from '@/context/AuthContext';
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();
  return (
    <>
      {isAuthenticated ? <Navigate to='/' />
        :
        <>
          <div className='hidden h-screen w-1/2 bg-neutral-900 xl:flex justify-center items-end p-10'>
            <h3 className='h3-bold'>Welcome to our web development platform! Dive into the world of web technologies with engaging quizzes created by developers for developers. Validate your knowledge by solving captivating questions and discover something new.</h3>
          </div>

          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>
        </>
      }
    </>
  )
}

export default AuthLayout