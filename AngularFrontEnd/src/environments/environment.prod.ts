export const environment = {
  production: (process.env.NG_APP_IS_PRODUCTION_ENVIRONMENT === "true"),
  baseUrl: process.env.NG_APP_BASE_URL,
  apiBaseUrl: process.env.NG_APP_API_BASE_URL
};
