export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  Gender: { input: any; output: any; }
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

export type Email = {
  address: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
};

export type EmailInput = {
  address: Scalars['String']['input'];
  isPrimary: Scalars['Boolean']['input'];
};

export type Mutation = {
  acceptInvitation: Scalars['Boolean']['output'];
  claimInvitation: Scalars['Boolean']['output'];
  createOrganization: Organization;
  createTenant: NewTenantResponse;
  inviteUser: Scalars['Boolean']['output'];
};


export type MutationAcceptInvitationArgs = {
  inviteId: Scalars['String']['input'];
};


export type MutationClaimInvitationArgs = {
  inviteCode: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateOrganizationArgs = {
  input: OrganizationInput;
  tenantId: Scalars['String']['input'];
};


export type MutationCreateTenantArgs = {
  input: NewTenantInput;
};


export type MutationInviteUserArgs = {
  input: NewInvitationInput;
  tenantId: Scalars['String']['input'];
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

export type Person = {
  dob?: Maybe<Scalars['Date']['output']>;
  familyName: Scalars['String']['output'];
  givenName1: Scalars['String']['output'];
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
  getTenants: Array<Tenant>;
  getUsers: Array<User>;
  hello: Scalars['String']['output'];
};


export type QueryGetUsersArgs = {
  tenantId: Scalars['String']['input'];
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
