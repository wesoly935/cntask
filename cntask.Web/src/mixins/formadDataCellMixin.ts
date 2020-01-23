import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class FormadDataCellMixin extends Vue {
  public formatStringArray(val: string[]) {
    return val.join(', ');
  }

}
