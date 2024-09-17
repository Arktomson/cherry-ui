import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.less';

interface IProps {
  children: React.ReactNode;
  // 距离顶部多少时显示
  scrollTop?: number;
  // 是否平滑滚动
  smooth?: 'smooth' | 'auto';
  top?: number | 'auto';
  right?: number | 'auto';
  bottom?: number | 'auto';
  left?: number | 'auto';
  // 被观察元素的id
  observedId?: string;
  // 是否随观察元素出现而出现
  withObserve?: boolean;
}
function BackTop({
  children,
  scrollTop = 0,
  smooth = 'smooth',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  observedId = '',
  withObserve = true,
}: IProps) {
  const [isShow, setIsShow] = useState(false);

  function scrollTo(e: React.MouseEvent<HTMLDivElement>) {
    // 即使portal，也需要阻止冒泡，React事件是按照组件树来传递的，并非实际的DOM树
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: smooth,
    });
  }

  // 滚动控制显示
  function showControl() {
    if (observedId) return;
    const isBeyond = window.scrollY >= scrollTop;
    if (isBeyond !== isShow) {
      setIsShow(isBeyond);
    }
  }

  // 初始化时，如果已经超过scrollTop，则显示
  useEffect(() => {
    if (observedId) return;
    if (window.scrollY >= scrollTop) {
      setIsShow(true);
    }
  }, []);

  // 监听滚动事件
  useEffect(() => {
    if (observedId) return;
    window.addEventListener('scroll', showControl);
    return () => {
      window.removeEventListener('scroll', showControl);
    };
  }, [showControl]);

  useEffect(() => {
    if (!observedId) return;
    const ele = document.getElementById(observedId);
    const observer = new IntersectionObserver((entry) => {
      for (const e of entry) {
        if (e.target === ele) {
          const isShow = withObserve ? e.isIntersecting : !e.isIntersecting;
          setIsShow(isShow);
        }
      }
    });
    observer.observe(ele!);
    return () => {
      observer.disconnect();
    };
  }, []);

  const portal = createPortal(
    <div
      className="cu-backtop"
      onClick={scrollTo}
      style={{ top, right, bottom, left }}
    >
      {children}
    </div>,
    document.body,
  );

  return isShow ? portal : null;
}

export default BackTop;
