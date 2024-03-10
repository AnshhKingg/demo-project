import React from 'react';

interface LoginFormProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  usernameError: string;
  passwordError: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = (props: LoginFormProps) => (
  <form onSubmit={props.handleSubmit} className="flex flex-col space-y-4 max-w-md min-w-md">
    {/* Username Input */}
    <input
      type="text"
      placeholder="Username"
      value={props.username}
      onChange={(e) => props.setUsername(e.target.value)}
      style={{ width: '600px' }}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
    />
    {/* Username Error */}
    {props.usernameError && <p className="text-red-500 text-left">{props.usernameError}</p>}
    {/* Password Input */}
    <input
      type="password"
      placeholder="Password"
      value={props.password}
      style={{ width: '600px' }}
      onChange={(e) => props.setPassword(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
    />
    {/* Password Error */}
    {props.passwordError && <p className="text-red-500 text-left">{props.passwordError}</p>}
    {/* Submit Button */}
    <button
      type="submit"
      style={{ width: '600px' }}
      className="w-full max-w-md px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
    >
      Login
    </button>
  </form>
);

export default LoginForm;
