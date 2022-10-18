<template>
  <v-app dark>
    <v-img src="/B3.jpg">
      <v-app-bar color="#006147" :clipped-left="clipped" fixed app>
        <v-toolbar-title v-text="title">
        </v-toolbar-title>
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
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      //items: [
      //  {
      //    icon: 'mdi-apps',
      //    title: 'Welcome',
      //    to: '/'
      //  },
      //  {
      //    icon: 'mdi-chart-bubble',
      //    title: 'Inspire',
      //    to: '/inspire'
      //  }
      //],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Automatic Grading System'
    }
  }
}
</script>
