import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

import Cor1 from "../image/cor-1.jpg";
import Cor2 from "../image/cor-2.jpg";
import Cor3 from "../image/cor-3.jpg";
import Cor4 from "../image/cor-4.jpg";
import Cor5 from "../image/cor-5.jpg";
import Cor6 from "../image/cor-6.jfif";
import Cor7 from "../image/cor-7.jpg";
import Cor8 from "../image/cor-8.jpg";
import Cor9 from "../image/cor-9.jpg";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="courses row" style={{ minHeight: "100vh" }}>
      <div className="col-md-4">
        <div className="courses-container">
          <div className="card">
            <img src={Cor1} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">重訓減脂</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={openModal}
              >
                訓練內容
              </Link>
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src={Cor2} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">健美增肌</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor3} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">健力三項</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor4} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">拳擊燃脂</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor5} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">TRX懸吊課程</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor6} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">高強度循環</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor7} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">運動力提升</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor8} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">筋膜伸展</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor9} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">飲食調配</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" className="btn btn-primary">
              訓練內容
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
