// firebaseConfig.js

const firebaseConfigPSL = {
    apiKey: "AIzaSyDFIU3a5jEDQw-xGbHFdnFOxfpbLdjFsRc",
    authDomain: "pademangan-ea6ea.firebaseapp.com",
    databaseURL: "https://pademangan-ea6ea-default-rtdb.firebaseio.com",
    projectId: "pademangan-ea6ea",
    storageBucket: "pademangan-ea6ea.appspot.com",
    messagingSenderId: "289652690437",
    appId: "1:289652690437:web:a98d2f16132148bf43d66c",
    measurementId: "G-ZHSKVPFX50"
};

firebase.initializeApp(firebaseConfigPSL);
const databasePSL = firebase.database();


const firebaseConfigKCF = {
  apiKey: "AIzaSyB5D5BUB79hircuYfphtBPDLLWrSeEWlrM",
  authDomain: "ptkcf-521ad.firebaseapp.com",
  databaseURL: "https://ptkcf-521ad-default-rtdb.firebaseio.com",
  projectId: "ptkcf-521ad",
  storageBucket: "ptkcf-521ad.appspot.com",
  messagingSenderId: "694997275721",
  appId: "1:694997275721:web:ccbbc5b405c832b3215b98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfigKCF, "db1");
const databaseKFC = firebase.database(firebase.app("db1"));


const firebaseConfigKFA = {
  apiKey: "AIzaSyAFmJ7CtcywyL5o4ojdZ3k7K-DJUGJGD1I",
  authDomain: "ptkfa-894a1.firebaseapp.com",
  databaseURL: "https://ptkfa-894a1-default-rtdb.firebaseio.com",
  projectId: "ptkfa-894a1",
  storageBucket: "ptkfa-894a1.appspot.com",
  messagingSenderId: "739097712430",
  appId: "1:739097712430:web:4ffad7f808d8dbfd84ccbf"
};


const firebaseConfig2 ={ databaseURL:"https://ptkcf-521ad-default-rtdb.firebaseio.com/" }  
firebase.initializeApp(firebaseConfig2, "db2");
const database2 = firebase.database(firebase.app("db2")); 


const firebaseConfigJOBSCRIPT = {
  apiKey: "AIzaSyD-GhFz53zr6-bIvfCUWgEHOV2ERJoh5cw",
  authDomain: "jobscript-79d02.firebaseapp.com",
  databaseURL: "https://jobscript-79d02-default-rtdb.firebaseio.com",
  projectId: "jobscript-79d02",
  storageBucket: "jobscript-79d02.appspot.com",
  messagingSenderId: "1013512833185",
  appId: "1:1013512833185:web:864101b77f711ac894c8e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfigJOBSCRIPT, "dbJOB");
const databaseJOBSCRIPT = firebase.database(firebase.app("dbJOB"));
