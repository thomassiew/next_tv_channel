import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-astro-header">
      <Container className="p-4">
        <Link href="/">
          <a>
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
          </a>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
