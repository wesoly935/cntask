import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class ValidationRulesMixin extends Vue {
  // tslint:disable-next-line:max-line-length
  public emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public emailRulesCombobox: Array<(v: string[]) => boolean | string> = [
    (v: string[]) => v && v.length > 0 || 'Pole jest wymagane',
    (v: string[]) => (this.isArrayEmailsValid(v)) || 'Wprowadź poprawny adres e-mail',
  ];

  public requiredRules: Array<(v: string) => boolean | string> = [
    (v: string) => !!v && v.trim().length > 0 || 'Pole jest wymagane',
  ];


  private isArrayEmailsValid(val: string[]): boolean {
    let result: boolean = true;
    if (val === null || val.length === 0) {
      return true;
    }
    val.forEach((x: string) => {
      if (!this.emailPattern.test(x)) {
        result = false;
      }
    });
    return result;
  }
}
