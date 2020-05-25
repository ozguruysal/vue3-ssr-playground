# Vue 3 Teleport Test SSR

```sh
# install
yarn

# build
yarn build

# run
yarn start
```

Open http://localhost:8080 and in browser console, you'll see below warnings and error.

```
[Vue warn]: Failed to resolve component: Child 
  at <TeleportTest onVnodeMounted=fn<onVnodeMounted> onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <RouterView> 
  at <App>

[Vue warn]: Hydration children mismatch in <div>: server rendered element contains fewer child nodes than client vdom. 
  at <TeleportTest onVnodeMounted=fn<onVnodeMounted> onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <RouterView> 
  at <App>

runtime-dom.esm-bundler.js:227 Uncaught (in promise) TypeError: Cannot read property 'nextSibling' of null
    at nextSibling (runtime-dom.esm-bundler.js:227)
    at Object.hydrateTeleport [as hydrate] (runtime-core.esm-bundler.js:1168)
    at hydrateNode (runtime-core.esm-bundler.js:2532)
    at hydrateChildren (runtime-core.esm-bundler.js:2621)
    at hydrateElement (runtime-core.esm-bundler.js:2583)
    at hydrateNode (runtime-core.esm-bundler.js:2503)
    at hydrateChildren (runtime-core.esm-bundler.js:2621)
    at hydrateElement (runtime-core.esm-bundler.js:2583)
    at hydrateNode (runtime-core.esm-bundler.js:2503)
    at componentEffect (runtime-core.esm-bundler.js:3255)
```
