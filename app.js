const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];
const correct = "ニンテンドーDS";

document.getElementById("js-question").textContent = question;

// HTMLのオブジェクトを取得する場合「$」を入れる
const $button = document.getElementsByTagName("button");

// 定数の文字列をHTMLに反映させる
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定 correctとtextContentを比較する
$button[0].addEventListener("click", () => {
  if (correct === $button[0].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[1].addEventListener("click", () => {
  if (correct === $button[1].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[2].addEventListener("click", () => {
  if (correct === $button[2].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
$button[3].addEventListener("click", () => {
  if (correct === $button[3].textContent) {
    window.alert("正解！");
  } else {
    window.alert("不正解！");
  }
});
