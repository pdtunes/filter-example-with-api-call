import _ from "lodash";
import { renderTeams } from "./renderTeams.js";

export function searchTeams(teams) {
  const search = document.querySelector(".search");

 function doTheSearch(event) {
    console.log(event.key);
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredTeams = teams.filter(function (team) {
      if (team.full_name.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    renderTeams(filteredTeams);
  };
  search.onkeyup = _.debounce(doTheSearch, 600, {leading: true, maxWait: 1000})
}
