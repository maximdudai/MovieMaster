import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

export const ResolutionContext = createContext(null);

export const ResolutionProvider = ({ children }) => {
  const [resolution, setResolution] = useState(window.innerWidth);
  const [layout, setLayout] = useState('mobile');

  useEffect(() => {
    const handleResize = () => setResolution(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    setLayout(resolution <= 640 ? 'mobile' : resolution <= 1007 ? 'tablet' : 'desktop');
    root.setAttribute('data-layout', layout);
    
  }, [layout, resolution]);

  return (
    <ResolutionContext.Provider value={layout}>
      {children}
    </ResolutionContext.Provider>
  );
}

ResolutionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};