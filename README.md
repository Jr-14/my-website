# My Personal Website

My personal website created using Svelte and Firebase. 

Svelte is used to generate a static website and deployed using Firebase.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deploying

Firebase is used to deploy the app. Ensure you are first logged in using:

```bash
firebase login
```

Then we can deploy using:

```bash
npm run deploy
```

## Colour Scheme

Colour scheme uses Tokyo Night Colour Palette - [Tokyo Night VSCode Theme](https://github.com/enkia/tokyo-night-vscode-theme)

But for the most minmal website, black and white will do.

## TODO List:

- [x] Generate minimal website with an /about and /blog route.
- [x] Deploy with Firebase
- [ ] Style landing page with a navigation bar
- [ ] Style landing page to center content
- [ ] Style about me page to center content
- [ ] Add information about me in about me page
- [ ] Determine blogging layout
- [ ] Add blog entry about creating a firebase app blog with minimal content as PoC to show how easy it is to create and deploy your own website.
- [ ] CI/CD?
- [ ] Testing?
- [ ] Dockerising?
- [ ] others?