//Importación de metodos 
const express = require("express");
const app = express();
const fs=require("fs");
const https=require("https");
process.env.port=3001;
const Alumnos=require("./Rutas/Alumnos");
const Cursos=require("./Rutas/Cursos");
const Tareas=require("./Rutas/Tareas");
const Entregas=require("./Rutas/ListaEntregas");
const ObtenerE=require("./Rutas/ObtenerEntrega");
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.use(express.json());


const fsp = fs.promises;
const path = require('path');
//const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/classroom.courses.readonly',
'https://www.googleapis.com/auth/classroom.courses',
'https://www.googleapis.com/auth/classroom.rosters',
'https://www.googleapis.com/auth/classroom.rosters.readonly',
'https://www.googleapis.com/auth/classroom.profile.emails',
'https://www.googleapis.com/auth/classroom.profile.photos',
'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
'https://www.googleapis.com/auth/classroom.coursework.students',
'https://www.googleapis.com/auth/classroom.coursework.me',
'https://www.googleapis.com/auth/classroom.coursework.me',
'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
'https://www.googleapis.com/auth/classroom.coursework.students',
'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
'https://www.googleapis.com/auth/classroom.coursework.me',
'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
'https://www.googleapis.com/auth/classroom.coursework.students',
'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fsp.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fsp.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fsp.writeFile(TOKEN_PATH, payload);
}
async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
      await saveCredentials(client);
    }
    return client;
  }

















//Declaracion de certificado
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
 key: llavePrivada,
 cert: certificado,
 passphrase: "contraseña" //passwd de la llave privada usado en la creación del certificado
};

const httpsServer = https.createServer(credenciales, app);

//Mensaje principal del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido al servicio web");
    authorize();
});

//Llamada de rutas

app.use("/Alumnos", Alumnos);

app.use("/Cursos", Cursos);

app.use("/Tareas", Tareas);

app.use("/Entregas", Entregas);

app.use("/ObtenerE", ObtenerE);


httpsServer.listen(process.env.port, () => {
    console.log('Servidor https escuchando por el puerto:', process.env.port);
   }).on('error', err => {
    console.log('Error al inciar el servidor:', err);
   });
/*
app.listen(puerto, () => {
    console.log("Todo bien en el puerto ", puerto);
}).on("error", (error) => {
    console.log("Error ", error);
});*/