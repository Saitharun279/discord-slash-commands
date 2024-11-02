import { env } from "../src/typeDefinitions/default.types";
import { loadEnv } from "./config";

validateEnv();

/**
 * Validate if all the required environment variables defined in the schema above are set
 * and are in the correct format else throw an error
 * ---
 */
export function validateEnv (){
    const envLoadedFromProcess: env = loadEnv({}, false);
    console.log(envLoadedFromProcess);
    const missingEnvVars = Object.keys(envLoadedFromProcess).filter((key) => envLoadedFromProcess[key] == '');

    // Logging missing environment variables and exit if any are missing
    if (missingEnvVars.length > 0) {
      throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
    } else {
      console.log('All required environment variables are set.');
    }   
}