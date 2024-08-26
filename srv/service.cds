using { com.astronomy.things as db } from '../db/schema';

service AstronomyThings {
    entity Planets as projection on db.Planets;
}

annotate AstronomyThings.Planets with @odata.draft.enabled;
annotate AstronomyThings.Planets with @(
    UI.LineItem:[
        {
            Value: name
        },
        {
            Value: place
        },
        {
            Value: diameter
        },
        {
            Value: mass
        },
        {
            Value: distancefromsun
        },
        {
            Value: hightemp
        },
        {
            Value: lowtemp
        }
       
    ],
     UI.FieldGroup #Planets : {
        $Type : 'UI.FieldGroupType',
        Data : [
        {
            Value: name
        },
        {
            Value: place
        },
        {
            Value: diameter
        },
        {
            Value: mass
        },
        {
            Value: distancefromsun
        },
        {
            Value: hightemp
        },
        {
            Value: lowtemp
        }
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'PlanetsFacet',
            Label : 'Planets',
            Target : '@UI.FieldGroup#Planets',
        },
    ],

);
