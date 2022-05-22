import React from "react";

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: PageProps) => {
  return (
    <div className={`mx-auto ${className} max-w-screen-xl p-3`}>{children}</div>
  );
};

export default Container;
