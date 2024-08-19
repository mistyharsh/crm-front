// This component is used as a mock for the `Link` component of the '@tanstack/react-router'.
// The low-level component should avoid using higher-order concerns like routing.
export function Link(props: any) {
  const { activeProps, ...rest } = props;

  const onClick = (e: Event) => {
    e.preventDefault();
  };

  return <a {...rest} href='#' onClick={onClick} />;
}

export function useNavigate() {
  return () => {};
}
