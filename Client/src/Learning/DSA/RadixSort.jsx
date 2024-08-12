import React from 'react';
import axios from 'axios';

function RadixSort() {
  const handleDownload = async () => {
    try {
      const response = await axios.post('https://6m894k-3700.csb.app/documents/process', {
        // No data sent from frontend
      }, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output_resume.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF resume:', error);
      console.error('Error response:', error.response); // Log Axios error response for debugging
    }
  };

  return (
    <div className="RadixSort-container">
      <h2>Radix Sort</h2>
      <button onClick={handleDownload}>Download PDF Resume</button>
    </div>
  );
}

export default RadixSort;
