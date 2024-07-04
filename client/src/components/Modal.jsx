const Modal = ({ showModal, setShowModal, title, children }) => {
  let closeModel = showModal;
  return (
    <>
      {showModal && closeModel ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black opacity-50"
          ></div>
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                className="text-black"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="p-4">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
