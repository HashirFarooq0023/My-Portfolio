import React, { useRef } from 'react';

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  as = 'button',
  href,
  target,
  rel,
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const btnRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    el.style.setProperty('--pointer-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.setProperty('--pointer-opacity', '0');
  };

  const variantClass =
    variant === 'primary'
      ? 'liquid-glass-btn-primary'
      : variant === 'secondary'
      ? 'liquid-glass-btn-secondary'
      : 'liquid-glass-btn-ghost';

  const combinedClass = `liquid-glass-btn group relative inline-flex items-center justify-center gap-2 select-none ${variantClass} ${className}`;

  if (as === 'a' || href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick as any}
      >
        <span className="liquid-glass-reflection pointer-events-none" aria-hidden="true" />
        <span className="liquid-glass-inner-bevel pointer-events-none" aria-hidden="true" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={(rest as any).type || 'button'}
      className={combinedClass}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...(rest as any)}
    >
      <span className="liquid-glass-reflection pointer-events-none" aria-hidden="true" />
      <span className="liquid-glass-inner-bevel pointer-events-none" aria-hidden="true" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
