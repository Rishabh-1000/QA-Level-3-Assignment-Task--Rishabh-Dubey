
 
# [Pet-Shop](https://pet-shop.buckhill.com.hr/) Automated Tests.

This repository contains automated tests of a pseudo eCommerce pet shop web application using Cypress and JavaScript.

## Table of Contents

- [Pet-Shop Automated Tests.](#pet-shop-automated-tests)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the tests](#running-the-tests)
    - [Locally](#locally)
  - [Folder Structure](#folder-structure)
  - [Bugs logged during testing](#bugs-logged-during-testing)
  - [Test Cases automated](#test-cases-automated)

## Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed (Node.js >= 12)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey.git
   ```

2. Navigate to the project folder:

   ```bash
   cd QA-Level-3-Assignment-Task--Rishabh-Dubey
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

## Configuration

The following environment variables are required to run the tests:

- ADMIN_EMAIL = 'admin@buckhill.co.uk'
- ADMIN_PASSWORD = 'admin'

> 💬 **Note**
>
> These variable have already been configure in the [.env](.env) file.

## Running the tests

### Locally

To run all the tests locally in headless mode, run the following command:

```bash
npm run cy:run
```

To run all the tests locally in headed mode, run the following command:

```bash
npm run cy:open
```

_This commands will launch the Cypress Test Runner and execute the test suite._


## Folder Structure

- `bugs/` - Contains bugs found during testing
- `cypress/` - Contains Cypress test files
- `e2e/` - Test scripts
- `support/` - Custom commands and reusable utilities
- `commands/` - Cypress custom commands; these are reusable functions that can be called from within the test scripts.
- `selectors/` - Contains reusable selectors that can be called from within the test scripts.
- `.env` - Environment configuration
- `cypress.config.js` - Cypress configuration
- `package.json` - Project dependencies and scripts
- `README.md` - Project documentation (you are here)

## Bugs logged during testing

- [Bug-1: Upon refreshing the page, both admin and regular logged-in users are logged out](bugs/qa-1.md)
- [Bug-2: None of the main navigation bar items navigate to the correct page.](bugs/qa-2.md)
- [Bug-3: Error when Admin create a new product](bugs/qa-3.md)
- [Bug-4: Admins not notified and the customer create form remaining open upon the creation of a customer](bugs/qa-4.md)
- [Bug-5: User unable to place order](bugs/qa-5.md)
- [Bug-6: The items in the cart vanish after refreshing the page.](bugs/qa-6.md)
- [Bug-7: When clicking ‘Forgot Password,’ the user is not directed to the password reset page.](bugs/qa-7.md)

## Test Cases automated

- [TC-001: User Sign-Up Process.](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/17)
- [TC-002: Reset Password for user](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/18)
- [TC-003: Add and Remove Items from Cart](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/19)
- [TC-004: Search products](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/20)
- [TC-005: Update Customer Details](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/21)
- [TC-006: Admin Login Logout.](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/22)
- [TC-007: Delete Product](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/23)

