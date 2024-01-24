import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";
import NavLink from "./NavLink";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] z-10 border-b border-b-termScreen/20 bg-white p-5 pt-0 shadow-2xl">
          <ul className="flex flex-col items-center justify-center">
            {routes.map((route) => (
              <NavLink
                title={route.title}
                url={route.url}
                isPageLink={route.isPageLink}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
