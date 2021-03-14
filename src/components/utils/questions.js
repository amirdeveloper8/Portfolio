const questions = [
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

export function getQuest() {
  return questions;
}
