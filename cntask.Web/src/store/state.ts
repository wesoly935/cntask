import { MailingGroupState } from './modules/mailingGroups';
import { SnackState } from './modules/snack';

export interface IApplicationState {
  mailingGroup: MailingGroupState;
  snack: SnackState;
}
