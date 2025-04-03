import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
