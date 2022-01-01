import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://project-zr.herokuapp.com/",
      changeOrigin: true,
    }),
  );
};
