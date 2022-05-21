import Image from "next/image";
import React from "react";
import Container from "../common/Container";

const Header = () => {
  return (
    <div className="bg-astro-header">
      <Container className="p-4">
        <div className="h-32px relative w-76px">
          <Image
            src={
              "https://acm-assets.eco.astro.com.my/images/astro-logo-white.svg"
            }
            layout={"fill"}
            objectFit={"contain"}
            alt="astro"
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
