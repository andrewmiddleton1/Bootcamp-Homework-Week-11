const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser() {
    return inquirer.prompt([
        {
            type: "checkbox",
            message: "Please choose what type of entry you wish to make",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finish Entries and Render HTML Doc"
            ]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter new name",
            when: (answers) => {
                if (answers.role == "Finish Entries and Render HTML Doc") {
                    return false
                }
                else return true
            }


        },
        {
            type: "input",
            name: "id",
            message: "Please enter your ID",
            when: (answers) => {
                if (answers.role == "Finish Entries and Render HTML Doc") {
                    return false
                }
                else return true
            }
        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email",
            when: (answers) => {
                if (answers.role == "Finish Entries and Render HTML Doc") {
                    return false

                }
                else return true
            }
        },

        {
            type: "input",
            name: "officenumber",
            message: "Please enter your Office Number",
            when: (answers) => {
                if (answers.role == "Manager") {
                    return true
                }
                else
                    return false

            }

        },

        {
            type: "input",
            name: "githubuser",
            message: "Please enter your Github Username",
            when: (answers) => {
                if (answers.role == "Engineer") {
                    return true
                }
                else
                    return false

            }


        },

        {
            type: "input",
            name: "school",
            message: "Please enter your School",
            when: (answers) => {
                if (answers.role == "Intern") {
                    return true
                }
                else
                    return false

            }

        }


    ]).then((answers) => {
        if (answers.role == "Manager") {
            const teammember = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
            team.push(teammember)
            promptUser();
        }
        else if (answers.role == "Engineer") {
            const teammember = new Engineer(answers.name, answers.id, answers.email, answers.githubuser);
            team.push(teammember)
            promptUser();
        }
        else if (answers.role == "Intern") {
            const teammember = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(teammember)
            promptUser();
        }
        else {
            const html = render(team);
            console.log(html);
            fs.writeFileSync("./output/team.html", html);
        }
    })




}

promptUser();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


//render();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
