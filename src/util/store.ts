import type Race from "../types/Race";
import { browser } from "$app/environment";

const getRacesFromLocalStorage = (): Race[] => {
  if (!browser) return [];

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
  if (!browser) return [];

  let races = getRacesFromLocalStorage();
  races.push(race);
  window.localStorage.setItem("races", JSON.stringify(races));
};

const updateRace = (race: Race) => {
  if(!browser) return []

  let races = getRacesFromLocalStorage();

  // Find and replace race at index
  races.splice(
    races.findIndex((r) => r.id === race.id),
    1,
    race
  );

  window.localStorage.setItem("races", JSON.stringify(races));
};

const getRaces = () => getRacesFromLocalStorage();

export { saveNewRace, getRaces, updateRace };
