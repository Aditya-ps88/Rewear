import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const form = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    // TODO: Replace with real authentication logic
    alert(`Logging in with email: ${data.email}`);
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth logic
    alert('Login with Google clicked!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-eco-brown">Login to ReWear</h2>
        <Button type="button" variant="outline" className="w-full mb-4" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </Form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">New user? </span>
          <Link to="/signup" className="text-eco-green-primary font-medium hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 