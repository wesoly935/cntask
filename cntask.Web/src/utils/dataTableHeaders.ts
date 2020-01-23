import { DataTableHeader } from 'vuetify';

const indexHeader: DataTableHeader = {
  text: 'Lp.',
  value: '',
};

const actionsHeader: DataTableHeader = {
  text: 'Akcje',
  value: '',
};

const nameHeader: DataTableHeader = {
  text: 'Nazwa',
  value: 'name',
};

const receiverHeader: DataTableHeader = {
  text: 'Odbiorcy',
  value: 'receivers',
};

export const MailingGroupsHeaders: DataTableHeader[] = [
  indexHeader,
  actionsHeader,
  nameHeader,
  receiverHeader,
];

