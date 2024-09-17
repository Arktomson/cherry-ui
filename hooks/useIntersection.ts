import { useEffect, useState } from 'react';

const map = new WeakMap();
const ob = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
  for (let ele of entries) {
    const handler = map.get(ele.target);
    handler?.(ele);
  }
});
export const useIntersection = <T extends HTMLElement>(dom: T) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!dom) return;
    ob.observe(dom);
    map.set(dom, (entry: IntersectionObserverEntry) => {
      setIsInView(entry.isIntersecting);
    });
    return () => {
      ob.unobserve(dom);
    };
  }, []);

  return isInView;
};
