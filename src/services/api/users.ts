import { api } from "./base";

const API_URL = "/users";

export interface User {
  id: string;
  name: string;
  email: string;
}

export async function getUser(): Promise<User> {
  try {
    const response = await api.get<User>(`${API_URL}/`);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : err instanceof Error ? err.message : "Unknown error");
  }
}
