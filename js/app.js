$(function () {

  // submit event
  $("#search").submit((event) => {
    event.preventDefault()
    console.log('submitting form')
    const input = $("#inputZip").val()
    console.log(input)
    search(input)
  })
// end submit event


// search function
  function search(zipcode) {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const apiKey = "22739fd08a1d57e67d1caccfc1edf8f9"

      // making API request using AJAX
    $.ajax({
      url: url,
      type: "GET",
      data: { APPID: apiKey, q: zipcode }
    })
    .done((response) => {
      // execute this function if request is successful
      console.log(response);
      console.log(response.weather[0].main)
      console.log(response['name'])
updateHtml(response)
      // pass array of gifs as a parameter from API tp displayResults() function
      // function is defined below outside of this event
      // displayResults(response.weather)
    })
    .fail(() => {
      // execute this function if request fails
  console.log(error)
    })
  }
// end search function

// function kelvin(response){
//   let response = parseInt(response)
//   console.log(result)
//   response = ((result-273.15)*1.8)+32
//   console.log(result)
// }

function kToF(input) {
  var k = parseInt(input);
  return (k - 273.15) * 9 / 5 + 32;
}

// update html
function updateHtml(response) {
// let mainTemp = parseInt(response.main.temp)
// mainTemp = ((mainTemp-273.15)*1.8)+32
// console.log(mainTemp)
let mainTemp = kToF(response.main.temp)
let highTemp = Math.round(kToF(response.main.temp_max))
let lowTemp = Math.round(kToF(response.main.temp_min))

  $('#currentTemp').html(`your current city is: ${response['name']}<br>
  the temperature is: ${Math.round(mainTemp)}°F<br>
  forecast: ${response.weather[0].main}<br>
  high: ${highTemp}°F<br>
  low: ${lowTemp}°F<br> <br>
have a nice day :)`)
}


// end update html

})
