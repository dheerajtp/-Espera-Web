import APIConfiguration from "../../api";

export const getCovers = async () => {
  let response = await APIConfiguration.API.get("data/getCovers");
  return response;
};

export const getEndindSoonData = async () => {
  let response = await APIConfiguration.API.get("data/getEndingSpots");
  return response;
};

export const getContestSoldOut = async () => {
  let response = await APIConfiguration.API.get("contest/getContestsSoldout");
  return response;
};

export const getActiveContest = async () => {
  let response = await APIConfiguration.API.get("contest/getContestsActive");
  return response;
};

export const getHistory = async () => {
  let response = await APIConfiguration.API.get("contest/getHistory");
  return response;
};
