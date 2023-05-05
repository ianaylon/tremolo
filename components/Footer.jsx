import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/tremolo-logo.png";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const menuItems = [
  { name: "בית", slug: "" },
  { name: "אודות טרמולו", slug: "about" },
  { name: "נגני טרמולו", slug: "team" },
  { name: "רפרטואר", slug: "repertoire" },
  { name: "הופעות", slug: "tour" },
  { name: "חינוך מוזיקלי", slug: "music-education" },
  { name: "מרכז טרמולו", slug: "tremolo-center" },
  { name: "טרמולו Station", slug: "tremolo-station" },
  { name: "יצירת קשר", slug: "contact" },
];

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_box">
        <h5>ניווט</h5>
        <ul>
          {menuItems.map((item) => (
            <li key={`footer-${item.name}`}>
              <a href={`/${item.slug}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_box">
        <h5>בקרו אותנו</h5>
        <p>
          מרכז טרמולו
          <br />
          שדרות גיבורי ישראל 9, נתניה
          <br />
          972-865-3245+
        </p>
        <div className="footer_social-icons-holder">
          <Link href={"/"}>
            <AiFillFacebook size={40} />
          </Link>
          <Link href={"/"}>
            <AiFillYoutube size={40} />
          </Link>
          <Link href={"/"}>
            <AiFillInstagram size={40} />
          </Link>
        </div>
      </div>
      <div className="footer_box">
        <Image src={logo} alt="logo" className="footer_logo" />
        <h6>
          עיצוב ופיתוח אתר - יאן אילון <br />
          כל הזכויות שמורות ®
        </h6>
      </div>
    </div>
  );
};

export default Footer;
