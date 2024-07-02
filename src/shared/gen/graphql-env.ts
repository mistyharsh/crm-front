/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'Address': { kind: 'OBJECT'; name: 'Address'; fields: { 'house': { name: 'house'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'isPrimary': { name: 'isPrimary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'landmark': { name: 'landmark'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'postalCodeId': { name: 'postalCodeId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'street': { name: 'street'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'AddressInput': { kind: 'INPUT_OBJECT'; name: 'AddressInput'; isOneOf: false; inputFields: [{ name: 'house'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'landmark'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'postalCodeId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'street'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'Boolean': unknown;
    'Contact': { kind: 'UNION'; name: 'Contact'; fields: {}; possibleTypes: 'ContactOrg' | 'ContactPerson'; };
    'ContactOrg': { kind: 'OBJECT'; name: 'ContactOrg'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ContactPerson': { kind: 'OBJECT'; name: 'ContactPerson'; fields: { 'familyName': { name: 'familyName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'givenName': { name: 'givenName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'middleName': { name: 'middleName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'Date': unknown;
    'Email': { kind: 'OBJECT'; name: 'Email'; fields: { 'address': { name: 'address'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'isPrimary': { name: 'isPrimary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'EmailInput': { kind: 'INPUT_OBJECT'; name: 'EmailInput'; isOneOf: false; inputFields: [{ name: 'address'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'isPrimary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; }; defaultValue: null }]; };
    'Gender': unknown;
    'ID': unknown;
    'Int': unknown;
    'Invitation': { kind: 'OBJECT'; name: 'Invitation'; fields: { 'email': { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'firstName': { name: 'firstName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'lastName': { name: 'lastName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'acceptInvitation': { name: 'acceptInvitation'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'claimInvitation': { name: 'claimInvitation'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'createContactOrganization': { name: 'createContactOrganization'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Organization'; ofType: null; }; } }; 'createContactPerson': { name: 'createContactPerson'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Person'; ofType: null; }; } }; 'createTenant': { name: 'createTenant'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'NewTenantResponse'; ofType: null; }; } }; 'forgotPassword': { name: 'forgotPassword'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'inviteUser': { name: 'inviteUser'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'resetPassword': { name: 'resetPassword'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; }; };
    'NewInvitationInput': { kind: 'INPUT_OBJECT'; name: 'NewInvitationInput'; isOneOf: false; inputFields: [{ name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'firstName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'lastName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'NewTenantInput': { kind: 'INPUT_OBJECT'; name: 'NewTenantInput'; isOneOf: false; inputFields: [{ name: 'description'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'firstName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'lastName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'NewTenantResponse': { kind: 'OBJECT'; name: 'NewTenantResponse'; fields: { 'description': { name: 'description'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; }; };
    'Organization': { kind: 'OBJECT'; name: 'Organization'; fields: { 'addresses': { name: 'addresses'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Address'; ofType: null; }; }; }; } }; 'emails': { name: 'emails'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Email'; ofType: null; }; }; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'people': { name: 'people'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Person'; ofType: null; }; }; }; } }; 'phones': { name: 'phones'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Phone'; ofType: null; }; }; }; } }; }; };
    'OrganizationInput': { kind: 'INPUT_OBJECT'; name: 'OrganizationInput'; isOneOf: false; inputFields: [{ name: 'addresses'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AddressInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'emails'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'EmailInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'people'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PersonInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'phones'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PhoneInput'; ofType: null; }; }; }; }; defaultValue: null }]; };
    'Page': { kind: 'INPUT_OBJECT'; name: 'Page'; isOneOf: false; inputFields: [{ name: 'number'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'size'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }]; };
    'Person': { kind: 'OBJECT'; name: 'Person'; fields: { 'dob': { name: 'dob'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } }; 'familyName': { name: 'familyName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'givenName': { name: 'givenName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'middleName': { name: 'middleName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'PersonInput': { kind: 'INPUT_OBJECT'; name: 'PersonInput'; isOneOf: false; inputFields: [{ name: 'addresses'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AddressInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'dob'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; }; defaultValue: null }, { name: 'emails'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'EmailInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'familyName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'gender'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Gender'; ofType: null; }; }; defaultValue: null }, { name: 'givenName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'middleName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'phones'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'PhoneInput'; ofType: null; }; }; }; }; defaultValue: null }]; };
    'Phone': { kind: 'OBJECT'; name: 'Phone'; fields: { 'countryId': { name: 'countryId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'isPrimary': { name: 'isPrimary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'number': { name: 'number'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'PhoneInput': { kind: 'INPUT_OBJECT'; name: 'PhoneInput'; isOneOf: false; inputFields: [{ name: 'countryId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'isPrimary'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; }; defaultValue: null }, { name: 'number'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'getContacts': { name: 'getContacts'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'UNION'; name: 'Contact'; ofType: null; }; }; }; } }; 'getInvitation': { name: 'getInvitation'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Invitation'; ofType: null; }; } }; 'getMyTenants': { name: 'getMyTenants'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Tenant'; ofType: null; }; }; }; } }; 'getResetToken': { name: 'getResetToken'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'ResetPasswordRequest'; ofType: null; }; } }; 'getTenants': { name: 'getTenants'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Tenant'; ofType: null; }; }; }; } }; 'getUsers': { name: 'getUsers'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'User'; ofType: null; }; }; }; } }; 'hello': { name: 'hello'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ResetPasswordRequest': { kind: 'OBJECT'; name: 'ResetPasswordRequest'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'userId': { name: 'userId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; }; };
    'String': unknown;
    'Tenant': { kind: 'OBJECT'; name: 'Tenant'; fields: { 'description': { name: 'description'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'User': { kind: 'OBJECT'; name: 'User'; fields: { 'firstName': { name: 'firstName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'lastName': { name: 'lastName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
  };
};

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection;
  }
}
