<template>
  <v-snackbar v-model="snackMessage.visible" :color="snackType" :timeout="0">
    {{ snackMessage.text }}
    <v-btn color="dark" text @click="hideSnack">Zamknij</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins, Emit } from 'vue-property-decorator';
import ValidationRulesMixin from '@/mixins/validationMixin';
import { Snack, SnackType } from '@/store/modules/snack';
import { Getter, Mutation } from 'vuex-class';

@Component
export default class SnackBar extends Vue {
  @Getter private readonly snackMessage!: Snack;
  @Mutation private readonly clearSnack: any;
  private get snackType() {
    if (this.snackMessage && this.snackMessage.type) {
      switch (this.snackMessage.type) {
        case SnackType.info:
          return SnackType.info;
        case SnackType.error:
          return SnackType.error;
        default:
          return '';
      }
    }
    return '';
  }
  private hideSnack() {
    this.clearSnack();
  }
}
</script>
