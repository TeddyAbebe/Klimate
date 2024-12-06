/* eslint-disable @typescript-eslint/no-explicit-any */

import { Header } from ".";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />

      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
