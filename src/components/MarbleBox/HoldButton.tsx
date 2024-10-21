import { ReactNode, useEffect, useRef } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface HoldButtonProps extends ButtonProps {
  onClick: () => void;
  children: ReactNode;
  holdTime?: number;
}

export default function HoldButton({ onClick, children, holdTime = 500, ...rest }: HoldButtonProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      handleHoldStop();
    };
  }, []);

  const handleHoldStart = () => {
    onClick();
    timerRef.current = setTimeout(() => {
        timerRef.current = setInterval(onClick, 100); 
      }, holdTime);
  };

  const handleHoldStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <Button
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldStop}
      onMouseLeave={handleHoldStop}
      {...rest}
    >
      {children}
    </Button>
  );
};
