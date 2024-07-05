import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  TableView,
  Text,
  View,
} from '@adobe/react-spectrum';
import SocialNetwork from '@spectrum-icons/workflow/SocialNetwork';

import type { Contact } from '#shared/gen/Api.js';

export type ContactListProps = {
  contacts: Contact[];
};

export type ContactListItemProps = {
  contact: Contact;
};

export const ContactListItem = (props: ContactListItemProps) => {
  const { contact } = props;

  if ('name' in contact) {
    return (
      <View>
        <SocialNetwork slot='illustration' />
        <Text>{contact.name}</Text>
      </View>
    );
  }

  return (
    <View>
      <SocialNetwork slot='illustration' />
      <Text>{`${contact.givenName} ${contact.middleName} ${contact.familyName}`}</Text>
    </View>
  );
};

export function ContactList(props: ContactListProps) {
  const { contacts } = props;

  const columns = [
    { name: 'Name', uid: 'name' },
    { name: 'Type', uid: 'type' },
    { name: 'Given Name', uid: 'givenName' },
    { name: 'Family Name', uid: 'familyName' },
    { name: 'Middle Name', uid: 'middleName' },
  ];

  const rows = contacts.map((contact) => {
    if (contact.name === undefined) return { ...contact, type: 'Organization' };
    return { ...contact, type: 'Organization People' };
  });

  return (
    <TableView aria-label='Table view for contacts'>
      <TableHeader columns={columns}>
        {(column) => <Column key={column.uid}>{column.name}</Column>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
      </TableBody>
    </TableView>
  );
}
