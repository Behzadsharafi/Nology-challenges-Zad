import Data from "../Data/Data";
import styles from "./Card.module.scss";

const Card = ({
  planetName,
  diameterInKm,
  distanceFromSun,
  numberOfMoons,
  lengthOfYear,
  image,
}) => {
  let cardClasses = styles.card;
  if (numberOfMoons === 0) {
    cardClasses += ` ${styles.card_zeroMoon}`;
  }

  return (
    <div className={cardClasses}>
      <h2> {planetName}</h2>
      <h3> Diameter: {diameterInKm}</h3>
      <h3> Distance from Sun: {distanceFromSun}</h3>
      <h3> Number of Moons: {numberOfMoons}</h3>
      <h3>Length of Year:{lengthOfYear}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
