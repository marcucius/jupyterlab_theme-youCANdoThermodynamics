import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for myorg/jupyterlab_theme-youCANdoThermodynamics
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@myorg/jupyterlab_theme-youCANdoThermodynamics:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@myorg/jupyterlab_theme-youCANdoThermodynamics/index.css';

    manager.register({
      name: 'jupyterlab_theme-youCANdoThermodynamics',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
