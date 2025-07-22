import { deleteCookie, hasCookie } from "cookies-next/client";
import { api } from "./base";
import { AxiosError } from "axios";

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
): Promise<AuthResponse|AxiosError|any> {
  try {
    const response = await api.post<AuthResponse>(`${API_URL}/`, credentials);
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err;
    }
    return err
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
