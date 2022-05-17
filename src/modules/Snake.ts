// 定义蛇的类
class Snake {
  // 蛇的容器
  element: HTMLElement;
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    this.head.style.left = value + 'px';
  }

  set Y(value) {
    this.head.style.top = value + 'px';
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

}

export default Snake;