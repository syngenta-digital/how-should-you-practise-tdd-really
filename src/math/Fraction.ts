export default class Fraction {
  private someNumber: number;

  constructor(someNumber: number) {
    this.someNumber = someNumber;
  }

  addFraction(that: Fraction) {
    return new Fraction(this.someNumber + that.someNumber);
  }

  get intValue() {
      return this.someNumber
  }
}

