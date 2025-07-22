import { Measurement } from "../api/measurement";

export function generateRandomMeasurement(date?: Date): Measurement {
  const temperature = parseFloat((Math.random() * 60 - 10).toFixed(1)); // -10°C a 50°C
  const humidity = parseFloat((Math.random() * 100).toFixed(1));        // 0% a 100%
  const soilMoisture = Math.floor(Math.random() * 101);                 // 0 a 100%
  const luminosity = Math.floor(Math.random() * 101);                   // 0 a 100%

  const errorChance = Math.random();
  const errors = errorChance < 0.9
    ? ["NONE"]
    : [randomPick(["BUSY", "SENSOR_FAILURE", "CALIBRATION_NEEDED"])];

  return {
    temperature,
    humidity,
    soilMoisture,
    luminosity,
    errors,
    timestamp: (date ?? new Date()).toISOString(),
  };
}

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
