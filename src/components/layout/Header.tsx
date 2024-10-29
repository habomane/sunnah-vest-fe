import { Link } from "react-router-dom";
// import { useState } from "react";

// import menu from '@/assets/svg/menu.svg'
// import close from '@/assets/svg/close.svg'

import { HeaderSecondary } from "../typography/Header";

export const Header = () => {
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="mx-5 px-5 py-5 bg-white flex flex-row justify-between items-center bg-green">
        <Link to="/">
        <HeaderSecondary>Sunnah <span className="text-[#dec535]">Vest</span> </HeaderSecondary>
      </Link>
    </nav>
  );
}
