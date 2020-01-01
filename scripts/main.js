let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/*首先用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中。这与 CSS 选择器的用法非常相像：若要对某个元素进行操作，首先得选择它。
之后，把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 。*/;
// 这是一条注释。
/*
这里的所有内容
都是注释。
*/
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
  multiply(20, 20);
  multiply(0.5, 3);