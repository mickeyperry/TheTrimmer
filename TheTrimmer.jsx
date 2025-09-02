{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPalette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "The Trimmer", undefined, { resizeable: true });
            
            if (myPalette != null) {
                myPalette.orientation = "column";
                myPalette.alignChildren = ["center","top"];
                myPalette.spacing = 10;
                myPalette.margins = 16;

                var button1 = myPalette.add("button", undefined, "TRIM!", {name: "button1"});
                button1.preferredSize.height = 30;
                button1.preferredSize.width = 130;

                button1.onClick = function() {
                    // Your script goes here
                    var comp = app.project.activeItem;

                    if(comp != null && (comp instanceof CompItem)){
                        var selectedLayers = comp.selectedLayers;

                        if(selectedLayers.length > 0) {
                            var lastSelectedLayer = selectedLayers[selectedLayers.length - 1];

                            app.beginUndoGroup("Trim Selected Layers");

                            for (var i = 0; i < selectedLayers.length - 1; i++) {
                                var currentLayer = selectedLayers[i];

                                currentLayer.inPoint = lastSelectedLayer.inPoint;
                                currentLayer.outPoint = lastSelectedLayer.outPoint;
                            }

                            app.endUndoGroup();
                        } else {
                            alert("Please select a layer.");
                        }
                    } else {
                        alert("Please select a composition.");
                    }
                }

                myPalette.layout.layout(true);
                myPalette.layout.resize();
                myPalette.onResizing = myPalette.onResize = function () { this.layout.resize(); }
            }
            return myPalette;
        }
        
        var pal = myScript_buildUI(thisObj);
        if ((pal != null) && (pal instanceof Window)) {
            pal.center();
            pal.show();
        }
    }

    myScript(this);
}
