import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizzaria e Churrascaria Mendes",
  description: "Pizzaria e Churrascaria Mendes - O prazer de comer bem. Localizado no coração da cidade," +  
  " oferecemos uma experiência gastronômica única com nossas deliciosas pizzas artesanais e suculentas carnes grelhadas. Venha nos visitar e descubra o sabor que conquista paladares!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Smooch+Sans:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
