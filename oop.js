// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  creator(name) {
    this.name = name;
    this.color = "silver";
    this.saying = "Yay!"
  }

  say(newSaying) {
    this.saying = newSaying;
  }
}

var unicorn1 = new Unicorn("Trixie");
//console.log(unicorn1);


unicorn1.say("*~*" + " Neigh! " + "*~*");
console.log(unicorn1.saying);

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  creator(name) {
    this.name = name;
    this.pet = bat;
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }
}

var vamp1 = new Vampire("Alucard");
//console.log(vamp1);


vamp1.drink();
console.log(vamp1.thirsty);
//I cannot get the code to print out the class onto the terminal.

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

  class Dragon {
    creator(name, rider, color) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.isHungry = true;
    }


    eat() {
      for (var i = 0; i <= 4; i++) {
        if (i >= 4) {
          this.isHungry = false;
        }
      }
    }
  }


  var dragon1 = new Dragon("Spike", "Knight", "red");
  console.log(dragon1);

  dragon1.eat();
  console.log(dragon1.isHungry);
//I cannot get the code to print out the class onto the terminal.

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  creator(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = hasRing;

    if (this.isAdult >= 33) {
      this.isAdult = true;
    }
  }

  if(this.isOld >= 100) {
  this.isOld = true;
}
  }

if (this.name = "Frodo") {
  this.has.Ring = true;
}
  }

celebrateBirthday(newAge) {
  this.age = newAge + 1;
}
}


var hobbit1 = new Hobbit("Frodo", "shy", true);
console.log(hobbit1);

hobbit1.celebrateBirthday();
console.log(hobbit1);

//Could not get values of class to appear.
//Could not get actual age to appear.
//Could not get other stated values of age, old, and hasRing properties to appear
