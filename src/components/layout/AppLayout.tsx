import { Outlet } from "react-router-dom";
//component imports
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const AppLayout: React.FC = () => {
  return (
      <div className="grid h-screen grid-rows-[auto_1fr_auto] relative font-base">
        <Header />
        <Outlet/>
        <Footer />
      </div>
  );
};
