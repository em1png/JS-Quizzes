
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Loader from "@/components/shared/Loader"

import { Link, useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SigninValidation } from "@/lib/validation"

import { useToast } from "@/components/ui/use-toast"
import { useSigninAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser } = useUserContext();
  const { mutateAsync: signInAccount, isPending } = useSigninAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  async function onSubmit(values: z.infer<typeof SigninValidation>) {

    const session = await signInAccount({
      email: values.email,
      password: values.password
    });


    if (!session) return toast({ title: "Sign up failed. Please try again." })
    else toast({
      variant: "default",
      title: `Welcome!`,
      description: "Now u can use all."
    })

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();
      navigate('/')
    } else {
      toast({
        title: "Sign up failed. Please try again.",
      })
    }

  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <div className="flex-center">
          <img src="/logo.svg" width={16} height={16} alt="" className="mr-1" />
          <span className="font-bold text-base"> JS Test </span>
        </div>
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Log in to your account</h2>
        <p className='text-muted-foreground small-medium md:base-regular mt-2'>Welcome back! Please enter your details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
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
            {isPending ? (
              <div className="flex-center gap-2"> <Loader />Loading..</div>
            ) : 'Sign in'}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">Do not have an account?
            <Link to='/sign-up' className="text-secondary-500 text-small-semibold ml-1">Sign up</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm