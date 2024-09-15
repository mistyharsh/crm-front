// This module is used as a mock for the '@tanstack/react-router'.
// Ideally, the low-level component should avoid using higher-order concerns like routing.

export function useRouter() {
  return () => ({
    buildLocation() {
      return { href: '/mocked-url' };
    },
  });
}
