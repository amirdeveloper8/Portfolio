import React, { Component } from "react";

const info = [
  {
    questionText: "پایتخت کشور ایتالیا کدام است ؟",
    answerOptions: [
      { answerText: "ونیز", isCorrect: false },
      { answerText: "رم", isCorrect: true },
      { answerText: "میلان", isCorrect: false },
      { answerText: "ناپولی", isCorrect: false },
    ],
  },

  {
    questionText: "پایتخت کشور ژاپن کدام است ؟",
    answerOptions: [
      { answerText: "هاندا", isCorrect: false },
      { answerText: "ستو", isCorrect: false },
      { answerText: "کاسوگای", isCorrect: false },
      { answerText: "توکیو", isCorrect: true },
    ],
  },

  {
    questionText: "پایتخت کشور ایتالیا آلمان است ؟",
    answerOptions: [
      { answerText: "برلین", isCorrect: true },
      { answerText: "مونیخ", isCorrect: false },
      { answerText: "هامبورگ", isCorrect: false },
      { answerText: "آلمان", isCorrect: false },
    ],
  },

  {
    questionText: "پایتخت کشور اسپانیا کدام است ؟",
    answerOptions: [
      { answerText: "ویگو", isCorrect: false },
      { answerText: "مادرید", isCorrect: true },
      { answerText: "بارسلونا", isCorrect: false },
      { answerText: "والنسیا", isCorrect: false },
    ],
  },
];
class QuizQuestions extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  goToNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    const item = info[this.state.index];

    return (
      <div className="quiz-app" id="quiz-quest">
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center col-12">
            <div className="d-flex flex-column align-items-center justify-content-center col-12">
              <div>
                <h3>
                  <span className="firstquest">
                    {" "}
                    سوال {this.state.index + 1}{" "}
                  </span>
                  <span className="secondquest">از {info.length}</span>
                </h3>
              </div>
              <div className="orgquest">
                <h5>{item.questionText}</h5>
              </div>
            </div>
            <div className="col-12 d-flex flex-column m-5">
              {item.answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  onClick={this.goToNext}
                  style={{ fontWeight: 700 }}
                  className="btn btn-dark mx-auto my-2 col-lg-6 col-sm-8"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizQuestions;
