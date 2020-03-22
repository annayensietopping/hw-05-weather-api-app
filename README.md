

# Build a Weather App

Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

***

## Instructions

#### Get a free API Key for the OpenWeather API

For this lab you'll be using the Open Weather Data API. In order to use it, please follow these steps:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!

2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!

(22739fd08a1d57e67d1caccfc1edf8f9)

3. Go to [OpenWeatherMap](http://openweathermap.org/api) and scroll down, you'll see a section that says "API Documentation."

4. Open Insomnia to check out the data you're working with and to verify that your api key works. Make a GET request to the following URL in Insomnia, adding your API key to the end.

5. Read the follow part of the OpenWeather docs to learn how your API requests should be structured (**Important!**): [https://openweathermap.org/appid#use](https://openweathermap.org/appid#use)

#### ⚡️ Plan your implementation approach using pseudocode
If you find the assignment too challenging to complete, you can bet the first place to check is your pseudocode!

---

### Requirements

#### Requirement #1: Your application's UI should contain the following:
- [ ] An **input field** for a user to enter a city name **(U.S. cities only)**
- [ ] A **submit button**
- [ ] A placeholder element (such as a `<div>`) used to display the current temperature

### Requirement #2: Core Functionality
- [ ] When the submit button is clicked:
    - [ ] A **GET** request should be made to OpenWeather API (base url: `https://api.openweathermap.org/data/2.5/weather`) to fetch the current weather for the city name entered by the user
    - **IMPORTANT**: use `https` and NOT `http`
    - [ ] The following data should be rendered to the page:
        - [ ] City name
        - [ ] Current temperature (displayed in Fahrenheit)
        - [ ] Weather description
        - [ ] Min temp
        - [ ] Max temp
- [ ] The text for the displayed Current Temperature should turn blue if the current temperature is under 40 degrees, and red if the current temperature is above 85 degrees.

### Bonus Requirement (Optional): Bonus functionality - add Zip Code support

- [ ] Update your application logic to support users being able to enter either a city name **or a zip code** into the text field

- [ ] If users enter in a zip code, the app should make an API request to the OpenWeather API and fetch the current weather associated with the zip code

- [ ] The data displayed in the UI should be the same as specified in **Requirement #2**

- [ ] After making the changes, the application should support the ability to search for the current weather for **either** a city name (U.S. cities only) **OR** a zip code

**Tip**: Read the documentation to determine how your API request should be structured in order to fetch the current weather associated with a zip code

---

### Tips

* Work smarter not harder, reference past work to get started (see the Giphy API code along from lesson 09)

* Read the "current weather" portion of the Open Weather API documentation (found here: [https://openweathermap.org/current](https://openweathermap.org/current)) to determine how you should structure your API request to fetch the current weather.

The documentation also contains code examples that helps you figure out how to use the API
