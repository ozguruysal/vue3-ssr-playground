const path = require("path");
const express = require("express");
const vueServerRenderer = require("@vue/server-renderer");
const { createBundleRenderer } = require("vue-bundle-renderer");
const serverBundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const server = express();

server.use("/dist", express.static(path.resolve(__dirname, "./dist")));

renderer = createBundleRenderer(serverBundle, {
  clientManifest,
  runInNewContext: false,
  vueServerRenderer,
});

server.get("*", async (req, res) => {
  res.setHeader("Content-Type", "text/html");

  const context = {
    req,
  };

  try {
    const content = await renderer.renderToString(context);

    const html = `
<!DOCTYPE html>
<html>
  <head>
    ${context.renderResourceHints()}
    ${context.renderStyles()}
    <title>Vue 3 SSR</title>
  </head>
  <body>
    <div id="app">${content}</div>
    ${context.renderScripts()}
  </body>
</html>`;

    res.send(html);
  } catch (err) {
    console.log(err);
  }
});

server.listen(8080, function () {
  console.log("server running on http://localhost:8080");
});
