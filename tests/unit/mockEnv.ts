import { env } from "../../src/typeDefinitions/default.types";

export const mockEnv: env = {
  CURRENT_ENVIRONMENT: "mockEnvironment",
  DISCORD_APPLICATION_ID: "mockDiscordApplicationId",
  DISCORD_GUILD_ID: "mockDiscordGuildId",
  DISCORD_TOKEN: "mockDiscordToken",
  DISCORD_PUBLIC_KEY: "mockDiscordPublicKey",
  CLOUDFLARE_API_TOKEN: "mockCloudfareAPIToken",
  CLOUDFLARE_ACCOUNT_ID: "mockCloudfareAccountId",
  BOT_PRIVATE_KEY: "mockBotPrivateKey",
  RDS_SERVERLESS_PUBLIC_KEY: "mockRDSServerlessPublicKey",
  CRON_JOBS_PUBLIC_KEY: "mockCronJobsPublicKey",
  IDENTITY_SERVICE_PUBLIC_KEY: "mockIdentityServicePublicKey"
}


// export interface env {
//     CURRENT_ENVIRONMENT: string;
//     DISCORD_APPLICATION_ID: string;
//     DISCORD_GUILD_ID: string;
//     DISCORD_TOKEN: string;
//     DISCORD_PUBLIC_KEY: string;
//     CLOUDFLARE_API_TOKEN: string;
//     CLOUDFLARE_ACCOUNT_ID: string;
//     BOT_PRIVATE_KEY: string;
//     RDS_SERVERLESS_PUBLIC_KEY: string;
//     CRON_JOBS_PUBLIC_KEY: string;
//     IDENTITY_SERVICE_PUBLIC_KEY: string;
//   }
  