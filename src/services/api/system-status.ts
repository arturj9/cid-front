import { api } from "./base";

const API_URL = "/system-status";

export interface Status {
    id?: string;
    batteryLevel: number;
    connectionLevel: number;
    currentActivity: string;
    currentSector: string;
    timestamp: string;
}

export async function getStatus(): Promise<Status> {
  try {
    const response = await api.get<Status[]>(`${API_URL}/list`);
    return response.data[0];
  } catch (err) {
    throw new Error(typeof err === "string" ? err : err instanceof Error ? err.message : "Unknown error");
  }
}

export async function setSystemStatus(data: Status): Promise<boolean> {
  try {
    const response = await api.post<boolean>(`${API_URL}/`, data);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : err instanceof Error ? err.message : "Unknown error");
  }
}

