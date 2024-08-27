sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/Device",
    "sap/m/library",
    "sap/ui/model/json/JSONModel",
    "sap/m/Image",
    "sap/base/Log",
], function (Controller, MessageToast, Device,library, JSONModel,Image,Log) {
    "use strict";

    return Controller.extend("basicwebsite.controller.App", {
        onInit: function () {
            var oImgModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/travel.json"));
			this.getView().setModel(oImgModel, "img");

			this._setNumberOfImagesInCarousel(5);
        },
        onButtonPress: function(oEvent) {
            var oButton = oEvent.getSource();
            this.byId("actionSheet").openBy(oButton);
        },
        onAvatarPressed: function () {
			MessageToast.show("Avatar pressed!");
		},

		onLogoPressed: function () {
			MessageToast.show("Logo pressed!");
		},
        onPress: function (evt) {
			MessageToast.show("Button is Pressed");
		},
		onNumberOfImagesChange: function (oEvent) {
			this._setNumberOfImagesInCarousel(Number(oEvent.getParameter("value")));
		},

		_setNumberOfImagesInCarousel: function (iNumberOfImages) {
			if (!iNumberOfImages || iNumberOfImages < 1 || iNumberOfImages > 9) {
				return;
			}

			var oCarousel = this.byId("carouselSample");
			oCarousel.destroyPages();

			for (var i = 0; i < iNumberOfImages; i++) {
				var iImageNumber = i + 1;

				oCarousel.addPage(new Image("img" + iImageNumber, {
					src: "{img>/images/" + i + "}",
					alt: "Example picture " + iImageNumber,
					densityAware: false,
					decorative: false
				}));
			}
		},
        onPopoverOpen: function(oEvent) {
			this.byId("popover").openBy(oEvent.getSource());
		},

		onCommandPopoverOpen: function(oEvent) {
			this.byId("popoverCommand").openBy(oEvent.getSource());
		},
        onTogglePopoverSave: function(oEvent)  {
			this.getView().byId("CE_SAVE_POPOVER").setEnabled(oEvent.getParameter("state"));
		},


		onDelete: function () {
			MessageToast.show("CTRL+D: Delete triggered on controller");
		},

    });
});
