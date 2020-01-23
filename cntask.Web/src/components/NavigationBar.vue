<template>
  <v-navigation-drawer permanent color="teal" dark width="400px">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Grupy mailingowe</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link :to="{ name: 'home' }">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Lista grup mailingowych</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-btn :to="{ name: 'newemailgroup' }" fab small height="25" width="25" color="teal darken-3">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class NavigationBar extends Vue {}
</script>
