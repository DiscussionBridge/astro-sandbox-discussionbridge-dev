// Server-only native consumer configuration. Run native commands from this project root.
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = path.resolve(process.cwd());
export const nativeProjectRoot = pathToFileURL(projectRoot + path.sep);
const privateRoot = path.join(projectRoot, '.discussionbridge');
const credentials = {
  connectionId: 'dbc_65e703c0faaa3c80267ae8e0',
  secretFile: path.join(privateRoot, 'connection-secret'),
};
export const publicationOptions = {
  docsDir: path.join(projectRoot, 'src/content/articles'),
  stateFile: path.join(privateRoot, 'astro-to-state.json'),
  siteUrl: 'https://astro.sandbox.discussionbridge.dev',
  discourseUrl: 'https://sandbox-forum.discussionbridge.dev',
  routeBase: 'articles',
  controlledCreation: credentials,
};
export const bridgeOptions = {
  discourseUrl: publicationOptions.discourseUrl,
  siteUrl: publicationOptions.siteUrl,
  publishOnBuild: {
    enabled: true,
    ...credentials,
    docsDir: publicationOptions.docsDir,
    stateFile: publicationOptions.stateFile,
    routeBase: publicationOptions.routeBase,
  },
  fromDiscourse: {
    enabled: false,
    ...credentials,
    docsDir: path.join(projectRoot, 'src/content'),
    stateFile: path.join(privateRoot, 'astro-from-state.json'),
    routeBase: 'articles',
  },
  comments: { display: 'interactive' },
};

