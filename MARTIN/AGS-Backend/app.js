//Importación de metodos 
const express    = require("express");
const app        = express();
const fs         = require("fs");
const https      = require("https");
const cors       = require('cors');
const path       = require('path');
process.env.port = 3001;

const Alumnos    = require("./Rutas/Alumnos");
const Cursos     = require("./Rutas/Cursos");
const Tareas     = require("./Rutas/Tareas");
const Entregas   = require("./Rutas/ListaEntregas");
const ObtenerE   = require("./Rutas/ObtenerEntrega");

app.use(express.json());
app.use(cors());
app.use(express.json());

const fsp = fs.promises;
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// Si modifica estos ámbitos, elimine token.json.
const googleapis = 'https://www.googleapis.com/auth/classroom.';
const SCOPES = [
  googleapis + 'courses',
  googleapis + 'courses.readonly',
  googleapis + 'coursework.me',
  googleapis + 'coursework.me',
  googleapis + 'coursework.me',
  googleapis + 'coursework.me.readonly',
  googleapis + 'coursework.me.readonly',
  googleapis + 'coursework.me.readonly',
  googleapis + 'coursework.students',
  googleapis + 'coursework.students',
  googleapis + 'coursework.students',
  googleapis + 'coursework.students.readonly',
  googleapis + 'coursework.students.readonly',
  googleapis + 'coursework.students.readonly',
  googleapis + 'profile.emails',
  googleapis + 'profile.photos',
  googleapis + 'rosters',
  googleapis + 'rosters.readonly',
  googleapis + 'student-submissions.me.readonly',
  googleapis + 'student-submissions.me.readonly',
  googleapis + 'student-submissions.students.readonly',
  googleapis + 'student-submissions.students.readonly',
];

// El archivo token.json almacena los tokens de acceso y actualización del usuario, y se crea 
// automáticamente cuando el flujo de autorización se completa por primera vez.
// const TOKEN_PATH = path.join(process.cwd(), 'token_martin.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials_martin.json');
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Lee las credenciales previamente autorizadas del archivo guardado.
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
 * Serializa las credenciales a un archivo compatible con GoogleAUth.fromJSON.
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

/**
 * Carga o solicitud o autorización para llamar a las API.
 *
 */
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
const certificado  = fs.readFileSync("certificate.crt");
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


httpsServer.listen(process.env.port, "0.0.0.0", () => {
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