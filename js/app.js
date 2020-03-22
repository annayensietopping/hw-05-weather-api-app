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

//
function kToF(input) {
  var k = parseInt(input);
  return (k - 273.15) * 9 / 5 + 32;
}
//

//
function turnBlue(input) {
  if(input < 40) {
  $('#mainTempColor').css('color','blue')
} else if(input > 85) {
  $('#mainTempColor').css('color','red')
} else {
  console.log('not under 40 or over 85')
}
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
  the temperature is:<span id='mainTempColor'> ${Math.round(mainTemp)}°F </span> <br>
  forecast: ${response.weather[0].main}<br>
  high: ${highTemp}°F<br>
  low: ${lowTemp}°F<br> <br>
have a nice day :)`)

turnBlue(mainTemp)
searchGif(response.weather[0].main)
}
// end update html

// Giphy

function searchGif(query) {
    const giphyUrl = "https://api.giphy.com/v1/gifs/search"
    const apiKey = "HRuknNTOGG0i1qVagcgOpKaxQz2OTAop"

      // making API request using AJAX
    $.ajax({
      url: giphyUrl,
      type: "GET",
      data: { api_key: apiKey, q: query }
    })
    .done((response) => {
      // execute this function if request is successful
      console.log(response.data)

      // pass array of gifs as a parameter from API tp displayResults() function
      // function is defined below outside of this event
      displayResults(response.data)
    })
    .fail(() => {
      // execute this function if request fails
      alert('error occurred')
    })
  }
// end search function

// display results function
function displayResults(response) {
      $('#weatherGif').html(`<img src="${response[0].images.original.url}"/>`)
  }
//

})
