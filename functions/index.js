const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = "MCMIFXPG08";
const ALGOLIA_ADMIN_KEY = "b04ed2076613926884b9309b2c1de20e";
var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
var chatIndex = client.initIndex("smileys");

exports.addChatsFirestoreDataToAlgolia = functions.https.onRequest((req, res) => {
    var chatArray = [];
    //Get all the documents from the Firestore collection called    //chats
     admin.firestore().collection("hair").get().then((docs) => {
        //Get all the data from each document
        docs.forEach((doc) => {
        let chat = doc.data();
        //As per the algolia rules, each object needs to have a key                        //called objectID (AS IS)
        //If you do not set this, algolia will set a random id
        chat.objectID = doc.id;
        chatArray.push(chat);
     })
 return chatIndex.saveObjects(chatArray).then(() => {
    console.log('Documents imported into Algolia');
    return true;
 }).catch(error => {
    console.error('Error when importing documents into Algolia', error);
    return true;
   });
  }).catch((error) => {
   console.log('Error getting the chats collection', error)
  })
 })