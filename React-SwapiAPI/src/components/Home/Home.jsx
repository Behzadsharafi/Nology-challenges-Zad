import { useEffect, useState } from "react";
import { getPerson } from "../../services/getPerson";
import styles from "./Home.module.scss";

const Home = () => {
  const [personData, setPersonData] = useState(null);
  const [personId, setPersonId] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    getPerson(personId)
      .then((person) => {
        setPersonData(null);
        setPersonData(person);
        setErrorMessage(null);
      })
      .catch((e) => setErrorMessage(e.message));
  };

  const handleInputChange = (e) => {
    setPersonId(e.target.value);
  };

  useEffect(() => {
    getPerson(personId)
      .then((person) => setPersonData(person))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className={styles.home}>
      <form className={styles.form} action="">
        <input
          onChange={handleInputChange}
          value={personId}
          type="number"
          name=""
          id=""
        />
        <button onClick={handleSubmit}>Get Character</button>
      </form>
      <div>
        {personData ? (
          <div className={styles.displayBox}>
            <h3>Name: {personData.name}</h3>
            <h3>Height: {personData.height}</h3>
            <h3>Birth Year: {personData.birth_year}</h3>
            <h3>Eye Color: {personData.eye_color}</h3>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

export default Home;

// import React, { useState } from "react";

// const Home = () => {
//   const [personData, setPersonData] = useState(null);
//   const [error, setError] = useState(null);
//   const [personId, setPersonId] = useState("");

//   const fetchPersonData = async () => {
//     try {
//       const response = await fetch(`https://swapi.dev/api/people/${personId}`);
//       if (!response.ok) {
//         throw new Error("Person not found. Please enter a valid ID.");
//       }
//       const data = await response.json();
//       setPersonData(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setPersonData(null);
//     }
//   };

//   return (
//     <div>
//       <h1>SWAPI Person Information</h1>
//       <div>
//         <label htmlFor="personId">Enter Person ID: </label>
//         <input
//           type="number"
//           id="personId"
//           value={personId}
//           onChange={(e) => setPersonId(e.target.value)}
//         />
//         <button onClick={fetchPersonData}>Fetch Person</button>
//       </div>
//       {error && <p>{error}</p>}
//       {personData && (
//         <div>
//           <h2>Name: {personData.name}</h2>
//           <p>Height: {personData.height} cm</p>
//           <p>Birth Year: {personData.birth_year}</p>
//           <p>Eye Color: {personData.eye_color}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
