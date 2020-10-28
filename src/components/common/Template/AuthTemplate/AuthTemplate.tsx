import React, { ReactNode } from "react";
import "./AuthTemplate.scss";

interface AuthTemplateProps {
  children: ReactNode;
}

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <div className="Auth-Template">
      <div className="Auth-Template-Box">{children}</div>
    </div>
  );
};

export default AuthTemplate;
