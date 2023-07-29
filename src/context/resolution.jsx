import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

export const ResolutionContext = createContext();

export const ResolutionProvider = ({ children }) => {
  const [resolution, setResolution] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setResolution(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <ResolutionContext.Provider value={resolution}>
      {children}
    </ResolutionContext.Provider>
  );
}

ResolutionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};