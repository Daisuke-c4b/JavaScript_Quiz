// 配列の中にオブジェクトを入れて更に配列を入れる
const quiz = [
  {
    question: "What is always in front of you but can’t be seen？",
    answers: [
      "Mirror（鏡）",
      "Future（未来）",
      "Sunglasses（サングラス）",
      "Hat（帽子）",
    ],
    correct: "Future（未来）",
    translation: "「いつもあなたの前にあるけど、見えないものは何ですか？」",
    description:
      "未来は常に私たちの「前方」にありますが、具体的には見ることができません。",
  },
  {
    question: "What goes up but never comes down？",
    answers: [
      "Rocket（ロケット）",
      "Age（年齢）",
      "Balloon（バルーン）",
      "Bird（鳥）",
    ],
    correct: "Age（年齢）",
    translation: "「上がるけど決して下がらないものは何ですか？」",
    description:
      "年齢は常に上がりますが、一度上がった年齢が下がることはありません。",
  },
  {
    question: "What is full of holes but still holds water?",
    answers: [
      "Watermelon（スイカ）",
      "Sponge（スポンジ）",
      "Tree（木）",
      "Fishbowl（金魚鉢）",
    ],
    correct: "Sponge（スポンジ）",
    translation: "「穴だらけなのに、水を保持するものは何でしょうか？」",
    description:
      "スポンジは多くの小さな穴がありますが、それらの穴は水を吸収し保持することができます。",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// HTMLのオブジェクトを取得する場合「$」を入れる
const $button = document.getElementsByTagName("button");
// ボタンの数を定義
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    // ここに命令文
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    window.alert(
      "和訳" +
        quiz[quizIndex].translation +
        "\n" +
        "解説：" +
        quiz[quizIndex].description
    );
    score++;
  } else {
    window.alert("不正解！");
    window.alert(
      "和訳" +
        quiz[quizIndex].translation +
        "\n" +
        "答え：" +
        quiz[quizIndex].correct +
        "\n" +
        "解説：" +
        quiz[quizIndex].description
    );
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

// ボタンをクリックしたら正誤判定 correctとtextContentを比較する
// e:イベントのオブジェクト
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
