import React, { useState } from 'react';
import axios from 'axios';

function DocumentConverter() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [conversionType, setConversionType] = useState('wordToPdf');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConversionTypeChange = (event) => {
        setConversionType(event.target.value);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        setError(null);

        try {
            const endpoint = conversionType === 'wordToPdf' ? '/wordtopdf' : '/pdftoword';
            const fileExtension = conversionType === 'wordToPdf' ? 'pdf' : 'docx';

            const response = await axios.post(`https://server.gdest.in${endpoint}`, formData, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `converted_document.${fileExtension}`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            setError('Error uploading or converting the file.');
            console.error('Error uploading file:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Document Converter</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        value="wordToPdf"
                        checked={conversionType === 'wordToPdf'}
                        onChange={handleConversionTypeChange}
                    />
                    Word to PDF
                </label>
                <label>
                    <input
                        type="radio"
                        value="pdfToWord"
                        checked={conversionType === 'pdfToWord'}
                        onChange={handleConversionTypeChange}
                    />
                    PDF to Word
                </label>
            </div>
            <input
                type="file"
                accept={conversionType === 'wordToPdf' ? '.docx' : '.pdf'}
                onChange={handleFileChange}
            />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Converting...' : 'Upload and Convert'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default DocumentConverter;
