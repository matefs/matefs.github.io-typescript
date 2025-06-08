import React from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative p-4 bg-white rounded-lg max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-screen object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;