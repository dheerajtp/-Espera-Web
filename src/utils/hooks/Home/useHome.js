import { useQuery } from "@tanstack/react-query";
import {
  getCovers,
  getEndindSoonData,
  getContestSoldOut,
  getActiveContest,
  getHistory,
} from "../../../services/Home";

export const useGetCovers = () => {
  return useQuery(["get-covers"], getCovers, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetEndingSpots = () => {
  return useQuery(["get-ending-spots"], getEndindSoonData, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetContestClosingSoon = () => {
  return useQuery(["get-contest-closing-soon"], getContestSoldOut, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetActiveContest = () => {
  return useQuery(["get-active-contest"], getActiveContest, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useGetHistory = () => {
  return useQuery(["get-history"], getHistory, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
