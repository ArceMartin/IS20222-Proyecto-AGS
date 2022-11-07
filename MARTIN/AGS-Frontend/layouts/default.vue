<template>
  <v-app dark>
    <v-img src="/B3.jpg">
      <v-app-bar color="#006147" :clipped-left="clipped" fixed app>
        <v-toolbar-title v-text="title" />
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Automatic Grading System",
    };
  },
};
</script>