import React from 'react';

const Sidebar = ({ children }: IChildren) => {
  return (
    <div className="min-h-[calc(100vh-64px)] p-6">
      {/* <div>Sidebar</div> */}
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
