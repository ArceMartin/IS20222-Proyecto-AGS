<template>
  <v-data-table :headers="headers" :items="materias">
    <template v-slot:top>
      <v-toolbar flat color="#039F70">
        <v-toolbar-title>Materias</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>

                  <v-data-table :headers="headers2" :items="tareas">
                    <template v-slot:top>
                      <v-toolbar flat color="#8826FF">
                        <v-toolbar-title>Tareas</v-toolbar-title>
                          <v-divider class="mx-4" inset vertical></v-divider>
                          <v-spacer></v-spacer>
                      </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                      <v-tooltip top color="#D22CFF">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="#D22CFF" small class="mr-2" v-bind="attrs" v-on="on" @click="criterios(item)">mdi-pencil</v-icon>
                      </template>
                      <span>Establecer Criterios</span>
                      </v-tooltip>
                      <v-tooltip top color="#FF57BF">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="#FF57BF" small class="mr-2" v-bind="attrs" v-on="on" @click="calificaciones(item)">mdi-book-edit</v-icon>
                      </template>
                      <span>Ver calificaciones</span>
                      </v-tooltip>
                    </template>
                  </v-data-table>

                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="leerMaterias(item);close();">Ok</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-tooltip top color="#23489F">
      <template v-slot:activator="{ on, attrs }">
        <v-icon 
          color="#23489F" 
          small 
          class="mr-2" 
          v-bind="attrs" 
          v-on="on" 
          @click="verTareas(item)">
          mdi-archive-arrow-up
        </v-icon>
      </template>
      <span>Ver Tareas</span>
      </v-tooltip>
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
      { text: "Materia", value: "nombre" },
      { text: "Tareas de la Materia", value: "actions", sortable: false },
    ],
    headers2: [
      { text: "Tareas", value: "titulo" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    materias: [],
    materiaschafas: [],
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
  },
  methods: {
    //Obtiene la información de las tareas
    verTareas() {
      this.dialog = true;
      this.tareas = [ 
        this.$axios.get("https://localhost:3001/Tareas").then((r) => { this.tareas = r.data; }).catch((err) => console.log(err.message)),
       ];
    },
    //Obtiene la información de las tareas
    leerMaterias(item) {
      this.materias = [ 
        this.$axios.get("https://localhost:3001/Cursos").then((r) => { this.materias = r.data; }).catch((err) => console.log(err.message)),
       ];
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
  },
};
</script>