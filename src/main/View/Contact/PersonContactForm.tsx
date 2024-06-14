import type { PersonInput } from '#shared/gen/Api.js';
import { Button, ButtonGroup, Form, Heading } from '@adobe/react-spectrum';

import type { FormEvent } from 'react';

import { PersonField } from './Component/PersonInputs';

export type PersonContactFormProps = {
  value: PersonInput;
  tenantId: string;
  onInput: (value: PersonInput) => void;
  onSubmit: (value: PersonInput, tenantId: string) => void;
};

export function PersonContactForm(_props: PersonContactFormProps) {
  const { value, tenantId, onInput, onSubmit } = _props;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value, tenantId);
  };

  return (
    <Form
      necessityIndicator='icon'
      validationBehavior='native'
      onSubmit={handleSubmit}
    >
      <Heading level={2}>Person Information</Heading>
      <PersonField value={value} onChange={onInput} />
      <ButtonGroup>
        <Button type='submit' variant='primary'>
          Save
        </Button>
        <Button type='reset' variant='secondary'>
          Reset
        </Button>
      </ButtonGroup>
    </Form>
  );
}
