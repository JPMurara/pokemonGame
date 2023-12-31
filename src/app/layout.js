import { Inter } from 'next/font/google';
import './styles/globals.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokemon Memory Game',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
