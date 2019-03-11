/**
 * Plugins must be valid Node.js requirable modules,
 * usually shipped as a directory and containing either:
 *
 *  - an `index.js` file in its root directory, exporting a Javascript class
 *  - a well-formed `package.json` file in its root directory,
 *    specifying the path of the main requirable file in the `main` field.
 *
 * To determine the Plugin name, Kuzzle looks for the `name` field
 * in the `manifest.json` file.
 * @deprecated  - If no `manifest.json` file is found, Kuzzle will fall back
 * to the `package.json` file, if there is one. Otherwise, an exception is thrown
 * and Kuzzle will fail to start.
 *
 * @see https://docs.kuzzle.io/plugins-reference/plugins-creation-prerequisites/
 */
class CorePlugin {
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-console */

  /**
   * Create a new instance of CorePlugin
   *
   * Workflow:
   *  - Kuzzle loads plugins in <kuzzle install dir>/plugins/enabled/* and
   *     instantiate them, also configuration and manifest.json files are read.
   *  - The "init" function is called
   *  - The plugin manager registers all plugin features into Kuzzle:
   *    hooks, pipes, authentication strategies and custom API routes
   *
   * Kuzzle aborts its own start sequence if any error occurs during
   * plugins initialization.
   *
   */
  constructor () {
    this.context = null;
    this.config = {};

    this.hooks = {};

    this.pipes = {};

    this.controllers = {
      marvelController: {
        createHero: 'createHero'
      }
    };

    this.routes = [];
  }

  /**
   * Initializes the plugin with configuration and context.
   *
   * @param {Object} config - This plugin custom configuration
   * @param {Object} context      - A restricted gateway to the Kuzzle API
   *
   */
  init (config, context) {
    this.config = config;
    this.context = context;
  }

  async createHero (request) {
    return 'Hello';
  }
}

module.exports = CorePlugin;
