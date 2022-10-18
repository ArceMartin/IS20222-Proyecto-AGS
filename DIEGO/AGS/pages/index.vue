<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md7>
      <br><br><br><br>
      <v-card class="elevation-12">
        <v-toolbar dark color="#29C360">
          <v-toolbar-title>Establecer Criterios</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <label>Ortografia</label>
          <input type="checkbox" value="Ortografia" v-model="tareas.criterios" />
          <br>
          <label>Originalidad</label>
          <input type="checkbox" value="Originalidad" v-model="tareas.criterios" />
          <br>
          <label>Extension</label>
          <input type="checkbox" value="Extension" v-model="tareas.criterios" />
          <br>
          <label>Fecha de Entrega</label>
          <input type="checkbox" value="Entrega" v-model="tareas.criterios" />
          <br>
          <v-textarea type="text" label="Introduzca el texto de referencia..." name="ref" v-model="tareas.ref">
          </v-textarea>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      tareas: {
        ref: undefined,
        criterios:[]
      }
    }
  }
}
</script>
