import { useState } from "react";
import styles from "./Card.module.scss";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

const Card = () => {
  const [randomTime, setRandomTime] = useState(12);

  const getRandomTime = () => {
    setRandomTime(Math.floor(Math.random() * 25));
  };

  let cardClass = styles.card;
  let sunOrMoon = sun;

  if (randomTime >= 6 && randomTime <= 18) {
    cardClass += ` ${styles.card_light}`;
    let sunOrMoon = sun;
  } else sunOrMoon = moon;

  return (
    <div className={cardClass}>
      <img src={sunOrMoon} alt="" />
      <h2>{randomTime} o'clock</h2>
      <button onClick={getRandomTime}>GetTime</button>
    </div>
  );
};

export default Card;
