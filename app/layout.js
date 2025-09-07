import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSProvider from "./context/aos";
import { PreLoadWrapper } from "./context/PreLoadContext";

const poppins = Poppins({
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
      <body className={`${poppins.className} antialiased`}>
        <AOSProvider>
          <PreLoadWrapper>
            <Navbar />
            {children}
            <Footer />
          </PreLoadWrapper>
        </AOSProvider>
      </body>
    </html>
  );
}
