# Mkobo Cypress Tests
 
This repository contains a set of Cypress tests for Mkobo login page.
 
#### Prerequisites
- Node.js (version 16 or higher)
- npm (version 6 or higher)
- Cypress (v13 or higher)
- gitbash
 
#### Installation
 
Clone the repository:
```bash
git clone https://github.com/Holluwaphemmy/mkobo-cypress-automation.git
```
 
Navigate to the project directory:
```bash
mkobo-ui-automation
```
 
Install the dependencies
```bash
npm install
```
 
#### Running the Tests
To run the Cypress tests, use the following command:
```bash
npx cypress run
```
 
The line of code above will run the tests in a headless mode. If you want to run the tests in the Cypress Test Runner, use the following command:
```bash
npx cypress open
```
 
#### Test Structure
The tests are organized as follows:
 
- login_data.json: Contains the test data used in the tests.
- page_objects/Login_PO.js: Defines the Page Object for the Swag Labs website.
- cypress/e2e/login.cy.js: Contains the Cypress test suite for the Swag Labs website.

#### Reporting
The tests use the cypress-mochawesome-reporter plugin to generate a test report. The report will be saved in the cypress/reports directory.
 
#### Continuous Integration
The repository includes a GitHub Actions workflow that runs the Cypress tests on every push to the main branch. The workflow is defined in the `.github/workflows/ci.yml file`.
 
#### Acknowledgements
- Cypress for the awesome end-to-end testing framework.
- cypress-mochawesome-reporter for the test reporting capabilities.