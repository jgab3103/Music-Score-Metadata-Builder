
var parseMusicXML = require('./parser')
var argv = require('minimist')(process.argv.slice(2));



/** OPTION 1:
Put path names to MusicXML file, Metadata file and output file directly in this file
**/

// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/allTheThingsYouAreKeithJarrettSolo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/allTheThingsYouAreKeithJarrettSolo.json";
// var outputFileName = "allTheThingsYouAreKeithJarrettSolo"

// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/autumnLeavesKeithJarrettSoloOne.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/autumnLeavesKeithJarrettSoloOne.json";
// var outputFileName = "autumnLeavesKeithJarrettSoloOne"

// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/autumnLeavesKeithJarrettSoloTwo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/autumnLeavesKeithJarrettSoloTwo.json";
// var outputFileName = "autumnLeavesKeithJarrettSoloTwo"


// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/daysOfWineAndRosesKeithJarrettSolo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/daysOfWineAndRosesKeithJarrettSolo.json";
// var outputFileName = "daysOfWineAndRosesKeithJarrettSolo"

// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/groovinHighKeithJarrettSolo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/groovinHighKeithJarrettSolo.json";
// var outputFileName = "groovinHighKeithJarrettSolo"

// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/ifIWereABellKeithJarrettSolo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/ifIWereABellKeithJarrettSolo.json";
// var outputFileName = "ifIWereABellKeithJarrettSolo"

var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/inLoveInVainKeithJarrettSolo.xml";
var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/inLoveInVainKeithJarrettSolo.json";
var outputFileName = "inLoveInVainKeithJarrettSolo"

 // var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/myFunnyValentineKeithJarrettSolo.xml";
 // var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/myFunnyValentineKeithJarrettSolo.json";
 // var outputFileName = "myFunnyValentineKeithJarrettSolo"


// var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/somedayMyPrinceWillComeKeithJarrettSolo.xml";
// var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/somedayMyPrinceWillComeKeithJarrettSolo.json";
// var outputFileName = "somedayMyPrinceWillComeKeithJarrettSolo"

//var musicXMLFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/musicXmlFiles/stellaByStarlightKeithJarrettSolo.xml";
//var metaDataFile = "/Users/jamiegabriel/Desktop/Projects/Music_score_search_engine/phd_project/phd_analysis_project/Datasets/metaDataForJsonFiles/stellaByStarlightKeithJarrettSolo.json";
//var outputFileName = "stellaByStarlightKeithJarrettSolo"

/**
OPTION 2: Pass the paths as arguments on the command line
**/

// node convertMusicXML2MusicJSON -f "<YOUR MUSICXML FILE>" -m "<YOUR METADATA FILE>" -o "<YOUR OUTPUT FILE>"

//var musicXMLFile = argv["f"]
//var metaDataFile = argv["m"]
//var outputFileName = argv["o"]

// RUN MusicXML2JSON Parser

parseMusicXML.parseRawMusicXML(musicXMLFile, metaDataFile, outputFileName)
