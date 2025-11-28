import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-zinc-500 py-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} Suma K R. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">Designed & Built with Love</p>
      </div>
    </footer>
  );
};
