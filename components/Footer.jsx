import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from '../public/tremolo-logo.png'
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

const footerMenu = ['אודותינו', 'מרכז טרמולו', 'חינוך מוזיקלי', 'פרויקטים / רפרטואר', 'טרמולו בזירה הבינלאומית', 'צוות טרמולו', 'הופעות', 'צרו קשר']

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_box'>
        <h5>ניווט</h5>
        <ul>
          {footerMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='footer_box'>
        <h5>בקרו אותנו</h5>
        <p>מרכז טרמולו<br/>שדרות גיבורי ישראל 9, נתניה<br/>972-865-3245+</p>
        <div className='footer_social-icons-holder'>
          <Link href={'/'}><AiFillFacebook size={40} /></Link>
          <Link href={'/'}><AiFillYoutube size={40} /></Link>
          <Link href={'/'}><AiFillInstagram size={40} /></Link>
        </div>
      </div>
      <div className='footer_box'>
        <Image src={logo} alt="logo" className='footer_logo'/>
        <h6>עיצוב ופיתוח אתר - יאן אילון <br/>כל הזכויות שמורות ®</h6>
      </div>
    </div>
  )
}

export default Footer