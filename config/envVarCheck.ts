import { envKeys } from "../src/constants/variables";

validateEnv();

export default function validateEnv() {
    envKeys.forEach((key) => {
        if (!process.env[key]) {
          console.warn("Environment variable ${key} is not set.");
        }
      });    
}