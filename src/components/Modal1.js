import React from "react";

const Modal1 = ({ showModal1, setShowModal1 }) => {
  return (
    <>
      {showModal1 ? (
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  重訓減脂
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">透過重訓減脂的好處，Modal 1 內容</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal1;
