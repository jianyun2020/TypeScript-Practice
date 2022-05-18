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
    if (this.X === value) {
      return;
    }
    if (value < 0 || value > 290) {
      // 蛇撞墙
      throw new Error('蛇撞墙了');
    }
    this.head.style.left = value + 'px';
  }

  set Y(value) {
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      // 蛇撞墙
      throw new Error('蛇撞墙了');
    }
    this.head.style.top = value + 'px';
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

}

export default Snake;