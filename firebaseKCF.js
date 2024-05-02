// firebasekcf.js

// Firebase 配置
const firebaseConfigKCF = {
    apiKey: "AIzaSyB5D5BUB79hircuYfphtBPDLLWrSeEWlrM",
    authDomain: "ptkcf-521ad.firebaseapp.com",
    databaseURL: "https://ptkcf-521ad-default-rtdb.firebaseio.com",
    projectId: "ptkcf-521ad",
    storageBucket: "ptkcf-521ad.appspot.com",
    messagingSenderId: "694997275721",
    appId: "1:694997275721:web:ccbbc5b405c832b3215b98"
  };

// 初始化 Firebase
firebase.initializeApp(firebaseConfigKCF);

// 導出 Firebase database 實例
const databaseKCF = firebase.database();