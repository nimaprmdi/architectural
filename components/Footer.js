"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { FOOTER } from "@/graphQl/query";
import { graphqlClient } from "@/lib/graphql-client";

const Footer = async () => {
  const centerClass = "flex items-center justify-center content-center py-14";
  const itemsClass = "c-footer__item w-96 md:w-96 max-w-full h-32";

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await graphqlClient.request(FOOTER);
      const footerData = data.footers[data.footers.length - 1];
      // Get from hygraph

      setData(footerData);
    };

    fetchData();
  }, []);

  return (
    <footer className={`c-footer w-100 bg-primary flex-wrap gap-4 ${centerClass} `}>
      <div className={`${itemsClass} ${centerClass}`}>
        <span className="c-header__border ml-2 mr-4 md:mr-10"></span>
        <h4 className="h3 text-white">{data.footerSiteTitle}</h4>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:email-new" />
        <a href="mailto:will.finnings@example.com" className="ml-4 text-white">
          {data.footerEmail}
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="tabler:phone" />
        <a href={`tel:${data.footerPhone}`} className="ml-4 text-white">
          {data.footerPhone}
        </a>
      </div>

      <div className={`${itemsClass} ${centerClass}`}>
        <Icon width={24} color="white" icon="carbon:location" />
        <span className="ml-2 text-white">{data.footerAddress}</span>
      </div>
    </footer>
  );
};

export default Footer;
