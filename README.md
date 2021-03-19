# Cypress API Testing

Test project to validade the endpoints Create program, Create Brand and Create location from FIDEL API (https://reference.fidel.uk/reference). This project was developed using Visual Studio Code.

## Project Structure

### Fixtures

* authData: contains input data needed to authentication requests.
* brandData: contains input data needed to brand endpoint requests.
* locationData: contains input data needed to location endpoint requests.
* programData: contains input data needed to program endpoint requests.
* generalData: contains input data common to multiple requests.

### Integration

* Holds the test files that are grouped by each endpoint.

### Support

* Holds the implementation of the requests required for the test suites.

## Getting Started

The instructions bellow will help you to get the project up and running on your machine.

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

