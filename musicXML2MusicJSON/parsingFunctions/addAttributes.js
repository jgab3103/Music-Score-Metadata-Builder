var constants = require('.././utilities/constants')


function convertBeatsIntoQuarterBeats (beats, beatType) {
    var x = (4 * beats) / beatType;
    return x;
}


module.exports.addAttributes = function (musicData, divisions) {
    var arrayToHoldEachInstrumentSeperately = musicData;
    var measureStartingLocationInQuarterNotes = 0;
    
    for (var i = 0; i < arrayToHoldEachInstrumentSeperately.length; i++) {
        var measureStartingLocationInQuarterNotes = 0;
        for (var j = 0; j < arrayToHoldEachInstrumentSeperately[i].length; j++) {
            if (arrayToHoldEachInstrumentSeperately[i][j].attributes) {
                if (arrayToHoldEachInstrumentSeperately[i][j].attributes[0].time) {
                    beats = parseInt(arrayToHoldEachInstrumentSeperately[i][j].attributes[0].time[0].beats[0])
                    beatType = parseInt(arrayToHoldEachInstrumentSeperately[i][j].attributes[0].time[0]["beat-type"][0])
                    var beatsWithoutConversion = beats;
                    beats = convertBeatsIntoQuarterBeats(beats, beatType)
                  
                    
                }
            }
            
            arrayToHoldEachInstrumentSeperately[i][j].beats = beatsWithoutConversion;
            arrayToHoldEachInstrumentSeperately[i][j].beatType = beatType;
           
            if (arrayToHoldEachInstrumentSeperately[i][j - 1]) {
                if (arrayToHoldEachInstrumentSeperately[i][j - 1].measure !== arrayToHoldEachInstrumentSeperately[i][j].measure) {
                    measureStartingLocationInQuarterNotes = measureStartingLocationInQuarterNotes + (beats * constants.NUMBER_OF_UNITS_IN_QUARTERBEAT) 
                }
            }
            
             arrayToHoldEachInstrumentSeperately[i][j].absLocation = measureStartingLocationInQuarterNotes + arrayToHoldEachInstrumentSeperately[i][j].location;
            
            arrayToHoldEachInstrumentSeperately[i][j].measureLocationInQuarterNotes = measureStartingLocationInQuarterNotes;
        }
    }
    return arrayToHoldEachInstrumentSeperately;
}