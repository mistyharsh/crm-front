import { View } from '@adobe/react-spectrum';
import type { ReactNode } from 'react';

export type AuthViewProps = {
  className: string;
  children: ReactNode;
};

export function AuthView(props: AuthViewProps) {
  const { className, children } = props;

  return (
    <View
      data-cl={className}
      backgroundColor={'gray-75'}
      padding={'size-400'}
      width={'size-5000'}
      margin={'auto'}
      marginTop={'size-400'}
      borderColor={'gray-200'}
      borderWidth={'thin'}
    >
      {children}
    </View>
  );
}
