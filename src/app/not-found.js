// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata = {
  title: '404 - Página não encontrada',
  description: 'A página que você está procurando não existe.',
}
 
export default function NotFound() {
  return (
    <html lang="pt" className={inter.className}>
      <body>
        <h1>404 - Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
      </body>
    </html>
  )
}