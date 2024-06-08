import React from 'react';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="copyright py-4 text-center text-white">
      <div className="container"><small>Copyright &copy; Zekarias Mesfin {currentYear}</small></div>
    </div>
  );
}

export default Copyright;
