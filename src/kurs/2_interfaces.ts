// -------------INTERFACE---------

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 5,
  },
};

rect2.color = "black";
// rect2.id = "12345";

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ----------------НАСЛЕДОВАНИЕ ИНТЕРФЕЙСОВ----------------

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// НАСЛЕДОВНИЕ ИНТЕРФЕЙСОВ В КЛАССАХ

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date) {
    this.time = date;
  }
}

// ИНТЕРФЕЙС ДЛЯ ОБЪЕКТА, У КОТОРОГО БОЛЬШОЕ ЗНАЧЕНИЕ ДИНАМИЧЕСКИХ КЛЮЧЕЙ

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  borderRadius: "5px",
  fontSize: "16px",
  height: "50px",
};
