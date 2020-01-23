<template>
  <v-app>
    <v-content>
      <navigation-bar />
      <router-view></router-view>
      <snack-bar />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavigationBar from './components/NavigationBar.vue';
import SnackBar from './components/SnackBar.vue';

@Component({
  components: {
    NavigationBar,
    SnackBar,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
.v-content {
  &__wrap {
    display: flex;
  }
}
</style>