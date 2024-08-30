class Singleton {
  private value: Number;
  private static singletonObject: Singleton;

  private constructor() {
      this.value = 10;
  }

  static getObject(): Singleton {
      if (Singleton.singletonObject === undefined) {
          Singleton.singletonObject = new Singleton();
      }
      return Singleton.singletonObject;
  }

  updateValue(newValue: Number): void {
      this.value = newValue;
  }

  getValue(): Number {
      return this.value;
  }
}

// const singleton = new Singleton();

const singleton = Singleton.getObject();

console.log(singleton.getValue());

singleton.updateValue(15);

console.log(singleton.getValue());