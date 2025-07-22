import { api } from "./base";

const API_URL = "/measurements";

export interface Measurement {
    id?: string;
    temperature: number;
    humidity: number;
    soilMoisture: number;
    luminosity: number;
    errors: string[];
    timestamp: string;
}

export async function getMeasurements(): Promise<Measurement[]> {
  try {
    const response = await api.get<Measurement[]>(`${API_URL}/list`);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : err instanceof Error ? err.message : "Unknown error");
  }
}

export async function setMeasurement(data: Measurement): Promise<boolean> {
  try {
    const response = await api.post<boolean>(`${API_URL}/`, data);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : err instanceof Error ? err.message : "Unknown error");
  }
}
