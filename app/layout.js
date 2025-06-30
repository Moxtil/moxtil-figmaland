import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./context/aos";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Moxtil FigmaLand",
  description: "Moxtil FigmaLand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
