import React from 'react';

const AuthLayout = ({ children }: IChildren) => {
  return (
    <div>
      <div>AuthLayout</div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
