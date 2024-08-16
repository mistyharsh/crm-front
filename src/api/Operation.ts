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

export type AddressInput = {
  house: Scalars['String']['input'];
  landmark: Scalars['String']['input'];
  postalCodeId: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type EmailInput = {
  address: Scalars['String']['input'];
  isPrimary: Scalars['Boolean']['input'];
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

export type PhoneInput = {
  countryId: Scalars['String']['input'];
  isPrimary: Scalars['Boolean']['input'];
  number: Scalars['String']['input'];
};

export type ClaimQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;

export type ClaimQuery = {
  getInvitation: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
};

export type ForgotPasswordMutationVariables = Exact<{
  userName: Scalars['String']['input'];
}>;

export type ForgotPasswordMutation = { forgotPassword: boolean };

export type ResetPasswordQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;

export type ResetPasswordQuery = {
  getResetToken: { id: string; userId: string };
};

const ClaimDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
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
} as unknown as DocumentNode<ClaimQuery, ClaimQueryVariables>;
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
const ResetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
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
} as unknown as DocumentNode<ResetPasswordQuery, ResetPasswordQueryVariables>;

export const Query = {
  Claim: ClaimDocument,
  ResetPassword: ResetPasswordDocument,
};

export const Mutation = {
  ForgotPassword: ForgotPasswordDocument,
};
