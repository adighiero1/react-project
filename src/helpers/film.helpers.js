export function filterFilmsByDirector(list, director) {
  console.log("search director", director);
  // function that gets the list
  //given the list look for directors
  //if the director is what you are looking for include it else exclude it
  if (director)
    // truthy statement. if director is true filter, else return the list. without this it would return an empty list
    return list.filter((film) => film.director == director);
  else return list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((film) => film[prop] || ""))]; // new set returns only unique items, removing duplicates
}
// these functions are used in films.page.jx

export function getFilmStats(list) {
  return list.reduce(
    (stats, film) => {
      stats.total++;
      stats.acc_score += Number(film.rt_score);
      stats.avg_score = stats.acc_score / stats.total;
      if (stats.latest) {
        stats.latest =
          stats.latest > film.release_date ? film.release_date : stats.latest;
      } else stats.latest = film.release_date;
      return stats;
    },
    {
      acc_score: 0, //default values
      avg_score: 0,
      total: 0,
      latest: null,
    }
  );
}
