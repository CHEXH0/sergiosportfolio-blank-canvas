
import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 sm:px-6 md:px-8 border-b border-border/40 backdrop-blur-sm bg-background/90 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold tracking-tight transition-colors">
            Sergio's Portfolio
          </Link>
          <nav className="hidden sm:block">
            {/* You can add navigation items here when needed */}
          </nav>
        </div>
      </header>
      
      <main className="flex-1 pt-24 pb-12">
        {children}
      </main>
      
      <footer className="py-6 px-4 sm:px-6 md:px-8 border-t border-border/40">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sergio's Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
