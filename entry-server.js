import { initApp } from "./main";

export default async (context) => {
  try {
    const { app, router } = initApp();

    router.push(context.req.url);

    await router.isReady();

    return app;
  } catch (err) {
    throw err;
  }
};
