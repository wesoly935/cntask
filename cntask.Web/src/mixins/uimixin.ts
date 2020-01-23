import Component from 'vue-class-component';
import Vue from 'vue';
import { Snack, SnackType } from '@/store/modules/snack';
import { Mutation } from 'vuex-class';
import { AxiosResponse } from 'axios';

@Component
export default class UIMixin extends Vue {
  @Mutation private readonly setSnack!: (data: Snack) => Promise<void>;

  protected setErrorMessage(message: string) {
    this.setSnack({
      text: message,
      type: SnackType.error,
    });
  }
  protected setSuccessMessage() {
    this.setSnack({
      text: 'Zapisano zmiany',
      type: SnackType.info,
    });
  }
  protected setResponseInfo(response: AxiosResponse) {
    if (response.status === 200) {
      this.setSuccessMessage();
    } else {
      this.setErrorMessage(response.data);
    }
  }
}
