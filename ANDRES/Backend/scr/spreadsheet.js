const app = require('./app');

puerto=3001;

app.listen(puerto, () => {
    console.log("Todo bien en el puerto ", puerto);
}).on("error", (error) => {
    console.log("Error ", error);
});