<template>
  <v-data-table :headers="headers" :items="articulos">
    <template v-slot:top>
      <v-toolbar flat color="#C35F2D">
        <v-toolbar-title>Calificaciones</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    //Crea los datos asignados a la tabla creada con html
    dialog: false,
    dialogB: false,
    headers: [
      { text: "Alumno", value: "materia" },
      { text: "Tarea", value: "actions", sortable: false },
      { text: "Calificacion", value: "calif", sortable: false },
    ],
    articulos: [
      { materia: "Diego", actions: "Tarea 1", calif: "100"},
      { materia: "Andre", actions: "Tarea 1", calif: "90"},
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
    this.leerMaterias();
    this.leerTareas();
  },
  methods: {
    //Obtiene la información de las tareas
    verTareas() {
      this.dialog = true;
      this.tareas = [ {"tarea": "Tarea 1"}, {"tarea": "Tarea 2"} ];
    },
    //Obtiene la información de las tareas
    leerMaterias(item) {
      this.materias = [ {"materia": "Alumno 1"}, {"materia": "Alumno 2"} ];
    },
    leerTareas(item) {
      this.tareas = [ {"tarea": "Tarea 1"}, {"tarea": "Tarea 2"} ];
    },
    //Establecer criterios
    criterios(item){
      this.$router.push({name: "criterios"});
    },
    //Ver calificaciones 
    calificaciones(){
      this.$router.push({name: "calificaciones"});
    },
    //Función que cierra el cuadro de diálogo para agregar un item
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    //Función que guarda la información sacada del cuadro de diálogo para agregar un item
    save() {
      
    },
  },
};
</script>