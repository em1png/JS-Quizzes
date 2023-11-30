import { Routes, Route } from 'react-router-dom';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

import SignupForm from './_auth/forms/SignupForm';
import SigninForm from './_auth/forms/SigninForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';
import QuizPage from './_root/pages/QuizPage';
import MyProfile from './_root/pages/MyProfile';

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<SigninForm />} />
          <Route path='sign-up' element={<SignupForm />} />
        </Route>

        {/* private */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/quizzes/:name' element={<Home />} />
          <Route path='/quiz/:id' element={<QuizPage />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App
