import teams from "./data/teams.js";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://cors-anywhere.herokuapp.com/https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

async function getTeams() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.data);

        const teams = json.data;

        renderTeams(teams);
        searchTeams(teams);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".team-container");
    }
}

getTeams();
