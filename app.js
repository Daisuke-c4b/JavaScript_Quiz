const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];
const correct = "ニンテンドーDS";

// HTMLのオブジェクトを取得する場合「$」を入れる
const $button = document.getElementsByTagName("button");
// ボタンの数を定義
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    // ここに命令文
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
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
