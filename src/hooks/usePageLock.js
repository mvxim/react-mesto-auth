import { useCallback } from 'react';

const usePageLock = () => {
  const lockScroll = useCallback(() => {
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${ scrollBarWidth }px`;
  }, []);
  
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = 0;
  }, []);
  
  return {
    lockScroll,
    unlockScroll,
  };
};

export default usePageLock;
