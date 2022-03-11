import { useEffect } from 'react';
import usePageLock from '../hooks/usePageLock';

const Popup = ({ isOpen, name, onClose, children }) => {
  
  const { lockScroll, unlockScroll } = usePageLock();
  
  useEffect(() => {
    if (!isOpen) return;
    lockScroll();
    
    return () => {
      unlockScroll();
    };
  }, [ isOpen, lockScroll, unlockScroll ]);
  
  useEffect(() => {
    if (!isOpen) return;
    
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
    
  }, [ isOpen, onClose ]);
  
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  
  return (
      <section
          className={ `modal modal_type_${ name } page__modal ${ isOpen ? 'modal_active' : '' }` }
          onClick={ handleOverlay }
      >
        <div className={ `modal__${ name ===
        'picture' ? 'figure' : 'container' }` }>
          <button
              className="modal__close-btn"
              type="button"
              onClick={ onClose }
          />
          { children }
        </div>
      
      </section>
  );
};

export default Popup;
