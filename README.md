# _Robot Text Game_

#### _A website where you can go on an adventure with your new robot!, 2/7/19_

#### By _**Aurora Shido-Wagenet, Nathan Nielson, Nayomi Morita, Slater Smith**_

![](/img/gameSS1.jpg) ![](/img/gameSS2.jpg)

## Description

_This application provides the user with the oppurtunity to go on a thrilling adventure!_

## Specs

Specification | Input | Output
------------- | ----- | ------
Will gather input of radio choice from user | radio(a): checked | value = a
Will store input value in player object | value = a | Player{agility = 12}
Will store multiple inputs in player object | value = s | Player{agility = 12, strength = 15}
Will display character stats to player | click(character sheet) | Character: Agility: 12 Strength: 15
Will move through story changing questions | click(next) | hides current page shows another
Will move through story in correct order | page 1: click(next) | page 2
Displays different endings based on stats | Player{agility = 12, strength = 15} | Strength Ending
Displays character picture based on choice by player | choice: character 1 | display character 1 for game
Plays music when player wants | click(play) | play background music
Changes music depending on ending | ending 2 | music track 2

## Setup/Installation Requirements

* _Use your command terminal (gitbash if you're using a windows machine) to clone the latest commit from Github, using the url provided_
* _Open with a text editor such as Atom to view the code_
* _Then, open the file labeled "index.html" with your preferred web browser, such as Chrome, to view the actual page_

## Known Bugs

_there are currently no known bugs._

## Support and contact details
_If you encounter any bugs or issues not documented during your experience, please feel free to contact me at my email: nathans-email@email.com_

## Technologies used

_This application was created using HTML, CSS, Bootstrap, Javascript and Jquery_
_Music royalty-free from BenSound and Purple-Planet.com_

### License

Copyright (c) 2019 **_ Aurora Shido-Wagenet, Nathan Nielson, Nayomi Morita, Slater Smith, Epicodus_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
