import React from 'react';

const DownloadPDF = ({className}) => {
  return (
    <div>
      <a href="/pdf/Hein Thu CV.pdf" download>
        <button className={className}>Download Resume</button>
      </a>
    </div>
  );
};

export default DownloadPDF;