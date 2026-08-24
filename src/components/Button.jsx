import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusable button with editorial visual language.
// Renders as a Link if `to` is provided, as <button> otherwise.

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:opacity-50 disabled:pointer-events-none';

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wide',
  md: 'px-5 py-3 text-sm tracking-wide',
  lg: 'px-7 py-4 text-sm tracking-wide',
};

const variants = {
  primary:
    'bg-gold text-forest hover:bg-gold-500 active:scale-[0.98]',
  dark:
    'bg-forest text-ivory hover:bg-charcoal active:scale-[0.98]',
  outline:
    'border border-forest text-forest hover:bg-forest hover:text-ivory active:scale-[0.98]',
  outlineLight:
    'border border-ivory/30 text-ivory hover:bg-ivory hover:text-forest active:scale-[0.98]',
  ghost:
    'text-forest hover:bg-forest/5 active:scale-[0.98]',
  link:
    'text-forest hover:text-gold-600 underline-offset-4 decoration-gold/40 hover:decoration-gold decoration-2 underline',
};

export default function Button({
  children, to, href, variant = 'primary', size = 'md', className = '',
  icon: Icon, iconRight: IconRight, onClick, type = 'button', disabled, ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {IconRight && <IconRight className="w-4 h-4" />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} onClick={onClick} {...rest}>{content}</Link>;
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <motion.button type={type} className={classes} onClick={onClick} disabled={disabled} whileTap={{ scale: 0.97 }} {...rest}>
      {content}
    </motion.button>
  );
}
