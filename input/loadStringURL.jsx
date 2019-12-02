// @include ~/Documents/basiljs/basil.js;

function draw() {
  println("-- load an URL into a string --");
  var url = "http://basiljs.ch";
  println("URL is valid: " + isURL(url));
  println(loadString(url));

  println("-- load lines of an text file into an array --");
  var loadedArray = loadStrings("https://raw.githubusercontent.com/basiljs/basil.js/master/scripts/tutorials/advanced/08_bar_chart_from_csv_data/data/LA_Pools-Pools_per_Hood.csv");
  println("Array length: " + loadedArray.length);
  println(loadedArray[0]);
  println(loadedArray[1]);

  println("-- load JSON data --");
  var urlWeatherBasel = "http://api.openweathermap.org/data/2.5/weather?q=Basel,CH&units=metric&mode=json&APPID=61f2e9b2e7a07508bdfd51cf91e132d9";
  var weatherData = JSON.decode(loadString(urlWeatherBasel));
  println("Wind speed: " + weatherData.wind.speed);
  inspect(weatherData, {maxLevel: 3});
}
