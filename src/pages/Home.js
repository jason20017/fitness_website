import React from "react";
import Fit from "../image/fit.jpg";
import Fit4 from "../image/fit-4.jpg";
import Fit5 from "../image/fit-5.jpg";
import Fit6 from "../image/fit-6.jpg";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home" style={{ minHeight: "100vh" }}>
      <div className="home_pic">
        <img src={Fit} alt="" />
        <h1>Star Fitness</h1>
        <p className="home_subtitle">Build Your Strong Body & Mind</p>
        <Link to="/Courses">
          <button type="button" className="btn btn-outline-warning btn-lg">
            開始健身
          </button>
        </Link>
      </div>

      <div className="home_intro">
        <div className="home_intro_left">
          <img src={Fit6} alt="" />
        </div>
        <div className="home_intro_right">
          從2015年開始，台灣對於以健身來改善體態還有維持健康的觀念越來越普及，健身重訓不再只是一個專業的運動項目，踏入健身房也不是健美先生的專利，而是遍及大街小巷，從青少年、壯年、中年甚至老年都能一同參與的運動，就像游泳與跑步一樣，別人推著槓鈴，你也能一起推。
        </div>
      </div>

      <div className="home_intro">
        <div className="home_intro_right">
          健身最受大眾關注的好處就在於 <strong>減肥</strong>、
          <strong>甩肉</strong>、<strong>變苗條</strong>
          ，但普遍人的觀念就是繳了健身房的會費、買了一些教練課就能立刻變瘦，但往往事與願違，踏入健身房只是一個起點，為了達到夢想中的身材，大家需要對於運動知識、飲食營養有一定程度的了解，這並非只是付了錢就能辦到，需要親自實踐一段時間，慢慢看見自己的進步，一路堅持到達成目標。
        </div>
        <div className="home_intro_left">
          <img src={Fit4} alt="" />
        </div>
      </div>

      <div className="home_intro">
        <div className="home_intro_left">
          <img src={Fit5} alt="" />
        </div>
        <div className="home_intro_right">
          Star Fitness
          致力於打造最舒適的運動空間，並且擁有專業的私人教練以及營養師，提供給會員訓練
          + 飲食的諮詢服務。
          <br />
          Star
          Fitness一對一的客製化訓練飲食計劃，將為平常上班忙碌、家事繁重的你，提供最全面的身材改善服務，讓您在追求理想身材的道路上事半功倍。
        </div>
      </div>
    </div>
  );
};

export default Home;
