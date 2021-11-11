import React, { Component } from "react";
import Tdeepic from "../image/fit-7.png";

class TDEE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      weight: "",
      age: "",
      gender: 0,
      active: 0,
      msg: "",
    };

    this.calcTDEE = this.calcTDEE.bind(this);
  }

  calcTDEE() {
    const height = this.state.height;
    const weight = this.state.weight;
    const age = this.state.age;
    const gender = this.state.gender;
    let s1;
    if (gender === "1") {
      s1 = 5;
    } else {
      s1 = -161;
    }

    let BMR = height * 6.25 + weight * 10 - age * 5 + s1;
    const active = this.state.active;
    let T1;
    switch (active) {
      case "1":
        T1 = 1.2;
        break;
      case "2":
        T1 = 1.375;
        break;
      case "3":
        T1 = 1.55;
        break;
      case "4":
        T1 = 1.725;
        break;
      case "5":
        T1 = 1.9;
        break;
      default:
    }
    const result = Math.round(BMR * T1);
    this.setState({
      msg: result + "大卡(kcal)",
    });
  }

  render() {
    return (
      <div className="tdee" style={{ minHeight: "100vh" }}>
        <div className="tdee_pic">
          <img src={Tdeepic} alt="" />
          <h1>TDEE測量器 </h1>
        </div>

        <div className="tdee_container">
          <div className="tdee_left">
            <h2>TDEE 是什麼 ?</h2>
            <p>每日總消耗熱量 Total Daily Energy Expenditure</p>
            <p>
              TDEE = BMR(基礎代謝能量消耗) + NEAT(身體活動所需要的能量) +
              TEF(食物的消化吸收) + EEE(運動燃燒熱量) <br />
              可藉由人的性別、身高、體重、年齡以及平時運動的習慣
              <br />
              來推算一個人在正常的活動情況下，每日大約消耗多少熱量
              <br />
              那我們就能利用TDEE的指標來控制飲食攝取卡路里的總量。
              <br />
              <br />
              假如你的目標是減脂，你每天攝取飲食的熱量必須低於你的TDEE，也就是熱量赤字；
              <br />
              如果你的目標是增肌，你每天攝取飲食的熱量必須高於你的TDEE，也就是熱量盈餘。
            </p>
          </div>
          <div className="tdee_right">
            <select
              className="form-select"
              aria-label="Default select example"
              id="gender"
              value={this.state.gender}
              onChange={(e) => this.setState({ gender: e.target.value })}
            >
              <option selected>請選擇性別</option>
              <option value="1">男生</option>
              <option value="2">女生</option>
            </select>

            <div className="height">
              <span>身高</span>
              <input
                type="text"
                id="height"
                placeholder="請輸入身高 cm"
                value={this.state.height}
                onChange={(e) => this.setState({ height: e.target.value })}
              />
            </div>
            <div className="weight">
              <span>體重</span>
              <input
                type="text"
                id="weight"
                placeholder="請輸入體重 kg"
                value={this.state.weight}
                onChange={(e) => this.setState({ weight: e.target.value })}
              />
            </div>
            <div className="age">
              <span>幾歲</span>
              <input
                type="text"
                id="age"
                placeholder="請輸入年紀"
                value={this.state.age}
                onChange={(e) => this.setState({ age: e.target.value })}
              />
            </div>

            <select
              className="form-select"
              aria-label="Default select example"
              id="active"
              value={this.state.active}
              onChange={(e) => this.setState({ active: e.target.value })}
            >
              <option selected>運動頻率</option>
              <option value="1">不運動</option>
              <option value="2">一週1~2次</option>
              <option value="3">一週3~5次</option>
              <option value="4">一週6~7次</option>
              <option value="5">天天劇烈運動</option>
            </select>

            <button
              type="button"
              onClick={this.calcTDEE}
              label={this.state.msg}
            >
              計算TDEE
            </button>

            <div id="ans">{this.state.msg}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TDEE;
