import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, User, Calendar, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<'phone' | 'otp' | 'register'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    gender: 'male' as 'male' | 'female' | 'other',
    birthdate: ''
  });

  const { login, register, sendOTP } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsLoading(true);
    const success = await sendOTP(phone);
    setIsLoading(false);

    if (success) {
      setStep('otp');
    } else {
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setIsLoading(true);
    const success = await login(phone, otp);
    setIsLoading(false);

    if (success) {
      navigate('/');
    } else {
      // Check if user exists
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = savedUsers.some((u: any) => u.phone === phone);
      
      if (!userExists && otp === '1234') {
        setStep('register');
      } else {
        alert('Invalid OTP. Please try again.');
      }
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registrationData.name || !registrationData.birthdate) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    const success = await register({
      ...registrationData,
      phone
    });
    setIsLoading(false);

    if (success) {
      navigate('/');
    } else {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
            <User className="w-8 h-8 text-slate-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Nueve</h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'phone' && 'Enter your phone number to continue'}
            {step === 'otp' && 'Enter the OTP sent to your phone'}
            {step === 'register' && 'Complete your profile'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 'phone' && (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sky-300 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  OTP Code
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 4-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-center text-lg tracking-widest"
                  maxLength={4}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Demo: Use 1234 as OTP
                </p>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sky-300 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors duration-200"
              >
                Back to Phone Number
              </button>
            </form>
          )}

          {step === 'register' && (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="name"
                    type="text"
                    value={registrationData.name}
                    onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="gender"
                    value={registrationData.gender}
                    onChange={(e) => setRegistrationData({ ...registrationData, gender: e.target.value as 'male' | 'female' | 'other' })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">
                  Birth Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="birthdate"
                    type="date"
                    value={registrationData.birthdate}
                    onChange={(e) => setRegistrationData({ ...registrationData, birthdate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sky-300 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 disabled:opacity-50"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          )}
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Continue browsing as guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;