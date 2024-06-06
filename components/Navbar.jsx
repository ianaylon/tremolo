import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/tremolo-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { BiGridSmall, BiLeftArrowAlt } from "react-icons/bi";

const menuItems = [
  { name: "בית", slug: "" },
  { name: "אודות טרמולו", slug: "about" },
  { name: "נגני טרמולו", slug: "team" },
  { name: "רפרטואר", slug: "repertoire" },
  { name: "הופעות", slug: "tour" },
  { name: "חינוך מוזיקלי", slug: "music-education" },
  { name: "מרכז טרמולו", slug: "tremolo-center" },
  { name: "יצירת קשר", slug: "contact" },
  { name: "Tremolo", slug: "tremolo" },
  { name: "The BEAT Evolution", slug: "beat-evolution" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_open" onClick={() => setToggle(true)}>
        <BiGridSmall />
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut" }}
            exit={{ opacity: 0, x: -200 }}
            className="navbar-menu"
          >
            <div className="navbar_close" onClick={() => setToggle(false)}>
              <BiLeftArrowAlt />
            </div>
            <ul>
              {menuItems.map((item) => (
                <li key={item.slug} className="navbar-menu_item">
                  <a href={`/${item.slug}`} className="navbar-menu_link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
