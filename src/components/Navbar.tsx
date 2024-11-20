import React, { useState } from 'react';
import Modal from './Modal';
import RegisterForm from './RegisterForm';
import Logo from './Logo';

const Navbar = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);

  const handleUserRegistration = (data: any) => {
    console.log('User registration:', data);
    setShowUserModal(false);
  };

  const handleBusinessRegistration = (data: any) => {
    console.log('Business registration:', data);
    setShowBusinessModal(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Find Jobs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Companies</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Career Resources</a>
              <button 
                onClick={() => setShowBusinessModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                For Employers
              </button>
              <button 
                onClick={() => setShowUserModal(true)}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
        title="Register as Job Seeker"
      >
        <RegisterForm type="user" onSubmit={handleUserRegistration} />
      </Modal>

      <Modal
        isOpen={showBusinessModal}
        onClose={() => setShowBusinessModal(false)}
        title="Register as Employer"
      >
        <RegisterForm type="business" onSubmit={handleBusinessRegistration} />
      </Modal>
    </>
  );
};

export default Navbar;