<template>
  <v-form v-model="formIsValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="formData.name" :rules="requiredRules" label="Nazwa" required />
        </v-col>

        <v-col cols="12" md="8">
          <emails-picker v-model="formData.receivers" />
        </v-col>
      </v-row>
      <v-footer>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" tile color="dark" dark :to="{ name: 'home' }">Anuluj</v-btn>
        <v-btn class="ma-2" tile outlined color="teal" :disabled="!formIsValid" @click="onSave" :loading="loading">
          <v-icon left>mdi-pencil</v-icon>Zapisz
        </v-btn>
      </v-footer>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { MailingGroup } from '@/store/modules/mailingGroups';

import EmailsPicker from '@/components/EmailsPicker.vue';
import { Mixins, Prop } from 'vue-property-decorator';
import ValidationRulesMixin from '@/mixins/validationMixin';
import UIMixin from '@/mixins/uimixin';
import {
  Action, Getter,
} from 'vuex-class';
import { AxiosResponse } from 'axios';

@Component({
  components: {
    EmailsPicker,
  },
})
export default class NewMailingGroup extends Mixins(ValidationRulesMixin, UIMixin) {
  private formIsValid: boolean = false;
  @Prop({ default: null }) private readonly id!: string | null;

  @Action private addMailingGroup!: (data: MailingGroup) => Promise<AxiosResponse<any>>;
  @Action private updateMailingGroup!: (data: MailingGroup) => Promise<AxiosResponse<any>>;
  @Getter private readonly mailingGroupById!: (id: string) => MailingGroup;

  private loading: boolean = false;
  private formData: MailingGroup = {
    name: null,
    receivers: [],
  };

  private mounted() {
    if (this.isEdit) {
      this.formData = this.mailingGroupById(this.id!);
    }
  }

  private async onSave() {
    this.loading = true;
    const result = this.isEdit
      ? await this.updateMailingGroup(this.formData)
      : await this.addMailingGroup(this.formData);
    this.setResponseInfo(result);
    this.loading = false;
    if (result.status === 200) {
      this.$router.push({name: 'home'});
    }
  }

  private get isEdit(): boolean {
    return !!this.id;
  }
}
</script>
<style lang="scss">
form {
  width: 100%;
}
</style>
