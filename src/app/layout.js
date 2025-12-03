import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Gerenciador Financeiro - Next.js',
  description: 'App de gerenciamento financeiro pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AppNavbar /> 
        
        <div className="mt-4"> 
          <div className="container"> 
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
