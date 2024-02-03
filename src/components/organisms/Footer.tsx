import React from "react";

// scss import
import styels from "./styles/Footer.module.scss";
import FooterHoverBtn from "../atoms/FooterHoverBtn";

const Footer = () => {
  return (
    <div className={styels.footer}>
      <div className={styels.container}>
        <div className={styels.topBox}>
          <FooterHoverBtn
            id={1}
            title="sample"
            desc="samplesaplesamlesample"
            link="/"
          />
          <FooterHoverBtn
            id={1}
            title="sample"
            desc="samplesaplesamlesample"
            link="/"
          />
        </div>
        <div className={styels.mainBox}></div>
        <div className={styels.bottomBox}></div>
      </div>
    </div>
  );
};

export default Footer;
