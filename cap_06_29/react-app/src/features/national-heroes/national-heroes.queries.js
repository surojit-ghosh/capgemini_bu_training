import { useQuery } from "@tanstack/react-query";
import { getNationalHeroes } from "./national-heroes.service";

export function useNationalHeroes() {
  return useQuery({
    queryKey: ["nationalheroes"],
    queryFn: getNationalHeroes,
  });
}
