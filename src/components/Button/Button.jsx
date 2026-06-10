import './Button.scss';

export const Button = ({ children, variant = 'primary', size = 'md', href, onClick, ...props }) => {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      className={`button button--${variant} button--${size}`}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};
