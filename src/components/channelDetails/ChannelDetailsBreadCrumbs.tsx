import Link from "next/link";
import React, { Fragment } from "react";
import Container from "../common/Container";

const ChannelDetailsBreadCrumbs = ({ titles }: { titles: string[] }) => {
  return (
    <Container className="p-0">
      <nav className="flex py-3 px-5 text-black ">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center ">
              <a className="text-md">Content</a>
            </Link>
          </li>
          {titles &&
            titles.length > 0 &&
            titles.map((title, index) => {
              return (
                <Fragment key={index}>
                  <li className="flex items-center text-sm">{`>`}</li>
                  <li className="flex items-center">
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm text-gray-500 "
                      >
                        {title}
                      </a>
                    </div>
                  </li>
                </Fragment>
              );
            })}
        </ol>
      </nav>
    </Container>
  );
};

export default ChannelDetailsBreadCrumbs;
