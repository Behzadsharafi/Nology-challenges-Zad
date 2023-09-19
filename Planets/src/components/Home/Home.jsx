import Card from "../Card/Card";
import styles from "./Home.module.scss";
import Data from "../Data/Data";

const Home = () => {
  let sortedData = [...Data].sort((a, b) => a.diameterInKm - b.diameterInKm);

  return (
    <div className={styles.home}>
      {sortedData.map((item) => (
        <Card
          key={item.planetName}
          planetName={item.planetName}
          distanceFromSun={item.distanceFromSun}
          diameterInKm={item.diameterInKm}
          numberOfMoons={item.numberOfMoons}
          lengthOfYear={item.lengthOfYear}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Home;
