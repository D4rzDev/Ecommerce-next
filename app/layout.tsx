import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Provider from "./components/CartProvider";
import Cart from "./components/Cart";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" max-w-[1440px]">
          <Provider>
            <Navbar/>
            <Cart/>
            {children}
          </Provider>
        </div>
        </body>
    </html>
  );
}
