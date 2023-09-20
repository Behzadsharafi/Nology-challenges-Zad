export const getPerson = async (number) => {
  const response = await fetch(`https://swapi.dev/api/people/${number}`);
  if (!response.ok) {
    throw new Error("Please enter a number between 1 and 83");
  }
  const data = await response.json();
  return data;
};

// export const getPerson = async () => {
//   try {
//     const response = await fetch(`https://swapi.dev/api/people/${personId}`);
//     if (!response.ok) {
//       throw new Error("Person not found. Please enter a valid ID.");
//     }
//     const data = await response.json();
//     setPersonData(data);
//     setError(null);
//   } catch (err) {
//     setError(err.message);
//     setPersonData(null);
//   }
// };
