import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createUser } from '../services/userService';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUser({ email, password });
      console.log('User created successfully');
      // Navigate to login or home screen
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;