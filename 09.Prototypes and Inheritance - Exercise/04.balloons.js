function solve() {
    class Balloon {
      constructor(color, gasWeight) {
        (this.color = color), (this.gasWeight = gasWeight);
      }
    }
  
    class PartyBalloon extends Balloon {
      constructor(color, gasWeight, ribbonColor, ribbonLength) {
        super(color, gasWeight);
        this.ribbon = { color: ribbonColor, length: ribbonLength };
      }
    }
  
    class BirthdayBalloon extends PartyBalloon {
      constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
        super(color, gasWeight, ribbonColor, ribbonLength);
        this.text = text;
      }
    }
  
    return { Balloon, PartyBalloon, BirthdayBalloon };
  }
  
  let classes = solution();
  let testBalloon = new classes.Balloon("yellow", 20.5);
  let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
  let ribbon = testPartyBalloon.ribbon;
  let bdayBalloon = new classes.BirthdayBalloon('green', 15, 'blue', 15, 'Happy Birthday');
  console.log(testBalloon);
  console.log(testPartyBalloon);
  console.log(ribbon);
  console.log(bdayBalloon);