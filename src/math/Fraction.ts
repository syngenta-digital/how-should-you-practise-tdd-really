
export default class Fraction {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number = 1){
      this.numerator = numerator;
      this.denominator = denominator;
  }

  addFraction(that: Fraction) {
    return new Fraction(this.numerator + that.numerator, this.denominator);
  }

  get getNumerator() {
    return this.numerator;
  }
  get getDenominator() {
    return this.denominator;
  }
}

