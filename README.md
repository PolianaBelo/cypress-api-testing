# Cypress API Testing

Test project to validade the endpoints Create program, Create Brand and Create location from FIDEL API.

## Project Structure

### Fixturesest 

* AuthData: contains input data needed to authentication requests
* brandData: contains input data needed to brand endpoint requests
* locationData: contains input data needed to location endpoint requests

### Integration

* Contains the folders that group the test suites for each endpoint

### Support

* Contains the implementation of the request required for the test suites
* The list of the implemented requests is available in commands.js

## Getting Started

The instructions bellow will help you to get the project up and running on your machine. It was developed
using Visual Studio Code.

### Prerequisites

What you need to install on your computer to run the project:

```
npm install
```

```
npm install -D cypress
```

### Running

#### Cypress App
To run the tests using Cypress App access the project root folder and run the following command:

```
npx cypress open
```

