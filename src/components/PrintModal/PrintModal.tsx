import { Dialog, Transition } from "@headlessui/react";
import {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactHtmlParser from "react-html-parser";
import { GiLeafSwirl } from "react-icons/gi";
import labels from "../../assets/labels.json";
import "./PrintModal.css";

export type PrintModalHandle = {
  openModal: () => void;
};

type PrintModalProps = {};
// eslint-disable-next-line@typescript-eslint/no-unused-vars
// @ts-ignore
export default forwardRef<PrintModalHandle, PrintModalProps>((props, ref) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const printPage = () => {
    setOpen(false);
    window.print();
  };

  const closeModal = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    },
  }));

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="modal"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="modal-bg" />
        </Transition.Child>

        <div className="modal-box">
          <div className="modal-content">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="panel">
                <div className="body">
                  <div className="holder">
                    <div className="icon-placeholder">
                      <GiLeafSwirl className="icon" aria-hidden="true" />
                    </div>
                    <div className="text-placeholder">
                      <Dialog.Title as="h3" className="title">
                        {labels.printFeature.popupTitle}
                      </Dialog.Title>
                      <div className="notice">
                        {ReactHtmlParser(labels.printFeature.popupBody)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-bar">
                  <button
                    type="button"
                    className="button validate-button"
                    onClick={printPage}
                  >
                    {labels.printFeature.printBtn}
                  </button>
                  <button
                    type="button"
                    className="button cancel-button"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    {labels.printFeature.cancelBtn}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
});
