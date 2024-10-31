import { env, envKeys } from "../src/typeDefinitions/default.types";

function loadEnv(): Pick<env, 'DISCORD_TOKEN' | 'DISCORD_PUBLIC_KEY' | 'DISCORD_APPLICATION_ID'>{
    const { DISCORD_TOKEN, DISCORD_PUBLIC_KEY, DISCORD_APPLICATION_ID } = process.env;
  
    if (!DISCORD_TOKEN || !DISCORD_PUBLIC_KEY || !DISCORD_APPLICATION_ID) {
      throw new Error("Missing required environment variables");
    }
  
    return {
      DISCORD_TOKEN,
      DISCORD_PUBLIC_KEY,
      DISCORD_APPLICATION_ID,
    };
}

export default function validateEnv() {
    type EnvKeysCheck = typeof envKeys[number];
    type MissingKeys = Exclude<EnvKeysCheck, keyof env>;

    envKeys = process.env;
    
}