import { apiClient } from "../../lib/api-client";

export async function getNationalHeroes() {
  const response = await apiClient.get("/nationalheroes");
  return response.data;
}
