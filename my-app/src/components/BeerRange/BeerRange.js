import { hot } from "react-hot-loader/root";
import { beer } from "../../helper/Beer";
import Image from "next/image";

const BeerRange = () => {
  console.log(beer);
  return (
    <ul>
      {beer.map(({ id, title, image }) => (
        <li key={id}>
          <p>{title}</p>
          <Image src={image} width={50} height={50} alt={title} />
        </li>
      ))}
    </ul>
  );
};

export default BeerRange;
