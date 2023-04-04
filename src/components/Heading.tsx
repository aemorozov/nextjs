import React, { FC } from "react";

type tagAndTextTypeProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};

const Heading: FC<tagAndTextTypeProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
