/**
 * const let 等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "var変数は上書きが可能";
// console.log(val1);

// // var変数は再宣言が可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可
// let val2 = "let変数再宣言";
// console.log(val2);

// const val3 = "const変数";

// // const変数は上書き不可
// val3 = "const変数を上書き"

// //　const変数は再宣言不可
// const val3 = "const変数を再宣言";

// // objectを定義
// const val4 = {
//   name: "はぢめ",
//   age: 50
// };

// // constで定義したオブジェクトや配列はプロパティは変更が可能
// val4.name = "hazime";
// val4.adress = "じうしょ";
// console.log(val4);

// const val5 = ["dog", "cat"];

// val5[0] = "alpaca";
// val5.push("tiger");

// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "はぢめ";
// const age = 50;

// const message1 = "私の名前は" + name + "です、年齢は" + age + "です。";
// console.log(message1);

// // テンプレートで表示
// const message2 = `私の名前は${name}です、年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// 上記をアロー関数を使って
// const func2 = (str) => {
//   return str;
// };

// 引数が1つなら（）を省略できる
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です"));

// 処理が1つなら｛｝を省略できる
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(21, 12));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "はぢめ",
//   age: 50
// };

// const message1 = `私の名前は${myProfile.name}です、年齢は${myProfile.age}です。`;
// console.log(message1);

// 一度定義しておけば一度に代入できる
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です、年齢は${age}です。`;
// console.log(message2);

// 配列でも可能
const myProfile = ["はぢめ", 50];

// const message3 = `私の名前は${myProfile[0]}です、年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `私の名前は${name}です、年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);

// // 初期値が入っていない場合は↑で設定したデフォルト値を使う
// sayHello();

/**
 * スプレット構文
 */
// const arr1 = [3, 6];

// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

// 配列のコピー結合
// const arr4 = [11, 22];
// const arr5 = [33, 44];

// const arr6 = [...arr4];
// // console.log(arr6);

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 配列をコピーすると参照元の配列も影響を受けて数値が変わってしまう
// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

/**
 * map や filter をつかった 配列の処理
 */
const nameArr = ["レオナルド", "田中", "はぢめ"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// nameArr.map((name, index) => console.log(`${index}番目は${nameArr[index]}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "はぢめ") {
//     return `${name}ぶー`;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件 ? 条件がtrueの処理 : 条件がfalseの処理
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const numString = 1300;

// const formatedNum =
//   typeof numString === "number"
//     ? numString.toLocaleString()
//     : "数値を入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 ? "容量オーバーです" : "許容範囲ないです";
// };
// console.log(checkSum(100, 10));

// 論理演算子の本当の意味

// || は左側がfalseのとき右側を返す
// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// ＆＆ は左側がtrueのとき右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
