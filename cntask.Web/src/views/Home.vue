<template>
  <v-data-table
    :headers="headers"
    :items="mailingGroups"
    no-data-text="Brak danych"
    class="elevation-1 full-width"
    :hide-default-footer="true"
    :loading="loading"
  >
    <template #body="{ items }">
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td class="text-xs-right">{{ index + 1 }}</td>
          <td class="text-xs-right">
            <v-btn
              class="mx-2"
              text
              icon
              color="teal"
              :to="{ name: 'newemailgroup', params: { id: item.id } }"
            >
              <v-icon dark>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn class="mx-2" text icon color="teal" @click="removeItem(item.id)">
              <v-icon dark>mdi-delete-forever</v-icon>
            </v-btn>
          </td>
          <td class="text-xs-right">{{ item.name }}</td>
          <td class="text-xs-right wrap-emails">{{ formatStringArray(item.receivers) }}</td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { DataTableHeader } from 'vuetify';
import { MailingGroupsHeaders } from '@/utils/dataTableHeaders';
import { MailingGroup } from '@/store/modules/mailingGroups';
import { Getter, Action } from 'vuex-class';
import { Mixins } from 'vue-property-decorator';
import FormadDataCellMixin from '@/mixins/formadDataCellMixin';
import UIMixin from '@/mixins/uimixin';
import { AxiosResponse } from 'axios';

@Component
export default class Home extends Mixins(FormadDataCellMixin, UIMixin) {
  private headers: DataTableHeader[] = MailingGroupsHeaders;
  @Getter private readonly mailingGroups!: MailingGroup[];
  @Action private removeMailingGroup!: (
    id: string,
  ) => Promise<AxiosResponse<any>>;
  private loading: boolean = false;

  private async removeItem(id: string) {
    this.loading = true;
    const result = await this.removeMailingGroup(id);
    this.setResponseInfo(result);
    this.loading = false;
  }
}
</script>
<style lang="scss">
.full-width {
  width: 100%;
}
.wrap-emails {
  max-width: 30vw;
}
</style>
