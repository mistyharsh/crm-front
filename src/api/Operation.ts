import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  Gender: { input: any; output: any };
};

export type Address = {
  house: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  landmark: Scalars['String']['output'];
  postalCodeId?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
};

export type AddressInput = {
  house: Scalars['String']['input'];
  landmark: Scalars['String']['input'];
  postalCodeId: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type Contact = ContactOrg | ContactPerson;

export type ContactOrg = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ContactPerson = {
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  middleName: Scalars['String']['output'];
};

export type Email = {
  address: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
};

export type EmailInput = {
  address: Scalars['String']['input'];
  isPrimary: Scalars['Boolean']['input'];
};

export type Invitation = {
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type Mutation = {
  acceptInvitation: Scalars['Boolean']['output'];
  claimInvitation: Scalars['Boolean']['output'];
  /** Create a new organization type contact */
  createContactOrganization: Organization;
  /** Create a new individual type contact */
  createContactPerson: Person;
  createTenant: NewTenantResponse;
  forgotPassword: Scalars['Boolean']['output'];
  inviteUser: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
};

export type MutationAcceptInvitationArgs = {
  inviteId: Scalars['String']['input'];
};

export type MutationClaimInvitationArgs = {
  inviteCode: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateContactOrganizationArgs = {
  input: OrganizationInput;
  tenantId: Scalars['String']['input'];
};

export type MutationCreateContactPersonArgs = {
  input: PersonInput;
  tenantId: Scalars['String']['input'];
};

export type MutationCreateTenantArgs = {
  input: NewTenantInput;
};

export type MutationForgotPasswordArgs = {
  userName: Scalars['String']['input'];
};

export type MutationInviteUserArgs = {
  input: NewInvitationInput;
  tenantId: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};

export type NewInvitationInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type NewTenantInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type NewTenantResponse = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Organization = {
  addresses: Array<Address>;
  emails: Array<Email>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  people: Array<Person>;
  phones: Array<Phone>;
};

export type OrganizationInput = {
  addresses: Array<AddressInput>;
  emails: Array<EmailInput>;
  name: Scalars['String']['input'];
  people: Array<PersonInput>;
  phones: Array<PhoneInput>;
};

export type Page = {
  number: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};

export type Person = {
  dob?: Maybe<Scalars['Date']['output']>;
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  middleName: Scalars['String']['output'];
};

export type PersonInput = {
  addresses: Array<AddressInput>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  emails: Array<EmailInput>;
  familyName: Scalars['String']['input'];
  gender: Scalars['Gender']['input'];
  givenName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  phones: Array<PhoneInput>;
};

export type Phone = {
  countryId: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  number: Scalars['String']['output'];
};

export type PhoneInput = {
  countryId: Scalars['String']['input'];
  isPrimary: Scalars['Boolean']['input'];
  number: Scalars['String']['input'];
};

export type Query = {
  /** Get all contacts */
  getContacts: Array<Contact>;
  getInvitation: Invitation;
  getMyTenants: Array<Tenant>;
  getResetToken: ResetPasswordRequest;
  getTenants: Array<Tenant>;
  getUsers: Array<User>;
  hello: Scalars['String']['output'];
};

export type QueryGetContactsArgs = {
  page: Page;
  tenantId: Scalars['String']['input'];
};

export type QueryGetInvitationArgs = {
  invitationCode: Scalars['String']['input'];
};

export type QueryGetResetTokenArgs = {
  resetToken: Scalars['String']['input'];
};

export type QueryGetUsersArgs = {
  tenantId: Scalars['String']['input'];
};

export type ResetPasswordRequest = {
  id: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Tenant = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type User = {
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type InvitationQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;

export type InvitationQuery = {
  getInvitation: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
};

export type GetResetTokenInfoQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;

export type GetResetTokenInfoQuery = {
  getResetToken: { id: string; userId: string };
};

export type ForgotPasswordMutationVariables = Exact<{
  userName: Scalars['String']['input'];
}>;

export type ForgotPasswordMutation = { forgotPassword: boolean };

export type ClaimMutationVariables = Exact<{
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type ClaimMutation = { claimInvitation: boolean };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;

export type ResetPasswordMutation = { resetPassword: boolean };

export type GetContactsQueryVariables = Exact<{
  page: Page;
  tenantId: Scalars['String']['input'];
}>;

export type GetContactsQuery = {
  getContacts: Array<
    | { id: string; name: string }
    | { id: string; givenName: string; familyName: string; middleName: string }
  >;
};

export type CreateContactOrgMutationVariables = Exact<{
  input: OrganizationInput;
  tenantId: Scalars['String']['input'];
}>;

export type CreateContactOrgMutation = {
  createContactOrganization: {
    id: string;
    name: string;
    addresses: Array<{
      house: string;
      isPrimary: boolean;
      landmark: string;
      postalCodeId?: string | null;
      street: string;
    }>;
    emails: Array<{ address: string; isPrimary: boolean }>;
    people: Array<{
      dob?: any | null;
      familyName: string;
      givenName: string;
      id: string;
      middleName: string;
    }>;
    phones: Array<{ countryId: string; isPrimary: boolean; number: string }>;
  };
};

export type CreateContactPersonMutationVariables = Exact<{
  input: PersonInput;
  tenantId: Scalars['String']['input'];
}>;

export type CreateContactPersonMutation = {
  createContactPerson: {
    dob?: any | null;
    familyName: string;
    givenName: string;
    id: string;
    middleName: string;
  };
};

export type TenantsQueryVariables = Exact<{ [key: string]: never }>;

export type TenantsQuery = {
  getMyTenants: Array<{ id: string; name: string; description: string }>;
};

export type GetUsersQueryVariables = Exact<{
  tenantId: Scalars['String']['input'];
}>;

export type GetUsersQuery = {
  getUsers: Array<{ firstName: string; lastName: string; id: string }>;
};

const InvitationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Invitation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getInvitation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'invitationCode' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'code' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<InvitationQuery, InvitationQueryVariables>;
const GetResetTokenInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetResetTokenInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getResetToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'resetToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetResetTokenInfoQuery,
  GetResetTokenInfoQueryVariables
>;
const ForgotPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ForgotPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'forgotPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userName' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
const ClaimDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Claim' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'claimInvitation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'inviteCode' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'code' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClaimMutation, ClaimMutationVariables>;
const ResetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ResetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'newPassword' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resetPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'resetToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newPassword' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'newPassword' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
const GetContactsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetContacts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Page' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tenantId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getContacts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tenantId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tenantId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ContactOrg' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ContactPerson' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'givenName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'familyName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'middleName' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetContactsQuery, GetContactsQueryVariables>;
const CreateContactOrgDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateContactOrg' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OrganizationInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tenantId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createContactOrganization' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tenantId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tenantId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'addresses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'house' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isPrimary' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'landmark' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postalCodeId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'street' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'emails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isPrimary' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'people' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'dob' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'familyName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'givenName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'middleName' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'phones' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'countryId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isPrimary' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'number' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateContactOrgMutation,
  CreateContactOrgMutationVariables
>;
const CreateContactPersonDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateContactPerson' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PersonInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tenantId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createContactPerson' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tenantId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tenantId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dob' } },
                { kind: 'Field', name: { kind: 'Name', value: 'familyName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'givenName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'middleName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateContactPersonMutation,
  CreateContactPersonMutationVariables
>;
const TenantsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Tenants' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyTenants' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TenantsQuery, TenantsQueryVariables>;
const GetUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tenantId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'tenantId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'tenantId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;

export const Query = {
  Invitation: InvitationDocument,
  GetResetTokenInfo: GetResetTokenInfoDocument,
  GetContacts: GetContactsDocument,
  Tenants: TenantsDocument,
  GetUsers: GetUsersDocument,
};

export const Mutation = {
  ForgotPassword: ForgotPasswordDocument,
  Claim: ClaimDocument,
  ResetPassword: ResetPasswordDocument,
  CreateContactOrg: CreateContactOrgDocument,
  CreateContactPerson: CreateContactPersonDocument,
};

export const Operations = { ...Query, ...Mutation };
