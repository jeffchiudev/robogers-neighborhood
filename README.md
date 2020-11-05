# _Mr Roboger's Neighborhood_

#### _Counts up to a user inputed value (number) and charmingly replaces certain numbers, version 1.0 30.oct.2020_

#### By _**Jeff Chiu**_

## Description

_Welcome to another wonderful day in Mr. Roboger's Neighborhood!  This site takes a user inputed number and Mr. Roboger will count up to that number.  As he does that, certain integers will be replaced by Mr. Roboger's cute 'beeps' and 'boops' and of course, his classic catchphrase 'won't you be my neighbor?'._

## Site link

_[Click here](https://jeffchiudev.github.io/robogers-neighborhood/) to visit the site._

## Setup/Installation Requirements

### Software Requirements
_1. Internet browser of choice. Chrome & Firefox are suggested_

_2. A code editor like VSCode or Atom to view or edit the codebase._

### Open by downloading:
_1. Download [this](https://github.com/jeffchiudev/robogers-neighborhood) repository onto your computer by clicking the 'clone or download button'._

_2. Double click index.html to open it in your web browser._

### Open via Bash/GitBash:
_1. Open terminal window and navigate to/create desired repository location._

_2. Clone this repository onto your computer by using command:_
`git clone https://github.com/jeffchiudev/robogers-neighborhood.git`

_3. In the directory where you've cloned the repository, open in Visual Studio Code with `code .` or preferred text editor._

## Test Specs

Describe: beepBoop()

Test: "It returns an array of 0 if the number 0 is input"
Expect(beepBoop(0)).toEqual(0);

Test: "It returns an array of numbers if any number greater than 0 is input"
Expect(beepBoop(5)).toEqual(1,2,3,4,5);

Test: "It returns a 'Beep!' if a value contains a 1"
Expect(beepBoop(1)).toEqual("Beep!");

Test: "It returns a 'Boop' if a value contains a 2"
Expect(beepBoop(2)).toEqual("Boop");

Test: "It returns 'Won't you be my neighbor?' if a value contains a 3"
Expect(beepBoop(3)).toEqual("Won't you be my neighbor?");

Test: "It returns accurate logic for digits with 2+ digits"
Expect(beepBoop(32 || 13 || 23)).toEqual("Won't you be my neighbor?");


## Known Bugs

_Currently optimized for desktop browsing.  Smart device integration will be added soon._

## Support and contact details

_If there are any issues, I can be contacted at jwchiu82@gmail.com_

## Technologies Used

_* jQuery_

_* Javascript_

### License

_This extension is licensed under the MIT license._

Copyright (c) 2020 **_Jeffrey W. Chiu_** 