<template>
  <v-card>
  <v-data-table :headers="headers" :items="articulos">
    <template v-slot:top>
      <v-toolbar flat color="#CD0839">
        <v-toolbar-title>Calificaciones</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
  </v-data-table>
    <v-card-text>
      <center><v-btn color="#CD0839" @click="regresar()">Aceptar</v-btn></center>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //Crea los datos asignados a la tabla creada con html
    dialog: false,
    dialogB: false,
    headers: [
      { text: "Alumno", value: "materia" },
      { text: "Calificación", value: "calif", sortable: false },
    ],
    articulos: [
      { materia: "Diego", calif: "100"},
      { materia: "Andre", calif: "90"},
    ],
    materias: [],
    tareas: [],
    editedIndex: -1,
    editedItem: { materia: undefined },
    deletedItem: {},
    defaultItem: { materia: undefined },
  }),
  computed: {

  },
  watch: {
    //Líneas que nos permiten cerrar las cuadros de diálogos
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    //LLena las tablas con el contenido correspondiente
    
  },
  methods: {
    regresar() {
      this.$router.push({name: "materias"});
    }, 
    //Función que cierra el cuadro de diálogo para agregar un item
    close() {
      
    },
    //Función que guarda la información sacada del cuadro de diálogo para agregar un item
    save() {
      
    },
  },
};
</script>