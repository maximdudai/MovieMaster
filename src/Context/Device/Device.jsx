import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const DefineUserDevice = createContext(null);

export const UserDeviceDetection = ({ children }) => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);


      if (isMobile) {
        setDevice('mobile');
      } else if (isTablet) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return (
    <DefineUserDevice.Provider value={device}>
      {children}
    </DefineUserDevice.Provider>
  );
};

UserDeviceDetection.propTypes = {
  children: PropTypes.node.isRequired
}