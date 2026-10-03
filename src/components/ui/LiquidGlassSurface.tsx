import React, { useRef } from 'react';

interface LiquidGlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableLight?: boolean;
}

export const LiquidGlassSurface: React.FC<LiquidGlassSurfaceProps> = ({
  children,
  className = '',
  enableLight = true,
  ...rest
}) => {
  const surfaceRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableLight) return;
    const el = surfaceRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    el.style.setProperty('--surface-light-opacity', '1');
  };

  const handleMouseLeave = () => {
    if (!enableLight) return;
    const el = surfaceRef.current;
    if (!el) return;
    el.style.setProperty('--surface-light-opacity', '0');
  };

  return (
    <div
      ref={surfaceRef}
      className={`liquid-glass-surface relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {enableLight && (
        <span className="liquid-glass-surface-reflection pointer-events-none" aria-hidden="true" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
