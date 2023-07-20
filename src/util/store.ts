import type Race from "../types/Race";

const getRacesFromLocalStorage = (): Race[] => {
  const races = window.localStorage.getItem("races");
  if (races !== null) {
    try {
      return JSON.parse(races);
    } catch (error) {
      console.error("Error parsing races from local storage:", error);
    }
  }
  return [];
};

const saveNewRace = (race: Race) => {
    let races = getRacesFromLocalStorage()
    races.push(race)
    window.localStorage.setItem("races", JSON.stringify(races))
}

const getRaces = () => getRacesFromLocalStorage()
    

export { saveNewRace, getRaces }