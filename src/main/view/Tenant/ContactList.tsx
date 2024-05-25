import { Item, ListView, Text } from '@adobe/react-spectrum';
import SocialNetwork from '@spectrum-icons/workflow/SocialNetwork';

import { Contact } from '../../../gen/Api';

export type ContactListProps = {
  contacts: Contact[];
};

export type ContactListItemProps = {
  contact: Contact;
};

export const ContactListItem = (props: ContactListItemProps) => {
  const { contact } = props;
  if (contact.name) {
    return (
      <>
        <SocialNetwork slot='illustration' />
        <Text>{contact.name}</Text>
      </>
    );
  }

  return (
    <>
      <SocialNetwork slot='illustration' />
      <Text>{`${contact.givenName} ${contact.middleName} ${contact.familyName}`}</Text>
    </>
  );
};

export function ContactList(props: ContactListProps) {
  const { contacts } = props;

  return (
    <ListView
      items={contacts}
      selectionMode='none'
      // width={'size-5000'}
      aria-label='Select workspace'
      children={(t) => {
        return (
          <Item key={t.id} textValue={t.id.toString()}>
            <ContactListItem contact={t} />
          </Item>
        );
      }}
    />
  );
}
