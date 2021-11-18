import React from "react";

const Modal3 = ({ showModal3, setShowModal3 }) => {
  return (
    <>
      {showModal3 ? (
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
                  健力三項
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">健力三項test test test</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal3;
