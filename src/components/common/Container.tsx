import React from "react";

interface IPageProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IPageProps) => {
  return (
    <div className={`mx-auto ${className} max-w-screen-xl p-3`}>{children}</div>
  );
};

export default Container;
