var lodash = require('lodash')
var parseMusicXMLUtilities = require('.././utilities/utilities');
var constants = require('.././utilities/constants')
    /**
     * <p>Processes raw html and will take any MusicXML file</p>
     * <p>Testing completed from MusicXML from Sibelius and Musescore</p>
     */
module.exports.extractNoteEventsFromParsedXML = function (parsedMusicXML, divisions) {
    var parsedXML = parsedMusicXML['score-partwise']['part'];
    var arrayToHoldParts = [];
    var noteStorer = {};
    var arrayToHoldNotes = [];
    var globalTempoHolder = 60;
    var currentChordRoot = 0;
    var currentChordRootAlter = 0;
    var currentChordType = 0;
    lodash.forEach(parsedXML, function (value, key) {
        arrayToHoldParts.push(value.measure)
    })
    for (var i = 0; i < arrayToHoldParts.length; i++) {
        for (var j = 0; j < arrayToHoldParts[i].length; j++) {
            for (var k = 0; k < arrayToHoldParts[i][j].note.length; k++) {
                noteStorer = {};
                try {
                    currentChordType = arrayToHoldParts[i][j].harmony[0]["kind"][0]['$']['text']
                    currentChordRoot = arrayToHoldParts[i][j].harmony[0]["root"][0]["root-step"][0]
                    try {
                        currentChordRootAlter = parseInt(arrayToHoldParts[i][j].harmony[0]["root"][0]["root-alter"][0])
                    }
                    catch (err) {
                        currentChordRootAlter = 0
                    }
                }
                catch (err) {}
                var chordRootAsInt = parseMusicXMLUtilities.convertLetterAndAlterationToInt(currentChordRoot, currentChordRootAlter);
                var chordRootAsName = parseMusicXMLUtilities.convertLetterAndAlterationToName(currentChordRoot, currentChordRootAlter);
                noteStorer.currentChordRoot = chordRootAsName;
                noteStorer.currentChordRootAsInt = chordRootAsInt;
                noteStorer.currentChordType = currentChordType;
                noteStorer.measure = parseInt(arrayToHoldParts[i][j]["$"]["number"])
                try {
                    noteStorer.duration = (arrayToHoldParts[i][j].note[k].duration[0] / divisions) * constants.NUMBER_OF_UNITS_IN_QUARTERBEAT;
                }
                catch (err) {
                    noteStorer.duration = 0;
                }
                noteStorer.pitch = arrayToHoldParts[i][j].note[k].pitch
                noteStorer.rest = arrayToHoldParts[i][j].note[k].rest
                noteStorer.type = arrayToHoldParts[i][j].note[k].type
                noteStorer.voice = arrayToHoldParts[i][j].note[k].voice
                try {
                    globalTempoHolder = arrayToHoldParts[i][j].direction[1]["direction-type"][0];
                    noteStorer.currentTempo = arrayToHoldParts[i][j].direction[1]["direction-type"][0];
                }
                catch (err) {
                    noteStorer.currentTempo = globalTempoHolder;
                }
                try {
                    noteStorer.notations = arrayToHoldParts[i][j].note[k].notations
                }
                catch (err) {
                    noteStorer.notations = 'false'
                }
                try {
                    noteStorer.attributes = arrayToHoldParts[i][j].attributes
                }
                catch (err) {
                    noteStorer.attributes = 'false'
                }
                noteStorer.instrument = arrayToHoldParts[i][j].note[k].instrument
                if (noteStorer.instrument === undefined) {
                    noteStorer.instrument = i;
                }
                noteStorer.staff = arrayToHoldParts[i][j].note[k].staff
                noteStorer.chord = arrayToHoldParts[i][j].note[k].chord
                noteStorer.partNumber = i;
                arrayToHoldNotes.push(noteStorer);
            }
        }
    }
    return arrayToHoldNotes;
}
module.exports.cleanMusicXML = function (arrayToHoldNotes) {
    var arrayToHoldCleanedNotes = [];
    var arrayToHoldNotes = arrayToHoldNotes
    for (var i = 0; i < arrayToHoldNotes.length; i++) {
        cleanedNoteStorer = {}
        if (arrayToHoldNotes[i].voice) {
            currentVoice = arrayToHoldNotes[i].voice
        }
        if (arrayToHoldNotes[i].pitch) {
            cleanedNoteStorer["Midi number"] = parseMusicXMLUtilities.convertPitchInformationToMidiNumber(arrayToHoldNotes[i].pitch)
        }
        else {
            cleanedNoteStorer["Midi number"] = constants.MIDI_NUMBER_WHEN_REST;
        }
        if (arrayToHoldNotes[i].chord) {
            cleanedNoteStorer.isHarmony = true;
        }
        else {
            cleanedNoteStorer.isHarmony = false;
        }
        cleanedNoteStorer.measure = arrayToHoldNotes[i].measure;

        cleanedNoteStorer.currentChordRoot = arrayToHoldNotes[i].currentChordRoot;
        cleanedNoteStorer.currentChordRootAsInt = arrayToHoldNotes[i].currentChordRootAsInt;
        cleanedNoteStorer.currentChordType = arrayToHoldNotes[i].currentChordType;
        cleanedNoteStorer.duration = parseInt(arrayToHoldNotes[i].duration);
        cleanedNoteStorer.currentTempo = arrayToHoldNotes[i].currentTempo;
        cleanedNoteStorer.instrument = parseMusicXMLUtilities.cleanInstrumentToString(arrayToHoldNotes[i].instrument);
        cleanedNoteStorer.currentVoice = parseInt(currentVoice[0]);
        cleanedNoteStorer.notations = arrayToHoldNotes[i].notations;
        cleanedNoteStorer.attributes = arrayToHoldNotes[i].attributes;
        arrayToHoldCleanedNotes.push(cleanedNoteStorer);
    }
    return arrayToHoldCleanedNotes;
}