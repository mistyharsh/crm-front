import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export type SidebarState = 'static' | 'open' | 'closed';

export type UseSidebarProps = [SidebarState, (value: boolean) => void];

export function useSidebar(): UseSidebarProps {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [open, setOpen] = useState(false);

  const state: SidebarState = isDesktop ? 'static' : open ? 'open' : 'closed';

  useEffect(() => {
    if (!isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return [state, setOpen];
}
