import {
  PanelCtrl
} from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk
// ../node_modules/mxgraph/javascript/dist/build

var mx = System.import('mxgraph');
var  mxGraph = mx.mxGraph;
var  mxShape = mx.mxShape;
var  mxClient = mx.mxClient;
var  mxConnectionConstraint = mx.mxConnectionConstraint;
var  mxPoint = mx.mxPoint;
var  mxPolyline = mx.mxPolyline;
var  mxEvent = mx.mxEvent;
var  mxRubberband = mx.mxRubberband;
var  mxCellState = mx.mxCellState;

class Ctrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
    this.initMxGraph();
  }

  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    //window.System.import(this.panelPath + 'css/flowchart.css!');
    // Remove next lines if you don't need separate styles for light and dark themes
  }

  initMxGraph() {
    console.log("initMxGraph");
    var container = this.panel.init;
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported())
    {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    }
    else
    {
      // Disables the built-in context menu
      mxEvent.disableContextMenu(container);
      
      // Creates the graph inside the given container
      var graph = new mxGraph(container);

      // Enables rubberband selection
      new mxRubberband(graph);
      
      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      var parent = graph.getDefaultParent();
              
      // Adds cells to the model in a single step
      graph.getModel().beginUpdate();
      try
      {
        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
        var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
        var e1 = graph.insertEdge(parent, null, '', v1, v2);
      }
      finally
      {
        // Updates the display
        graph.getModel().endUpdate();
      }
    }
  }
  
  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }

}



Ctrl.templateUrl = 'partials/template.html';

export {
  Ctrl as PanelCtrl
}