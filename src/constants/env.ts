import packageData from "../../package.json";
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 8080,
  DB_HOST: String(process.env.DB_HOST || "localhost"),
  DB_NAME: String(process.env.DB_NAME || ""),
  DB_USER: String(process.env.DB_USER || ""),
  DB_PASSWORD: String(process.env.DB_PASSWORD || ""),
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  JWT_SECRET: String(process.env.JWT_SECRET || ""),
  JWT_EXPIRES_IN: Number(process.env.JWT_EXPIRES_IN) || 86400,
  APP_PREFIX: String(process.env.APP_PREFIX || "api"),
  VERSION: packageData.version,
};
