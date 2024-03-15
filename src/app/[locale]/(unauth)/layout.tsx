import React from 'react';

const UnAuthLayout = ({ children }: IChildren) => {
  return (
    <div>
      <div>UnAuthLayout</div>
      <div>{children}</div>
    </div>
  );
};

export default UnAuthLayout;
