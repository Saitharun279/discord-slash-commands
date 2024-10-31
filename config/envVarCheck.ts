import { envKeys } from "../src/constants/variables";
import { config } from "dotenv";


config();
validateEnv();

export default function validateEnv() {
    const missingEnvVars = envKeys.filter((key) => !process.env[key]);

    // Logging missing environment variables and exit if any are missing
    if (missingEnvVars.length > 0) {
      console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
      process.exit(1); // Exit with code 1 if any required env var is missing
    } else {
      console.log('All required environment variables are set.');
    }    
}