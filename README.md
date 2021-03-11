# cypressProject

A cypress project to test my rubiks cube webiste.
I couldn't create a GitHub action that runs the Cypress tests on a push.

## Cypress Test

The cypress test is located at /cypress/integration/rubiksCubeTest.js

## Running The Test

Download Nodejs if you don't have it already. You can download here: https://nodejs.org/en/

Download nodemon using command line/powershell. Download the code first(folders and files), then
open the command line on the project folder. Type ```npm install nodemon --save-dev```.

Type ```npm start``` after nodemon is installed. 

Open another command line on the project folder and type ```npx cypress open```. Cypress will be open and
click on rubiksCubeTest.js to start the tests.