"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const centerClass = "flex items-center justify-center content-center py-14";
  const itemsClass = "c-footer__item w-96 md:w-96 max-w-full h-32";

  // Get from hygraph

  return (
    <footer className={`c-footer w-100 bg-primary flex-wrap gap-4 ${centerClass} `}>
      <div className={`${itemsClass} ${centerClass}`}>
        <span className="c-header__border ml-2 mr-4 md:mr-10"></span>
        <h4 className="h3 text-white">Architectural</h4>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:email-new" />
        <a href="mailto:will.finnings@example.com" className="ml-4 text-white">
          will.finnings@example.com
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="tabler:phone" />
        <a href="tel:(603) 555-0123" className="ml-4 text-white">
          (603) 555-0123
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:location" />
        <span className="ml-2 text-white">8202 Preston Rd. Iconwood, CA 91180</span>
      </div>
    </footer>
  );
};

export default Footer;
