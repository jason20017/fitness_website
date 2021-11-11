import React from "react";
import Qapic from "../image/qatitle.jpg";
const QA = () => {
  return (
    <div className="qa " style={{ minHeight: "100vh" }}>
      <div className="qa_pic">
        <img src={Qapic} alt="" />
        <h1>您的問題 vs 專家回答</h1>
      </div>

      <div className="qa_container container ">
        <div className="qa_parts col-md-6">
          <div className="qa_question">
            <p>Q: 新手想運動，但不太曉得從什麼課程開始，有什麼建議嗎? </p>
          </div>
        </div>
        <div className="qa_parts col-md-6">
          <div className="qa_answer">
            <p>
              A:
              可以先報名體驗課程來參觀體驗。基本上我們的課程除了"進階瑜珈"、"TRX"
              會比較不建議新手報名外， 其他課程都會應學員需求而做調整。
              如果想要有趣一些的課程來維持運動習慣，可以先嘗試看看有氧課程、多功能訓練課程。
            </p>
          </div>
        </div>
      </div>

      <div className="qa_container container ">
        <div className="qa_parts col-md-6">
          <div className="qa_question">
            <p>Q: 如何有效降低體脂肪？ </p>
          </div>
        </div>
        <div className="qa_parts col-md-6">
          <div className="qa_answer">
            <p>
              A: 養成運動習慣
              「能不能堅持繼續運動」是關鍵。如果，今天有一份超有效的減脂課表給你，但是你沒辦法完成，那就沒有效果。
              嘗試不同運動，你可以嘗試讓身體有不同的刺激。舉例來說，可以4~8周參加Body
              pump團體有氧課程，8周後，改成上Body
              combat、其它有氧運動、間歇運動、長時間中低強度有氧運動，這些都是有效減脂的運動。
            </p>
          </div>
        </div>
      </div>

      <div className="qa_container container ">
        <div className="qa_parts col-md-6">
          <div className="qa_question">
            <p>Q: 怎麼瘦大腿或小腹效果最好？ </p>
          </div>
        </div>
        <div className="qa_parts col-md-6">
          <div className="qa_answer">
            <p>
              A:
              事實上沒有所謂專門瘦局部脂肪的運動，真實的狀況大腿、臀部以及腹部脂肪，的確是全身上下最慢能看到鍛鍊線條的部位，因為平常脂肪堆積量比其他部位來的高，建議可以重量訓練刺激全身的肌肉拉高新陳代謝，加上有氧運動，來促進全身的燃脂效率。
            </p>
          </div>
        </div>
      </div>

      <div className="qa_container container ">
        <div className="qa_parts col-md-6">
          <div className="qa_question">
            <p>Q: 健身後容易下背痛怎麼辦 ？ </p>
          </div>
        </div>
        <div className="qa_parts col-md-6">
          <div className="qa_answer">
            <p>
              A:
              健身時，其實不應該出現下背痛狀況，通常會出現的原因有：姿勢不正確、核心太弱、呼吸不正確產生努責現象...等。需要一一去找出原因。
              如果真的出現下背疼痛，首先還是得經過專業的醫師檢查受傷的輕重程度，評估是否繼續運動或休息，若還能繼續運動，則可以先做一些舒緩腰部的動作，然後再慢慢增強核心肌群，以免再次受傷。
            </p>
          </div>
        </div>
      </div>

      <div className="qa_container container ">
        <div className="qa_parts col-md-6">
          <div className="qa_question">
            <p>Q: 怕練太壯，停止健身後肌肉就會垮掉變肥肉?</p>
          </div>
        </div>
        <div className="qa_parts col-md-6">
          <div className="qa_answer">
            <p>
              A:事實上肌肉是不會變肥肉的，肌肉跟脂肪是完全不同的組織，它們是不會互相轉換的唷！肌肉沒練只會萎縮變小並不會變成脂肪，當然停止運動，熱量消耗變少，加上恢復原本的高熱量飲食，自然脂肪增加的機率變高。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
