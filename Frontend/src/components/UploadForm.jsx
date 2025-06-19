// components/UploadForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState('en');

  const handleUpload = async () => {
    if (!file) return alert('Select a video or audio file');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetLanguage', language);
    console.log(formData.file)

    const res = await axios.post('http://localhost:4444/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    alert('Upload successful!');
    console.log(res.data);
  };

  return (
    <div>
      <input type="file" accept="video/*,audio/*" onChange={e => setFile(e.target.files[0])} />
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
        {/* Add more as needed */}
      </select>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default UploadForm