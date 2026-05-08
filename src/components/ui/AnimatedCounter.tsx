import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  from: number;
  to: number;
  duration: number;
};

const AnimatedCounter = ({ from, to, duration }: Props) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(from + progress * (to - from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {to % 1 !== 0 ? count.toFixed(2) : Math.round(count).toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
