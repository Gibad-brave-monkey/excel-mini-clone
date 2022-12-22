export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // Уведомляем слушателей, если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  // Подписываемся на уведомления
  subcribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);

    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      );
    };
  }
}

// EXAMPLE
// const emitter = new Emitter();
// const unsubcribe = emitter.subcribe("ilyas", (data) => console.log(data));

// emitter.emit("ilyas", 24);

// setTimeout(() => {
//   unsubcribe();
// }, 3000);

// setTimeout(() => {
//   emitter.emit("ilyas", "after 4 seconds");
// }, 4000);
