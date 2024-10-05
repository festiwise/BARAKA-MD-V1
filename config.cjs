// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09EdU9UZlR1TkJ4aGliM1huYjRsZzFUeXFJajFXQlVtTWpOcVA1eEcyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxkYnJzNjc3Nzd4T0RWZnBGRGFoZXdHcFBuU0dlS2NiT2psNUs3U0xDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQlBnYzlJWHdaVk9kY3pHSVQvV3AwT3NHandBb1hjcTdDR2J3QnQrL0d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ2VuUkJkOUsxUExHajljWHQ3VDgxaDA3TENWN05DM2N6ZjQ5bnBQYXh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOQ2tOQW9yT2EySW1IVXpqK01xY0ZYSEg0RmM2U3hvbXRWT0VGckdCR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJReXhsSEdPSGx1S3g3UVh6VGNIdTNqTUNOTWI1N2FxQmdaaG1YV2RCeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxkWW9nZjZaSngrUWdVRHYvTVExS3pQeG5RQVE4elBPdzRHNGVuckpsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVaQ3puSlhvT1M4R3diRytoL2sxVzFSYXhOUDV6aU5ReEhIVGJtUEhnVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQzMHAyUkRkcHZoS3k5VGJFZ3MzY2xZc0FGVUZwZ3M3M09yditWSXNxOFJnZUVIZU1QMVNoZzh6QWxlOU1oVzNTcjhWVUl3RGswdU90dmZDT0xhN2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiIxSCtBc2MyVTFzVUR3UEFDMDFhUDVhWm5RZndlT1JsWmR3Q1F1cllNeFU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDLWFjZFZEYVRYMlVMbHpEWmwwbGlRIiwicGhvbmVJZCI6IjBkZDJmZWJjLWQ5ZTctNDdmZS1hZGYwLTdmN2MzY2IxZGMyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTM1ZzTUIyem5IWEtEZGUvWk93RkVLUW1YVms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJvOFNKUFBFMTFZMk5hbURncDMrYkFxRFRVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRDNjlIOUFNIiwibWUiOnsiaWQiOiIxNDE2ODQ4Mzg1Njo3NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGErelBFUEVNN2RncmdHR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGl0Tm56S0M1SGxIK3ZmaDNUZVhRWlUrOTRuSjY2Vm81NEo0MWJhbEFDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZVJkRy81ODFZdi9hY1AvR1Nyd09wR291b3psanRkb2tvLzB4eUk0VDVXdUxld2dsSkxqUi9pbW9vYlBDRG52SDh1Y1Qzakt2RkFSKzNNa2FDKzBqaGc9PSIsImRldmljZVNpZ25hdHVyZSI6Ink1ZkJsZFN0aDVjUi9qSlpvWkN1T0ErbitIcWFlbzBhOThUKzRVbU9sdDdNTENlUlJIazF3ZkFhNC9HRG1tS2lYaWt5d1BRWU9EME1aTkxNVTF6dmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTQxNjg0ODM4NTY6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1lyVFo4eWd1UjVSL3IzNGQwM2wwR1ZQdmVKeWV1bGFPZUNlTlcycFFBcSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MDk4MDExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ3dCJ9=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©Baraka Bega",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255762190568",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
