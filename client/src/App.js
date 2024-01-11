import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mb-auto p-4">
        {/* Основной контент */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
