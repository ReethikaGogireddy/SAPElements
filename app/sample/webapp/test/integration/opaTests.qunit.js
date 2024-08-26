sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sample/test/integration/FirstJourney',
		'sample/test/integration/pages/PlanetsList',
		'sample/test/integration/pages/PlanetsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PlanetsList, PlanetsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sample') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePlanetsList: PlanetsList,
					onThePlanetsObjectPage: PlanetsObjectPage
                }
            },
            opaJourney.run
        );
    }
);