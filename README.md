# 09 Node.js Homework: Professional README Generator

## Your Task

Description
The what, why, and how:

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. 

Table of Contents
Installation
Usage
Methodology
License
Installation
Steps required to install project and how to get the development environment running:

To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json:

inquirer that will prompt you for your inputs from the command line
axios to fetch your info from the GitHub API
The application itself can be invoked with node index.js.

Usage
Instructions and examples for use:
readme-generator-tutorial.gif![image](https://user-images.githubusercontent.com/78042504/114657372-8c318000-9cb5-11eb-98a6-599d74f65c4f.png)


Gif demo of README-generator

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.



Methodology
The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: api.js and generateMarkdown.js, respectively, inside the utils folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including arrow functions, const, let, template literals, and async/await to handle the inquirer, axios, and fs.writeFile promises.

License
MIT License

Questions?
Developer Profile Picture

If you utilize this app to generate a README for your project, I'd love to see. Feel free to contact me with examples or any questions via the information below:

GitHub: @nadhiiw

Email: nwoliye@gmail.com
---

?? 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
