import { useRef } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import labels from "../../assets/labels.json";
import PrintModal, { PrintModalHandle } from "../PrintModal/PrintModal";

export default () => {
  const modalRef = useRef<PrintModalHandle>(null);

  return (
    <>
      <button
        onClick={() => {
          if (modalRef.current) {
            modalRef.current.openModal();
          }
        }}
        className="fab primary-button"
      >
        <span>
          <AiOutlinePrinter />
        </span>
        {labels.printFeature.printBtn}
      </button>

      <PrintModal ref={modalRef}/>
    </>
  );
};
