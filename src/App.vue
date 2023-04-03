<template>
  <v-app>
    <v-main>
      <NavbarComponent v-if="$route.path === '/'"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  NavbarComponent  from './components/NavbarContent.vue'
export default defineComponent({
  name: 'App',
  components: {
    NavbarComponent
  }
})
</script>
