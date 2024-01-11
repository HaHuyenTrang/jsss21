//bai1
let currentYear = 2024;

let answer = prompt("Bạn sinh năm bao nhiêu?");

if (!isNaN(answer)) {
  let birthYear = parseInt(answer);
  let age = currentYear - birthYear;
  console.log("Tuổi của bạn là: " + age);
} else {
  console.log("Giá trị không hợp lệ.");
}


//3 cách để chuyển đổi 1 chuỗi thành 1 số
//1. parseInt()
//2. dùng dấu +
//3. dùng đối tượng Number()



//bai2
let number = parseInt(prompt("nhập số bất kì:"));
if (number % 2 ==0 && number > 0){
    console.log(+ number +"là số chẵn");
}else if(number !== 0 && number > 0 ){
    console.log(+number +"là số lẻ");
}else{
    console.log(+number +"không hợp lệ");
}


//bai3
let day = parseInt(prompt("nhập 1 ngày trong tuần:"));
if (day == 2){
    console.log(+ day +":Monday");
}else if(day == 3){
    console.log(+day +":tuesday");
}else if(day == 4){
    console.log(+day +":wednesday");
}else if(day == 5){
    console.log(+day +":thursday");
}else if(day == 6){
    console.log(+day +":friday")
}else if(day == 7){
    console.log(+day +":sartuday");
}else if(day == 8){
    console.log(+day +":sunday");
}


//bai4
const numbe = parseInt(prompt("Nhập vào một số: "));

const result = numbe < 0 ? "Số âm" : "Số dương";

console.log("Kết quả:", result);




//bai5
let month = parseInt(prompt("nhập 1 tháng trong năm:"));
if (month == 1){
    console.log(+month  +":có 31 ngày");
}else if(month == 2){
    console.log(+month  +":năm nhuận có 29 ngày, năm thường còn 28 ngày");
}else if(month == 3){
    console.log(+month +":có 31 ngày");
}else if(month == 4){
    console.log(+month +":có 30 ngày");
}else if(month == 5){
    console.log(+month +":có 31 ngày");
}else if(month == 6){
    console.log(+month +":có 30 ngày")
}else if(month == 7){
    console.log(+month +":có 31 ngày");
}else if(month == 8){
    console.log(+month +":có 31 ngày");
}else if(month == 9){
    console.log(+month +":có 30 ngày");
}else if(month == 10){
    console.log(+month +":có 31 ngày")
}else if(month == 11){
    console.log(+month +":có 30 ngày");
}else if(month == 12){
    console.log(+month +":có 31 ngày");
}else{
    console.log(+month +"không hợp lệ")
}


//bai6
let mark = parseFloat(prompt("nhập điểm toán :"));
let mark1 = parseFloat(prompt("nhập điểm văn :"));
let mark2 = parseFloat(prompt("nhập điểm anh :"));

let medium = (mark + mark1 +mark2)/ 3;

console.log(+"điểm trung bình:" +medium);
if( medium >= 8 && medium <= 10){
    console.log("xếp loại GIỎI" +medium);
}else if(medium >= 6.5 && medium <= 7.9){
    console.log("xếp loại KHÁ" +medium);
}else if(medium >= 5 && medium <= 6.4){
    console.log("xếp loại TRUNG BÌNH" +medium);
}else if(medium < 5){
    console.log("xếp loại YẾU" +medium);
}else{
    console.log("KHÔNG XẾP LOẠI");
}



//bai7
let num = parseInt(prompt("nhập a :"));
let numb = parseInt(prompt("nhập b :"));
let numc = parseInt(prompt("nhập c :"));

if(num >numb && num >numc){
    console.log("số lớn nhất là:" +num);
}else if(numb > num && numb > numc){
    console.log("số lớn nhất là:" +numb);
}else if(numc > num && numc > numb){
    console.log("số lớn nhất là:" +numc);
}else{
    console.log("không hợp lệ");
}


//bai8
// Yêu cầu người dùng nhập vào cân nặng (kg)
var weight = prompt("Nhập cân: (kg)");

// Yêu cầu người dùng nhập vào chiều cao (m)
var height = prompt("Nhập chiều cao của bạn: (m)");

// Chuyển đổi cân nặng và chiều cao thành kiểu số
weight = parseInt(weight);
height = parseInt(height);

// Tính toán chỉ số BMI
var bmi = weight / (height * height);

// Hiển thị kết quả phân loại theo chỉ số BMI
if (bmi < 18.5) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " Bạn bị thiếu cân.");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " Bạn có cân nặng bình thường.");
} else if (bmi >= 25 && bmi < 30) {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " Bạn bị thừa cân.");
} else {
  console.log("BMI của bạn là " + bmi.toFixed(2) + " Bạn bị béo phì.");
}





//bai9
// Yêu cầu người dùng nhập vào 3 số a, b và c
var aa = prompt("Nhập số a:");
var bb = prompt("Nhập số b:");
var cc = prompt("Nhập số c:");

// Chuyển đổi a, b và c thành kiểu số
aa = parseInt(aa);
bb = parseInt(bb);
cc = parseInt(cc);

// Tạo một mảng chứa các số a, b và c
var numbers = [aa, bb, cc];

// Sắp xếp mảng theo thứ tự tăng dần
numbers.sort(function (x, y) {
  return x - y;
});

// In ra màn hình console theo thứ tự tăng dần
console.log("Các số theo thứ tự tăng dần là: " + numbers.join(", "));



// //bai10
// if (condition) {
//     // Thực hiện khi condition là true
//   } else {
//     // Thực hiện khi condition là false
//   }
//   ```
//   Giải thích Câu lệnh if/else kiểm tra một điều kiện và thực hiện một khối mã nếu điều kiện đúng (true), và một khối mã khác nếu điều kiện sai (false).
//    Ví dụ
  
//   javascript
//   var age = 18;
  
//   if (age >= 18) {
//     console.log("Bạn đã đủ tuổi để lái xe.");
//   } else {
//     console.log("Bạn chưa đủ tuổi để lái xe.");
//   }
//   


// switch (expression) {
//     case value1:
//       // Thực hiện khi expression có giá trị bằng value1
//       break;
//     case value2:
//       // Thực hiện khi expression có giá trị bằng value2
//       break;
//     default:
      // Thực hiện khi expression không bằng bất kỳ giá trị nào trong các case trên
//   }
  
//  Giải thích Câu lệnh switch/case được sử dụng để kiểm tra một biểu thức và thực hiện một khối mã tương ứng với giá trị của biểu thức đó.
//   Ví dụ
  
//   javascript
//   var day = "Monday";
//   var message;
  
//   switch (day) {
//     case "Monday":
//       message = "Hôm nay là thứ Hai.";
//       break;
//     case "Tuesday":
//       message = "Hôm nay là thứ Ba.";
//       break;
//     case "Wednesday":
//       message = "Hôm nay là thứ Tư.";
//       break;
//     default:
//       message = "Hôm nay không phải là thứ Hai, Ba, hay Tư.";
//   }
  
//   console.log(message);

  
  