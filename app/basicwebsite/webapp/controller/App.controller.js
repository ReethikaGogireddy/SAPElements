sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/Device",
    "sap/m/library",
    "sap/ui/model/json/JSONModel",
    "sap/m/Image",
], function (Controller, MessageToast, Device,library, JSONModel,Image) {
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
			MessageToast.show(evt.getSource().getId() + " Pressed");
		},
        onArrowsPlacementSelect: function (oEvent) {
			var oCarousel = this.byId("carouselSample"),
				sSelectedValue = oEvent.getSource().getSelectedButton().getText();

			if (sSelectedValue in CarouselArrowsPlacement) {
				oCarousel.setArrowsPlacement(sSelectedValue);
			}
		},

		onPageIndicatorPlacementSelect: function (oEvent) {
			var oCarousel = this.byId("carouselSample"),
				sSelectedValue = oEvent.getSource().getSelectedButton().getText();

			if (sSelectedValue in CarouselPageIndicatorPlacementType) {
				oCarousel.setPageIndicatorPlacement(sSelectedValue);
			}
		},

		onBackgroundDesignSelect: function (oEvent) {
			var oCarousel = this.byId("carouselSample"),
				sSelectedValue = oEvent.getSource().getSelectedButton().getText();

			if (sSelectedValue in BackgroundDesign) {
				oCarousel.setBackgroundDesign(sSelectedValue);
			}
		},

		onPageIndicatorBackgroundDesignSelect: function (oEvent) {
			var oCarousel = this.byId("carouselSample"),
				sSelectedValue = oEvent.getSource().getSelectedButton().getText();

			if (sSelectedValue in BackgroundDesign) {
				oCarousel.setPageIndicatorBackgroundDesign(sSelectedValue);
			}
		},

		onPageIndicatorBorderDesignSelect: function (oEvent) {
			var oCarousel = this.byId("carouselSample"),
				sSelectedValue = oEvent.getSource().getSelectedButton().getText();

			if (sSelectedValue in BorderDesign) {
				oCarousel.setPageIndicatorBorderDesign(sSelectedValue);
			}
		},

		onShowPageIndicatorChange: function (oEvent) {
			var oCarousel = this.byId("carouselSample");
			oCarousel.setShowPageIndicator(oEvent.getParameter("state"));
		},

		onResizeCarouselContainer: function (oEvent) {
			var iOriginalHeight = 650,
				iValue = oEvent.getParameter("value"),
				oCarouselContainer = this.byId("carouselContainer"),
				iNewHeight = Math.floor(iOriginalHeight * iValue / 100);

			oCarouselContainer.setWidth(iValue + "%");
			oCarouselContainer.setHeight(iNewHeight + "px");
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

		onNumberOfPages: function(oEvent) {
				const sVisiblePageCount = oEvent.getParameter("value");

				this.byId("carouselSample").getCustomLayout()?.setVisiblePagesCount(Number(sVisiblePageCount));
		},

		OnScrollModeChange: function(oEvent) {
			const CarouselScrollMode = mobileLibrary.CarouselScrollMode,
					bViewMode = oEvent.getParameter("state"),
					sScrollMode = bViewMode ?  CarouselScrollMode.VisiblePages : CarouselScrollMode.SinglePage;

					this.byId("carouselSample").getCustomLayout()?.setScrollMode(sScrollMode);
		}
    });
});
