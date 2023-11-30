import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

// Routes
import { Link, useNavigate } from 'react-router-dom'

// Form + Validation
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupValidation } from "@/lib/validation"
import { useCreateUserAccount, useSigninAccount } from "@/lib/react-query/queriesAndMutations"
import Loader from "@/components/shared/Loader"
import { useUserContext } from "@/context/AuthContext"

const SignupForm = () => {
  const { toast } = useToast()
  const { mutateAsync: createUserAccount, isPending: isCreatingUser } = useCreateUserAccount();
  const { mutateAsync: signInAccount } = useSigninAccount();
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    },
  })

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Create account
    const newUser = await createUserAccount(values);
    if (!newUser) return toast({ title: "Sign up failed. Please try again." })
    else toast({ title: "Sign up success." })

    // Create session
    const session = await signInAccount({ email: values.email, password: values.password });
    if (!session) return toast({ title: "Sign up failed. Please try again." })

    const isLoggedIn = await checkAuthUser();
    if(!isLoggedIn) toast({ title: "Sign up failed. Please try again." })

    form.reset();
    navigate('/');
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <div className="flex-center">
          <img src="/logo.svg" width={16} height={16} alt="" className="mr-1" />
          <span className="font-bold text-base"> JS Test </span>
        </div>
        <h2 className='h3-bold md:h2-bold pt-1 sm:pt-2'>Create an account</h2>
        <p className='text-muted-foreground small-medium md:base-regular'>Enter your email below to create your account</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className='shad-button_primary'>
            {isCreatingUser ? (
              <div className="flex-center gap-2"> <Loader />Loading..</div>
            ) : 'Sign up'}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">Already have an account?
            <Link to='/sign-in' className="text-secondary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm