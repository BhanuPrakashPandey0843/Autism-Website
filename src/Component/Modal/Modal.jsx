import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh] w-full max-w-4xl relative p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black-500 hover:text-red-500 text-3xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
