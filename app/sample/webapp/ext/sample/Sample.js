sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
    'use strict';

    return  Controller.extend("sap.m.sample.ActionSheet.controller.ActionSheet", {
        sample: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onButtonPress: function(oEvent) {
			var oButton = oEvent.getSource();
			this.byId("actionSheet").openBy(oButton);
		}
    
    });
});
