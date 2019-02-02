import { PanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

class Ctrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    window.System.import(this.panelPath + 'css/flowchart.css!');
    // Remove next lines if you don't need separate styles for light and dark themes
  }
  
  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }

}

Ctrl.templateUrl = 'partials/template.html';

export { Ctrl as PanelCtrl }
