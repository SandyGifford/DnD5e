# DnD5e TypeScript APi

This repo offers typings and function endpoints to the [DnD 5e API](http://www.dnd5eapi.co/).  It is the basis for the [dnd5e-client](https://github.com/SandyGifford/dnd5e-client) and [dnd5e-server](https://github.com/SandyGifford/dnd5e-server) packages.  Use those if you would like a full tool-set for use with a Node server.

If you would just like direct access to the typings, and class used to construct the functional endpoints in the `client` and `server` packages, this is the repo for you.

## installation

### Yarn
```
yarn add dnd5e
```

### NPM
```
npm install dnd5e
```

## use

After installing you can import normally:

```typescript
import * as DnD from "dnd5e";

// -- or --

import {AbilityScore} from "dnd5e";
```

The package is entirely typings except for the `Endpoints` class.  `Endpoints` is expected to be used as a singleton.  You instantiate it with a `fetch` method (defined by the `FetchLike` interface provided) and a base URL.