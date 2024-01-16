import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header onLogin={() => setShowModal(true)} />
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      <div className="mb-auto p-4">
        {/* Основной контент */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
