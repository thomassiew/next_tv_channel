interface IPageProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IPageProps) => {
  return (
    <div className={`mx-auto   ${className} max-w-screen-lg p-3`}>{children}</div>
  );
};

export default Container;
