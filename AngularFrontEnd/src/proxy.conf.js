const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: process.env.NG_APP_PROXY_TARGET,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
