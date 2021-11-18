import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal1 from "../components/Modal1";
import Modal2 from "../components/Modal2";
import Modal3 from "../components/Modal3";

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
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const openModal1 = () => {
    setShowModal1((prev) => !prev);
  };

  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };

  const openModal3 = () => {
    setShowModal3((prev) => !prev);
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
                要減除身體的脂肪，不可忽視的一項運動就是無氧運動，就是俗稱的重量訓練，具有增強新陳代謝並且維持代謝高峰24~48小時。
              </p>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={openModal1}
              >
                訓練內容
              </Link>
              <Modal1 showModal1={showModal1} setShowModal1={setShowModal1} />
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
              重量訓練也能幫助從小吃不胖、瘦小身形的朋友們增加身體的肌肉量，來達到自己理想的壯碩身材。
            </p>
            <Link
              to="#"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={openModal2}
            >
              訓練內容
            </Link>
            <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src={Cor3} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">健力三項</h5>
            <p className="card-text">
              你喜歡追求數字上的突破嗎?
              健力者們追求舉得更重，運用全身神經連結，一鼓作氣拉起沉重的槓鈴吧。
            </p>
            <Link
              to="#"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={openModal3}
            >
              訓練內容
            </Link>
            <Modal3 showModal3={showModal3} setShowModal3={setShowModal3} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={Cor4} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">拳擊燃脂</h5>
            <p className="card-text">
              配合拳擊手訓練的動作，敏捷的腳步、痛快地出拳，隨著音樂緩急的律動，可達到等同高強度有氧的燃脂效果。
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
              TRX是近年歐美最流行的健身方式，是全身性的肌力訓練，藉由調整身體的角度，對肌肉的刺激效果能夠更深層。
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
              結合有氧及阻力訓練，只需要簡便的器材就能運動，是目前公認最有效的有氧無氧混合燃脂運動。
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
              運動表現包含肌肉爆發力、肌耐力、核心肌群穩定，藉由協調身體各部位肌肉，強化心肺耐力、速度、跳躍力等運動表現。
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
              鍛鍊完身體後，身體的肌肉與筋膜可透過伸展運動，快速恢復肌肉彈性，並且有放鬆心情、降低壓力的好處。
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
              在追求強健的體魄中，飲食才是佔健康因素最大的關鍵，藉由營養計畫調配出最佳飲食方式，邁向健康活力的生活吧。
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
