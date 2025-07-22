import { deleteCookie, hasCookie } from "cookies-next/client";
import { api } from "./base";

const API_URL = "/auth";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const response = await api.post<AuthResponse>(`${API_URL}/`, credentials);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("No token received in response");
  }
}

export async function logout(): Promise<boolean> {
  try {
    if (hasCookie("token")) {
      deleteCookie("token");
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
