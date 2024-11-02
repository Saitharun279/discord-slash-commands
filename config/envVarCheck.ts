import { env } from "../src/typeDefinitions/default.types";
import { config } from "dotenv";

export function loadEnv (
  env: env,
  fromWorkerEnv: boolean
): env {
  const Env:env = {
    CURRENT_ENVIRONMENT: fromWorkerEnv ? env.CURRENT_ENVIRONMENT : process.env.CURRENT_ENVIRONMENT || '',
    DISCORD_APPLICATION_ID: fromWorkerEnv ? env.DISCORD_APPLICATION_ID : process.env.DISCORD_APPLICATION_ID || '',
    DISCORD_GUILD_ID: fromWorkerEnv ? env.DISCORD_GUILD_ID : process.env.DISCORD_GUILD_ID || '',
    DISCORD_TOKEN: fromWorkerEnv ? env.DISCORD_TOKEN : process.env.DISCORD_TOKEN || '',
    DISCORD_PUBLIC_KEY: fromWorkerEnv ? env.DISCORD_PUBLIC_KEY : process.env.DISCORD_PUBLIC_KEY || '',
    CLOUDFLARE_API_TOKEN: fromWorkerEnv ? env.CLOUDFLARE_API_TOKEN : process.env.CLOUDFLARE_API_TOKEN || '',
    CLOUDFLARE_ACCOUNT_ID: fromWorkerEnv ? env.CLOUDFLARE_ACCOUNT_ID : process.env.CLOUDFLARE_ACCOUNT_ID || '',
    BOT_PRIVATE_KEY: fromWorkerEnv ? env.BOT_PRIVATE_KEY : process.env.BOT_PRIVATE_KEY || '',
    RDS_SERVERLESS_PUBLIC_KEY: fromWorkerEnv ? env.RDS_SERVERLESS_PUBLIC_KEY : process.env.RDS_SERVERLESS_PUBLIC_KEY || '',
    CRON_JOBS_PUBLIC_KEY: fromWorkerEnv ? env.CRON_JOBS_PUBLIC_KEY : process.env.CRON_JOBS_PUBLIC_KEY || '',
    IDENTITY_SERVICE_PUBLIC_KEY: fromWorkerEnv ? env.IDENTITY_SERVICE_PUBLIC_KEY : process.env.IDENTITY_SERVICE_PUBLIC_KEY || ''
  }
  return Env;
}


config();
validateEnv();



/**
 * Validate if all the required environment variables defined in the schema above are set
 * and are in the correct format else throw an error
 * ---
 */
export default function validateEnv (){
    const env: env = loadEnv({}, false);
    console.log(env);
    const missingEnvVars = Object.keys(env).filter((key) => !env[key] && env[key] != "");

    // Logging missing environment variables and exit if any are missing
    if (missingEnvVars.length > 0) {
      console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
      process.exit(1); // Exit with code 1 if any required env var is missing
    } else {
      console.log('All required environment variables are set.');
    }   
}