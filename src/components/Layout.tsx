import { Footer, Header, Navbar, Sidebar, Nav } from "../components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed flex h-screen w-screen flex-col bg-black">
      <Header />
      <main className="flex flex-grow">
        <Navbar />
        <Sidebar />
        <div className="flex flex-grow flex-col">
          <Nav />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
