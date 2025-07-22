import { Status } from "../api/system-status";

enum Activity {
  IDLE,         // 0 - Ocioso
  SENSING,      // 1 - Sensoriando
  CONNECTING,   // 2 - Conectando
  MOVING        // 3 - Em movimento
}

export function generateRandomSystemStatus(): Status {
  const sectors = [
    "Estufa A", "Campo B", "Depósito", "Irrigação", "Painel Solar"
  ];

  const batteryLevel = Math.floor(Math.random() * 101); // 0–100
  const connectionLevel = Math.floor(Math.random() * 5); // 0–4

  // Escolher atividade com base nos níveis
  let currentActivity: Activity;

  if (batteryLevel < 20) {
    currentActivity = Activity.IDLE;
  } else if (connectionLevel <= 1) {
    currentActivity = Activity.CONNECTING;
  } else {
    const activities: Activity[] = [Activity.IDLE, Activity.SENSING, Activity.MOVING];
    currentActivity = activities[Math.floor(Math.random() * activities.length)];
  }

  const currentSector = sectors[Math.floor(Math.random() * sectors.length)];
  const timestamp = new Date().toISOString();

  return {
    batteryLevel,
    connectionLevel,
    currentActivity: Activity[currentActivity],
    currentSector,
    timestamp,
  };
}