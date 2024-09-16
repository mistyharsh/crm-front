import { Paper, Stack, Text } from '@mantine/core';

import type { Contact } from '#api/Type.js';

export type ContactListProps = {
  contacts: Contact[];
};

export function ContactList(props: ContactListProps) {
  const { contacts } = props;

  return (
    <Stack>
      {contacts.map((c) => (
        <Paper key={c.id}>
          <Text>
            {c.id} - {c.type}
          </Text>
        </Paper>
      ))}
    </Stack>
  );
}
