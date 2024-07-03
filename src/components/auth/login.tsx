import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage } from '../ui/form'
  import { Button } from '../ui/button'
  import { Input } from '../ui/input'
  import { zodResolver } from '@hookform/resolvers/zod'
  import { useForm } from 'react-hook-form'
  import { z } from 'zod'
  import { loginSchema } from '@/lib/validation'
  import Social from './social'
  import { Separator } from '@radix-ui/react-separator'
  
  
  function Login() {
  
    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })
  
    function onSubmit(values: z.infer<typeof loginSchema>) {
      // const { email, password } = values;
  
      console.log(values)
  
    }
  
    return (
      <div>
        <h2 className="text-xl font-bold">Login</h2>
        <p className="text-muted-foreground">
          Don't have an account?{' '}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
        <Separator className='my-3'/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <div className="grid grid-cols-1 gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="*****"
                        type="password"
                        
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
  
            
            <Button type="submit" className="w-full h-12">
                Login
              </Button>
          
        </form>
        <Social />
      </Form>
    
      </div>
    )
  }
  
  export default Login
  