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
// 音声データを定義
const sound_correct = new Audio("./Sound/Quiz-Correct.mp3");
const sound_wrong = new Audio("./Sound/Quiz-Wrong.mp3");
const sound_results = new Audio("./Sound/Quiz-Results.mp3");

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
  document.getElementById("question-num").textContent =
    "Question " + (quizIndex + 1) + " / " + quizLength; //【課題１】クイズの問題数を表示　「Question 1 / 3」
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    // ここに命令文
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// 音声再生が完了したときのイベントリスナーを設定します
sound_results.addEventListener("ended", function () {
  // 再生が完了した後にalertを表示します
  alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
});

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    sound_correct.currentTime = 0; // 【課題3】その他オリジナル　音を鳴らす
    sound_correct.play();
    window.alert("正解！");
    score++;
  } else {
    sound_wrong.currentTime = 0;
    sound_wrong.play();
    window.alert("不正解！");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    sound_results.currentTime = 0;
    sound_results.play();
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
