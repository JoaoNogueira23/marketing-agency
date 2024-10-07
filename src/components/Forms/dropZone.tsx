import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onFileUpload: (files: File[]) => void;
  setErrorDrop: React.Dispatch<React.SetStateAction<string>>
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUpload, setErrorDrop }) => {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      const maxWidth = 300
      const maxHeight = 300
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          const width = img.width;
          const height = img.height;
          if (width <= maxWidth && height <= maxHeight) {
            onFileUpload(acceptedFiles);
            // Agora você pode processar a imagem, como enviá-la para o backend
          } else {
            setErrorDrop(`Image rejected. Dimensions: ${width}x${height}. Maximum allowed: ${maxWidth}x${maxHeight}`)
    
          }
        };
      };

      reader.readAsDataURL(file);
    });
  }, []);


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
