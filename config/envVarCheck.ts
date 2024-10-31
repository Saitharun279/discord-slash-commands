import { envKeys } from "../src/constants/variables";
import { config } from "dotenv";


config();
validateEnv();

export default function validateEnv() {
    console.log(process.env.DISCORD_APPLICATION_ID);
    envKeys.forEach((key) => {
        console.log(process.env[key]);
        if (!process.env[key]) {
          console.warn("Environment variable ${key} is not set.");
        }
      });    
}