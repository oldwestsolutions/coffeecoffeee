import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <>
      <Head>
        <title>Login | Credit Coffee</title>
        <meta name="description" content="Login to Credit Coffee" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-coffee-light flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white rounded-lg shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <FaCoffee className="text-4xl text-coffee-dark mb-4" />
            </motion.div>
            <h1 className="text-2xl font-serif text-coffee-dark">Welcome Back</h1>
            <p className="text-seattle-gray mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-seattle-gray mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-seattle-gray mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coffee focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-coffee border-gray-300 rounded focus:ring-coffee"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-seattle-gray">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-coffee hover:text-coffee-dark">
                Forgot password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-coffee-dark text-white py-2 px-4 rounded-md hover:bg-coffee transition-colors"
            >
              Sign In
            </motion.button>

            <div className="mt-4 text-center">
              <p className="text-sm text-seattle-gray">
                Don't have an account?{' '}
                <a href="#" className="text-coffee hover:text-coffee-dark">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </motion.div>
      </main>
    </>
  );
} 