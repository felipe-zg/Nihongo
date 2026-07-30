import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  [key: string]: any;
};

const Modal = ({ isOpen, onClose, children, size = "md", ...props }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={backdropStyle} onClick={onClose}>
      <div
        style={{ ...modalStyle, width: size === "lg" ? "80%" : "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const backdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "#001",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  maxHeight: "90vh",
  overflowY: "auto",
};

export default Modal;

