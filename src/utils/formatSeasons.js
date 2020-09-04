export const formatSeasons = (allEpisodes) => {
  const seasons = {};

  allEpisodes.forEach((e) => {
    console.log("I am the value of e", e.season)
    // If there isn't a property within the seasons object called Potato [season] then create that property
    if (!seasons.hasOwnProperty(`Potato ${e.season}`)) {
      console.log("I am the result of the initial evaluation of the first if statement",!seasons.hasOwnProperty(`Potato ${e.season}`))
      console.log("seaons value", seasons)
      seasons[`Potato ${e.season}`] = [];
    }
    console.log("I am the oppiste evaluation", e)
    seasons[`Potato ${e.season}`].push(e);
  });
  return seasons;
};

// Q: What is the outcome of this utils function? 
// - A: Is to organize the given season into a dropdown for a user to come and filter the card of episodes

// Q: What are the steps after this function recives the state of all the Episodes? 
// - A: The formatSeasons() function is built to organize the seasons into numerical order
// - Step 1) So the first thing this function does is it decalres an an empty object called seasons (I assume this is meant to hold the organized seasons by season number, and order)
// - Step 2) After the empty object is decalred I then conduct a .forEach() method on the 