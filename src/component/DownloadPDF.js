import React from 'react';

const DownloadPDF = ({className}) => {
  return (
    <div>
      <a href="/pdf/Hein Thu.pdf" download>
        <button className={className}>Download PDF</button>
      </a>
    </div>
  );
};

export default DownloadPDF;