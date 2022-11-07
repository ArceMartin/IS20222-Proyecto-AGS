
/*
class Alumno {
    constructor(nombre,calificacion) {
        this.nombre = nombre;
        this.calificacion=calificacion;
    }
}
let Alumnos=[new Alumno("Panfilo filomeno",55),new Alumno("Madas Ledesma",89),new Alumno("Juan Camaney",100),new Alumno("Oxiono",63)]

async function mostrarAlumnos(req, res){
    res.send(Alumnos);
}*/

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
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
'https://www.googleapis.com/auth/classroom.coursework.me'];
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
    const content = await fs.readFile(TOKEN_PATH);
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
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  //await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
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

/**
 * Lists the first 10 courses the user has access to.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
 class Alumno {
  constructor(nombre,clave) {
      this.nombre = nombre;
      this.clave=clave;

  }
}
 var datos=[];
var list=[];


async function alumnos(auth) {
  const classroom = google.classroom({version: 'v1', auth});
  const curso = await classroom.courses.students.list({
    courseId: '552369791770'
  });
  const lista = curso.data.students;
  list=lista;
  for(i=0;i<list.length;i++){
    datos.push(new Alumno(list[i].profile.name.fullName,list[i].userId));
  }
  //console.log(curso.data);
  
}



//authorize().then(listCourses).catch(console.error);


//Mensaje principal del servidor
async function mostrarAlumnos(req, res){
    //authorize().then(listCourses).catch(console.error);
    authorize().then(alumnos).then(r=>{res.send(datos)}).catch(console.error);
    
};



module.exports={mostrarAlumnos}