# [Play Simon](https://paraiccooney.github.io/simon_game/)


This project is a browser friendly version of the classic 1970/1980's game "Simon".  It is designed to be engaging visually with the user & reactive to the device on which it is being viewed.
Logic is provided by way of Javascript & jQuery while elements are displayed visually using HTML, CSS, & Bootstrap.

## UX User stories;

The targeted user-type is those seeking a nostalgic gaming experience or those who enjoy memory games/challenges.  To achieve this the website was designed to represent the original version of the Simon game.  As the purpose of the site is solely the interaction with the game itself it was designed with minimal additional features which may distract from user experience.  This is in contrast to other online versions of the game which require multiple clicks prior to playing & have additional panels on screen during gameplay.

## WIREFRAMES;

A wireframe for this project has been included at Simon_Game/assets/wireframes.  This wireframe was used when implimenting the design of the project.

## CURRENT FEATURES;


**Feature 1 - New Game button**
The New Game button allows users to reset the current score html element & reset the two score arrays (computer & player).  It then allows the user to run the computerGo function which starts the game by pushing a random value (between 1-4) to the newly clearer computerScore array.  This also results in a flash of the appropriately coloured button by adding & removing a class which alters the background colour of the button.
**Feature 2 - Difficulty drop down button**
The difficulty drop down button allows the user to alter the speed at which the computer iterates through each value in it's score array (the interation is carried out in the computerGo function).
The difficulty can be updated mid-game & even mid-iteration as the difficulty value is pulled during each iteration of the loop in computerGo.
**Feature 3 - The Simon buttons**
The four coloured buttons (Simon buttons) allow the user to interact with the computer.  When clicked;
1- A flash is added & removed by adding a css class to the selected button which changes it's background colour.  The class is then removed after a delay using a setTimeout.
2- The button's value (unique to each button) is pushed to the player's score array (playerScore).
3- The buttons value is compared to the corresponding value in the computer's score array (computerScore).  If not the gameOver function is run & the user can no longer interact with the Simon buttons (as gameOver disables the buttons).
4- The current score element's html is updated to reflect the number of buttons pressed.
5- If the current score is greater than the current score the high score element's html is updated.
6- If the player has pressed the same number of buttons as the computer (ie the length of their arrays are equal) computerGo is run which will render the Simon buttons temporarily unusable for the user (as computerGo disables the buttons).

## Future Implementation Features

 **Hint Button**
 One further potential feature which I may impliment at a later date is the use of a hint button.  This would be implimented by;
1- Defining a hint variable with a numeric value.  This would be the number of hints available which I would suggest to be 3.
2- Creation of a html button which, when clicked runs a hint function (hint()).
3- The hint function would use the currentGo variable and apply it to the computerScore array (computerScore[currentGo]).  This would be used to return the value of the button which the player has to press next.  This returned value would be passed through a number of if/if else statements & a flash returned based on the value returned (as occurs in the computerGo function).  The value in the hint variable (step 1) would then be decreased by one to lower the number of remaining hints available.
In summary the hint button would allow the user to see which button they have to press next.

## Technologies Utilised
**Jasmine** - this project utilises Jasmine to assist with testing (further outlined below)
**Bootstrap** - Bootstrap's flexbox use was adopted to arrange for a more productive outlay build.  It was also used to encorporate a mobile first design approach.
**jQuery** - was used to simplify DOM manipulation.

## TESTING

Both manual & automated testing was used to ensure this project fullfilled it's aims as set out in the above User Experience section.
**Automated**
The Jasmine library was incorporated to automated a number of tests.  The below were tested for to ensure that the code was successfully working;
- 1- Test that the loop is working and returns a value of "green flash" when ifTest(1) is run.  1 being the value of the green button.  The matcher .toBe was used here.
- 2- Test that an alert is triggered once the gameOver function is called.  For this a spyOn was used & the matcher .toHaveBeenCalledWith.
- 3- Test that the resetGame function empties both the player & computer score arrays.  For this the .toBeTruthy matcher was used & multiple arguments passed.
- 4 - Test that the compScore function successfully generates a random value between 0 & 5.  The .toBe matcher was used here & also array indexation as the compScore function was called multiple times.
- 5- Test that the disable function successfully adds the value of true to the disabled property to a HTML element.

Automated testing can be found at the following gitHub pages link;
https://paraiccooney.github.io/simon_game/testing.html
The source code for testing can also be viewed in the following files;
testing.html - located at Simon_Game/testing.html
calc.js & jasmine-testing.js - both located at Simon_Game/assets/testing/...

**Manual**
A number of manual tests were carried out on this project to ensure it is working as intended;

- New Game
After a number of computerGo functions were complete I viewed the computerScore & playerScore arrays by entering them into Chrome's developer tools console to ensure that they were populated.  I then clicked the new game button & again viewed the arrays.  The playerScore array was empty while the computerScore was now populated with a single number as intended.
During this test I also verified that the correct flash was applied (ie. that as the value in the array was 2 the yellow button had it's flash class added & removed).  I then reiterated this test until the computerArray returned different values & verified that the correct flash had been applied.
- Responsive Design
I used a mobile first approach while developing.  As a result there are a number of bootstrap columns which change their properties are larger sizes.  I manually tested these breakpoints in the browser & also used Chrome Developer tools "Toogle Device Toolbar" option to view the site as it would display on different mobiles & tablets & verified the display was as intended.
- Difficulty Selector
Upon load I verified that the medium class was selected as default for the difficulty dropdown selector.
I continued to progress through the game until I had a sufficient computerScore array for the computer to cycle through.  I then selected higher & lower difficulties from the dropdown & observed the speed through the iterations responding accordingly.  I also concretely verified that the difficulty variable had be updated to the dropdowns value by viewing the variable in Chrome's developer tools.
- Simon Buttons
I included manual testing to ensure that the Simon buttons (the four coloured buttons on screen) were working effectively.  When the button is clicked it carries out six tasks;

**1- Flash when clicked** - the button clicked should flash by adding & removing the class (color+"Flash").  I verified this by observing the appropriate flash & also by observing the addition & removal of the class in Chrome developer tools.
**2- Push button value to playerScore array.**  To test that this was occuring I included in my code that on-click of the button that the playerScore array would be printed.  I verified that the appropriate value was pushed to the array (ie. if green was pressed a value of 1 was pushed to the array).
**3- Check to see if the button pressed matches that pressed by the computer.**  To test this I logged the computerScore array to the console & ensured that the incorrect button was pressed.  I also included a console.log to run to verify that the incorrect button click had trigger the code in the {} of the if statement.
**4&5- I verified that both the current score & high score were updated** (where applicable) by cycling through the game & verifying that the correct figure (number of buttons clicked by the player in the current game) was being display by the html element on screen.  I also verified that the high score was updated only if the currentGo was greater than the high score.
**6- Run the computerGo function should the user have completed selecting all buttons displayed by the computer in correct order.**  I verified this through observation & by also including a console.log("computerGo has been called") at the begining of the computerGo function to verify in the console that this is the case.



## DEPLOYMENT
I deployed this project using GitHub pages.  To do this I entered my GitHub repository (https://github.com/paraiccooney/simon_game) & selected settings at the top-right of the screen.  Once in the settings page I scrolled down to the GitHub Pages section where I launched the master branch to github pages.  No additional requirements or configurations were required to launch the project effectively on GitHub pages.
The project can be run by following the enclosed link;
https://paraiccooney.github.io/simon_game/

## CREDITS

I obtained the linear gradient code from the following page;
http://lea.verou.me/2011/03/beveled-corners-negative-border-radius-with-css3-gradients/
I tweeked this code to overcome the fact that CSS does not allow for negative values to be entered for border-radius & used this to round my four coloured buttons.
I obtained the audio files by downloading a video of the simon game & converting into mp3.  I then used the enclosed cutting tool (https://mp3cut.net/) to isolate each button sound & save it to it's own mp3 file.

## Acknowledgements
I would like to thank the Code Institute community on Slack for their assistance with this project.  I would also like to thank the contributors to Stack Overflow for their assistance by answering questions similar to those I held at separate points throughout the project.
