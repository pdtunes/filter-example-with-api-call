import axios from "axios";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";
import { displayMessage } from "./ui/displayMessage.js";

const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

async function getTeams() {
  try {
    const response = await axios.get(url);
    const { data } = response.data;

    console.log(data);

    renderTeams(data);
    searchTeams(data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".team-container");
  }
}

getTeams();
