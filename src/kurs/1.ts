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

// наследование интерфейса

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
