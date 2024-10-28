export interface env {
  CURRENT_ENVIRONMENT: string;
  DISCORD_APPLICATION_ID: string;
  DISCORD_GUILD_ID: string;
  DISCORD_TOKEN: string;
  DISCORD_PUBLIC_KEY: string;
  CLOUDFLARE_API_TOKEN: string;
  CLOUDFLARE_ACCOUNT_ID: string;
  BOT_PRIVATE_KEY: string;
  RDS_SERVERLESS_PUBLIC_KEY: string;
  CRON_JOBS_PUBLIC_KEY: string;
  IDENTITY_SERVICE_PUBLIC_KEY: string;
  TEST_ENV_VAR: string;
}

export interface environment {
  [key: string]: variables;
}

export interface variables {
  DASHBOARD_SITE_URL: string;
  RDS_BASE_API_URL: string;
  VERIFICATION_SITE_URL: string;
  TRACKING_CHANNEL_URL: string;
  PROFILE_SERVICE_HELP_GROUP_ID: string;
  RDS_STATUS_SITE_URL: string;
}

export interface discordCommand {
  name: string;
  description: string;
}

export interface responseJson {
  type: number;
  data: {
    content: string;
    flags?: number;
  };
}
