import type { GetContactsQuery } from './Operation';

export type Contact = GetContactsQuery['getContacts'][number];
