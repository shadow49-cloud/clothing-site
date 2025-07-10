import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (phone: string, otp: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'addresses'>) => Promise<boolean>;
  logout: () => void;
  sendOTP: (phone: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload, isLoading: false };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null, isLoading: false };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    isLoading: false
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(savedUser) });
    }
  }, []);

  const sendOTP = async (phone: string): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'SET_LOADING', payload: false });
    return true;
  };

  const login = async (phone: string, otp: string): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = savedUsers.find((u: User) => u.phone === phone);
    
    if (user && otp === '1234') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    
    dispatch({ type: 'SET_LOADING', payload: false });
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'addresses'>): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      addresses: []
    };
    
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    savedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(savedUsers));
    
    dispatch({ type: 'LOGIN_SUCCESS', payload: newUser });
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      sendOTP
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};