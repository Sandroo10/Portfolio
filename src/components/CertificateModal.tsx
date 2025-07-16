type CertificateModalProps = {
  title: string;
  pdfSrc: string;
  onClose: () => void;
};

const CertificateModal = ({ title, pdfSrc, onClose }: CertificateModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <iframe
          src={pdfSrc}
          className="w-full h-[600px]"
          title={title}
        ></iframe>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          ✕ Close
        </button>
      </div>
    </div>
  );
};

export default CertificateModal;
