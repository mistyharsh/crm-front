import { Button } from '@mantine/core';
import { Plus } from 'lucide-react';

export type AddMoreButtonProps = {
  onClick: () => void;
  text: string;
};

export function AddMoreButton(props: AddMoreButtonProps) {
  const { onClick, text } = props;

  return (
    <Button
      variant='transparent'
      p={0}
      h={24}
      onClick={onClick}
      leftSection={<Plus size={16} />}
      children={text}
    />
  );
}
