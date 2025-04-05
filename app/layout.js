import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientThemeProvider from '../components/ClientThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Sabran | Portfolio',
  description: 'Fullstack Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ 
        fontFamily: inter.style.fontFamily, 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
      className="gradient-background">
        <ClientThemeProvider>
          <Navbar />
          <main style={{
            maxWidth: '1024px',
            margin: '0 auto',
            padding: '1.5rem 1rem',
            flexGrow: 1,
            width: '100%'
          }}>
            <div className="content-container" style={{
              backdropFilter: 'blur(8px)',
              borderRadius: '0.75rem',
              padding: '1.5rem'
            }}>
              {children}
            </div>
          </main>
          <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
