import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/Navbar';
import { TransactionsProvider } from '../context/TransactionsContext'; 

export const metadata = {
  title: 'Gerenciador Financeiro - Next.js',
  description: 'App de gerenciamento financeiro pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AppNavbar /> 
        
        <TransactionsProvider> 
          <div className="mt-4"> 
            <div className="container"> 
              {children}
            </div>
          </div>
        </TransactionsProvider>
        
      </body>
    </html>
  );
}