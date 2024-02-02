<p align="center">
    <a href="https://appliedimagination.com/" target="_blank">
        <img src="https://images.appliedimagination.com/common/ai-logo-color-light.png" width="400" alt="Laravel Logo">
    </a>
</p>


# Welcome

Please take the time to read through all of the sections below; we want you to do great! :rocket:

Feel free to reach out to your recruiting contact with any questions or concerns.

## Goal

Modify the provided Laravel 10 and Vue 3 app to match [this figma]() as closely as possible while utilizing best-practices to improve the codebase and implement the functional requirements outlined below.

- The provided exercise files are a starting point and they have room for improvement; feel free to modify
- Don't treat the mock as gospel -- This is a test to determine your code quality and ability to implement provided wires. We won't be counting pixels but are looking for a general likeness
- In the exercise you are implementing a local API; however, you should code your submission as if you are using a production API


## Links
- Figma Mock: https://google.com

## Frontend Functional Requirements

- Vue 3 and Typescript
- SCSS and [BEM](https://getbem.com/introduction/)
- A user should be able to search for properties ([See search endpoint details below](#searching-properties-endpoint)) by an address with Geoapify Autocomplete validation (Composable Provided)
  - Search results should return in an endless scroll card list below the search input without having to reload the page
- A user should be able to add and remove a property from their personal wish list ([See wishlist endpoints below](#wishlist-endpoints))
  - Whether a user has wishlist-ed a property or not should display in the list of properties regardless of what search they show up in. 
- A user should be able to view a list of properties that they have wish listed ([See wishlist endpoints below](#wishlist-endpoints))

## API Functional Requirements
- Laravel 10
- JSON API
- MYSQL
- Laravel Migrations

### Searching properties
- Route: `/api/v1/properties`
- Method: GET
- Function: Return a paginated list of properties within 20 miles of the requested search address 

### Wishlist Endpoints

- Route: `/api/v1/wishlists`
- Method: GET
- Function: Return a paginated list of properties the current session has added to their wishlist

- Route: `/api/v1/wishlists`
- Method: POST
- Function: Add a property to the current sessions wishlist

- Route: `/api/v1/wishlists`
- Method: DELETE
- Function: Remove a property from the current sessions wishlist

## Additional Considerations (if applicable)

- Routing and views (e.g. navigating to the wish list from the site navigation)
- The UI should be responsive and look great at different browser viewport sizes
- State management with Pinia
- [Component Tests](#run-component-tests-with-cypress-component-testing)
- [Unit Tests](#run-tests-with-vue) and/or [Functional Tests](#run-tests-with-laravel)


## Evaluation

We will review your code for quality and your ability to talk through it, how you approach the UI and API design, and what tradeoffs you made. Specifically we'll be looking at the following:

- How closely your implementation matches the design along with the other [Functional Requirements](#functional-requirements)
- Code quality, including appropriate componentization and modularity
- TypeScript usage
- Coding (and Vue/Laravel) best-practices
- Code coverage, if applicable

## How to submit the project

You have up to a week to complete the exercise, but we don't expect you to spend more than a few hours on it.

When it's ready, please add the following emails to the source code in a GitHub repository and send us an email letting us know it is finished.
- eric@appliedimagination.com
- devin@appliedimagination.com


## Project Setup

```sh
npm install
composer install
```

### Compile and Hot-Reload for Development

You are welcome to use any development server you desire. We have provided you with a `docker-compose.yml` setup for convience. Provided you have docker installed you simple need to run the following command to get started which will make your app available on `localhost`:

```sh
docker-compose up -d
```

If you choose to run a custom server it must meet the following requirements:
- Node 20
- PHP 8.1

## External Service 

In order to make this project work you will need to signup for a couple free services. You will store the API keys from these services in your `.env` file.

### Geoapify

This service will be utilized for address autocomplete. In the project we provide a composable function to use for creating the address autocomplete input. Use the following steps to get an API key
- Signup for a free account [here](https://myprojects.geoapify.com/register)
- Click the create project button 
- Copy the API key and paste it into the `GEOAPIFY_API_KEY` value in the project `.env`

### Datafiniti

This service will be utilized for pulling property data. In order to complete this project you will need to read through the [API Documentation](https://developer.datafiniti.co/reference/products) and [Guides](https://developer.datafiniti.co/docs/constructing-property-queries#geo-queries) to complete the functional requirements define in [API Functional Requirements](#api-functional-requirements)

##### Signuing up 
- Signup for a free account [here](https://portal.datafiniti.co/sign-up)
- Click setting in the left navigation
- Copy the token and store it in the project `.env`
