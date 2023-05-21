// 配列の中にオブジェクトを入れて更に配列を入れる
const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームと言えば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパードンキーコング",
      "星のカービィ",
    ],
    correct: "MOTHER2",
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
    correct: "セシル",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;

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
  } else {
    window.alert("不正解！");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert("終了");
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
