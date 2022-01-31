const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: process.env.NG_APP_PROXY_TARGET,
    secure: false,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
