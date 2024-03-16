import React from 'react';

const Sidebar = ({ children }: IChildren) => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#E9EDF3] p-4 md:p-6">
      {/* <div>Sidebar</div> */}
      <div className="h-full w-full pt-4">{children}</div>
    </div>
  );
};

export default Sidebar;
