import BeerRange from "../components/BeerRange/BeerRange";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <h1>Beer</h1>
      <p>beer</p>
      <BeerRange />
    </main>
  );
};

export default Home;
