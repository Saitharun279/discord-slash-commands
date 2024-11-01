import config from "../../../config/config";
import { environment } from "../../fixtures/config";
import {
  RDS_BASE_API_URL,
  RDS_BASE_DEVELOPMENT_API_URL,
  RDS_BASE_STAGING_API_URL,
} from "../../../src/constants/urls";
import { mockEnv } from "../mockEnv";

describe("Test config function", () => {
  it("Should return production config environment", () => {
    expect(config(mockEnv).RDS_BASE_API_URL).toBe(RDS_BASE_API_URL);
  });

  it("Should return staging config environment", () => {
    expect(config(mockEnv).RDS_BASE_API_URL).toBe(
      RDS_BASE_STAGING_API_URL
    );
  });

  it("Should return default config environment", () => {
    expect(config(mockEnv]).RDS_BASE_API_URL).toBe(
      RDS_BASE_DEVELOPMENT_API_URL
    );
  });
});
