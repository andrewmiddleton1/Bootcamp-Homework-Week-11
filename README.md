
# README for Software engineering team generator command line application
          
## Description 
              
My application allows a manager to develop a team roster, including all employees on the engineering team. The app prompts the user for information about their team, starting with the team manager and then the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This application also has three separate tests to ensure the integrity of the code and the application.  When the user has completed building the team, the application creates an HTML file that displays a formatted team roster based on the information provided by the user.
        
## Table of Contents
* Title
* Description
* Installation
* Useage
* License
* Contributing
* Tests
* Questions

    
## Installation
To install this application, the user runs the “app.js” file in Node. Running the app file will prompt the user for a series of questions relating to the team. Using a template literal, the user input is then assigned to elements and then written to a new html file, which uses already-created templated for individual employees and joins them together on the main html page. The html file is created in the “Output” directory,  and when opened in the browser, will show as a polished web page. 

## Usage 
The application requires two Node packages in the first instance: inquirer and fs . Those packages are used together to prompt the user for information which is then pushed into a “team” array, using the classes of each of the employee types (created in each of their own js files (employee, manager, engineer, intern)).   The fs package is used to write the file. Step by step instructions can be seen within the attached Screencastify video. https://youtu.be/mCQI96Sp3J0

## Credits
This was a solo project, however the project relied heavily on Node JS and the packages mentioned above. Additionally, I sought advice from the Ask BCS instructors a number of times and would like to thank Renato for his assistance during our Sunday night tutoring sessions.

## License
MIT

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
Should others wish to contribute to this application, I thank them for their interest and request that they use the standards from at the Contributor Covenant. 
Note: the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard

## Tests
There are three tests, which test the four classes – employee, manager, engineer and intern. The tests are located in the develop/test folder.

## Questions
Please direct questions to andrew.middleton1, https://github.com/andrewmiddleton1
