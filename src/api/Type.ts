import type { GetContactsQuery } from './Operation.js';

export type Contact = GetContactsQuery['getContacts'][number];
