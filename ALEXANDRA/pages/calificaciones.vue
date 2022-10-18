<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md7>
      <br><br><br><br>
      <v-card class="elevation-12">
        <v-toolbar dark color="#FF57BF">
          <v-toolbar-title>Establecer Criterios</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-sheet class="pa-5">
            <v-switch v-model="switch1" inset :label="`Ortografía`"></v-switch>
            <v-switch v-model="switch2" inset :label="`Extensión`" @click="extension()"></v-switch>
          </v-sheet>
          <v-text-field v-if="ext" label="Introduzca la extensión..." solo></v-text-field>
          <v-textarea outlined name="input-7-4" label="Introduzca un texto de muestra..." ></v-textarea>
          <center><v-btn color="#FF57BF" @click="regresar()">Aceptar</v-btn></center>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'calificaciones',
  data() {
    return {
      tareas: {
        ref: undefined,
        criterios:[],
      },
      switch1: false,
      switch2: false,
      ext: false,
    }
  },
  methods: {
    regresar() {
      this.$router.push({name: "materias"});
    }, 
    extension(){
      if(this.ext ==true){
        this.ext = false;
      }else {
        this.ext = true;
      }
    }
  }
}
</script>