class RenderCounter {
  constructor() {
    this.counter = 0;
    setInterval(() => {
      console.log('ttt this.counter', this.counter);
    }, 5000);
  }
  increase() {
    this.counter++;
  }
}

export const countRender = new RenderCounter();
