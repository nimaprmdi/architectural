"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { FOOTER } from "@/graphQl/query";
import { graphqlClient } from "@/lib/graphql-client";

const Footer = async () => {
  const centerClass = "flex items-center justify-center content-center py-14";
  const itemsClass = "c-footer__item w-96 md:w-96 max-w-full h-32";

  let data = await graphqlClient.request(FOOTER);
  const footerData = data.footers[data.footers.length - 1];
  // Get from hygraph

  return (
    <footer className={`c-footer w-100 bg-primary flex-wrap gap-4 ${centerClass} `}>
      <div className={`${itemsClass} ${centerClass}`}>
        <span className="c-header__border ml-2 mr-4 md:mr-10"></span>
        <h4 className="h3 text-white">{footerData.footerSiteTitle}</h4>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:email-new" />
        <a href="mailto:will.finnings@example.com" className="ml-4 text-white">
          {footerData.footerEmail}
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="tabler:phone" />
        <a href={`tel:${footerData.footerPhone}`} className="ml-4 text-white">
          {footerData.footerPhone}
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:location" />
        <span className="ml-2 text-white">{footerData.footerAddress}</span>
      </div>
    </footer>
  );
};

export default Footer;
