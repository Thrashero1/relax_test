# relax_test

## Requirements
The following programs are required for the installation and running of these tests.

Node JS: Version 12 or higher. This can be installed from [node](https://nodejs.org/en/)
This should also install the npm package handler.

Yarn: This can be installed via npm using the command
```bash
npm install -g yarn
```

Once that is done cd into to the folder where the project is cloned or unzipped and run 
```bash
yarn
```
This will install all of the required dependencies to run this project.

When complete run the following cli command to execute the test:
### Using the cypress GUI
```bash
yarn cy:open
```
To use the cypress gui tool, once the window opens following the initial setup, select E2E testing then select the browser and start E2E testing 

### Run the cypress test headlessly
```bash
yarn cy:run
```

### Run the postman tests with cli report
```bash
yarn postman
```

### Run the postman tests with html report
```bash
yarn postman_report
```

## Cyprss Report

The report, while using the GUI method, is essentially the  results shown within the GUI itself.

The report is generated automatically when running the tests headlessly

This report is saved within the folder {path to cloned repo}/cypress/reports/. This is overwritten after each run

## Postman report

There are 2 forms of report being used here, 

- The mocha one which is generated within the cli itself
- The html one which is saved within the postman folder and delivers a very detailed review of what was run. The package used is also highly customisable too 
