import { hot } from "react-hot-loader/root";

const Heading = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default hot(Heading);
