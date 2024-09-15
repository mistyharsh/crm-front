import { useProvider } from '@adobe/react-spectrum';
import { useMediaQuery } from '@react-spectrum/utils';

export function useDesktop(): boolean {
  const provider = useProvider();
  const isDesktop = useMediaQuery(
    `(min-width: ${provider.breakpoints.M ?? 768}px)`
  );

  return isDesktop;
}
