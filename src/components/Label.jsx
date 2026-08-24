// Editorial label — small uppercase text with optional gold accent.
export default function Label({ children, className = '', gold = false, dark = false }) {
  const color = gold ? 'text-gold' : dark ? 'text-ivory/50' : 'text-sage';
  return (
    <span className={`label ${color} ${className}`}>
      {children}
    </span>
  );
}
