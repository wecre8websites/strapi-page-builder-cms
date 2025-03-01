
# 🚀 Getting started with Page Builder for Strapi

This template includes everything needed to start using Page Builder for Strapi.

To get set up with a ready-to use demo, run `npm run prepare` from the command line.

Page Builder requires an override to the default `strapi::security` middleware to allow it to load your site within an iframe. The prepare script above has update the defaults to include "http://localhost:3000" in the frame-src directive. This will need to be updated with your live site URL when ready for production.

```bash filename="config/middlewares.ts"
export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-src': ["'self'", 'cdn.jsdelivr.net', 'localhost:3000'],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

## NextJS Starter Template

If you haven't already done so, bootstrap a NextJS project in a separate folder by running `npx create-next-app@latest web -e https://github.com/wecre8websites/strapi-page-builder-demo`

This gives you a ready-to-go site, multilanguage site with (@wecre8websites/strapi-page-builder-react)[https://www.npmjs.com/package/@wecre8websites/strapi-page-builder-react] installed and several Page Builder components to get you started.

You'll need to create and API Token in the Strapi Admin panel and save it to the `.env` of the Page Builder demo app, along with your Page Builder API Key. Get one free at (https://pagebuilder.wc8.io)[https://pagebuilder.wc8.io]

## Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
