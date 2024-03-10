import { useState } from 'react';
import { emailRegex, passwordRegex } from '../constants/regex';

export const useLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Email validation
    if (!username.trim()) {
      setUsernameError('Please enter email.');
      isValid = false;
    } else if (!emailRegex.test(username)) {
      setUsernameError('Please enter a valid email.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Please enter password.');
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Password must have: number, one capital, one small, one special char, at least 8 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    alert('You are validated, Welcome '+ username);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    usernameError,
    passwordError,
    handleSubmit,
  };
};
