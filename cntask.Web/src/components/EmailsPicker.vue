<template>
  <v-combobox
    :value="value"
    :items="value"
    :search-input.sync="search"
    :rules="emailRulesCombobox"
    hide-selected
    label="Adresy e-mail"
    multiple
    persistent-hint
    small-chips
    @change="onValueChange"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Dodaj "
            <strong>{{ search }}</strong>". Kliknij
            <kbd>enter</kbd> by wprowadzić adres e-mail
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attrs, item, parent, selected }">
      <v-chip
        v-bind="attrs"
        color="lighten-3"
        :input-value="selected"
        label
        small
      >
        <span class="pr-2">{{ item }}</span>
        <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
      </v-chip>
    </template>
  </v-combobox>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins, Emit } from 'vue-property-decorator';
import ValidationRulesMixin from '@/mixins/validationMixin';

@Component
export default class EmailsPicker extends Mixins(ValidationRulesMixin) {
  @Prop({ default: [] }) private readonly value!: string[];

  private search: string | null = null;
  @Emit('input')
  private onValueChange(val: string[]) {
    return val;
  }
}
</script>
