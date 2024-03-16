import React from 'react';

const TitleBar = ({
  title = '',
  description,
}: {
  back?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="">
      {/* <div>
        <Link href={back || '#'}>Back</Link>
      </div> */}
      <div className="text-4xl font-semibold">{title}</div>
      {description ? <div className="text-sm text-gray-500">{description}</div> : null}
    </div>
  );
};

export default TitleBar;
