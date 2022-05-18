import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

// 游戏控制器，控制其它所有类
class GameControl {
  // 定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 存储蛇的移动方向
  direction: string = 'ArrowRight';

  // 游戏是否结束
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 1);
    this.init();
  }

  // 游戏初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this)); // 不bind的话，this会变成document

    this.run();
  }

  /**
   * 方向键的字符名：
   * ArrowUP ie中Up
   * ArrowDown ie中Down
   * ArrowLeft ie中Left
   * ArrowRight ie中Right
   */
  keydownHandler(event:KeyboardEvent) {
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      this.direction = event.key;
    }
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch(this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch(e:any) {
      alert('Game Over!');
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到食物
  checkEat(X:number, Y:number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.snake.addBody();
      this.food.change();
      this.scorePanel.addScore();
    }
  }
}

export default GameControl;