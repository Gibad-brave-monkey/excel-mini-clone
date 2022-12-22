import { DOMListener } from "./DOMListener";

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubcribers = [];

    this.prepare();
  }

  // Настраивает наш компонент до init
  prepare() {}

  // возвращает шаблон компонента
  toHTML() {
    return "";
  }

  // Уведомляем слушателей про события event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Подписывается на события event
  $on(event, fn) {
    const unsub = this.emitter.subcribe(event, fn);
    this.unsubcribers.push(unsub);
  }

  // Инициализируем компонент
  // Добавляем dom слушатели
  init() {
    this.initDomListeners();
  }

  // Удаляем компонент и чистим слушатели
  destroy() {
    this.removeDOMListeners();
    this.unsubcribers.forEach((unsub) => unsub());
  }
}
