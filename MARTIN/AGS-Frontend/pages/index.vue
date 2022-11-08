<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md7>
    <br><br><br><br><br>
      <v-card class="elevation-12">
        <v-toolbar dark color="#29C360">
          <center><v-toolbar-title>Bienvenido al sistema calificador</v-toolbar-title></center>
        </v-toolbar>
        <v-card-actions>
          <v-spacer></v-spacer>
          <center><v-btn color="#29C360" @click="accion()">Entrar</v-btn></center>
        </v-card-actions>
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle() }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#29C360" text @click="close">Ok</v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "login",
  props: { source: String },
  layout: 'start',
  data: () => ({
    dialog: false,
    encontrado: false,
  }),
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    //Método para sacar los registros de la tabla 'usuarios' en la base de datos 'propiedades'.
    initialize() {
      
    },
    //Método para imprimir el mensaje necesario en la caja de diálogo para la validación de datos.
    formTitle() {
      if (true){
        return "Inicio de sesión fallido";
      } 
    }, 
    //Método para cerrar la caja de diálogo que indica que es necesaria una corrección en los datos ingresados.
    close() {
      this.dialog = false;
    },
    //Método para validar los datos en el text field.
    accion(){
      this.$router.push({name: "materias"});
      //this.dialog = true;
    },
  }
};
</script>