import React, { FC } from "react";

interface HeadProps {
  title: string;
  description: string;

}

const Heading: FC<HeadProps> = ({ title, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
    </>
  );
};

export default Heading;