import type { ReactNode } from 'react';

interface SceneTransitionProps {
  children: ReactNode;
  className?: string;
  tone?: string;
}

export default function SceneTransition({ children, className = '', tone = '' }: SceneTransitionProps) {
  return (
    <div className={`relative ${tone} ${className}`}>
      {children}
    </div>
  );
}
