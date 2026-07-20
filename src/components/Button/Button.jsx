import './Button.scss';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  className = '',
  ...props
}) => {
  const Component = href ? 'a' : 'button';
  const isExternal = href?.startsWith('http');

  return (
    <Component
      className={`button button--${variant} button--${size} ${className}`.trim()}
      href={href}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};
