import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, UserCredential, signInWithEmailAndPassword } from 'firebase/auth';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<LoginFormInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSuccessfulLogin = (user: any) => {
    // Store user info in localStorage for persistence
    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }));
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await signInWithEmailAndPassword(auth, data.email, data.password);
      handleSuccessfulLogin(result.user);
    } catch (error: any) {
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      handleSuccessfulLogin(result.user);
    } catch (error: any) {
      setError(`Google login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    setError(null);
    
    const provider = new GithubAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      handleSuccessfulLogin(result.user);
    } catch (error: any) {
      setError(`GitHub login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-eco-brown">Login to ReWear</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <Button 
          type="button" 
          variant="outline" 
          className="w-full mb-2" 
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login with Google'}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          className="w-full mb-4" 
          onClick={handleGithubLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login with GitHub'}
        </Button>
        
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
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