import React from "react";

interface LoginLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default MainLayout;
