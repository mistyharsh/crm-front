import { useRouter } from '@tanstack/react-router';

export function useHref(to: { fullPath: string }, params: any = {}, search: any = {}): string {
  const router = useRouter();

  const location = router.buildLocation({
    params,
    search,
    to: to.fullPath,
  });

  return location.href;
}
