import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onFileUpload: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Aqui você pode manipular os arquivos carregados, como enviá-los para um servidor
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
        'image/*': ['.png', '.jpeg', '.webp']
    }
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#EEEEEE',
        borderRadius: '5px'
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here or click here for browser your machine ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Dropzone;
