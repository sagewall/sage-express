$.getJSON('//api.wunderground.com/api/1f8c5d8b0f435e87/forecast/q/CO/Golden.json', function (data) {
  $('.wu-today').html(data.forecast.txt_forecast.forecastday[0].fcttext);
  $('.wu-tomorrow').html(data.forecast.txt_forecast.forecastday[1].fcttext);
});

url = '//api.forecast.io/forecast/76e613916d6f9b5d1ee8447f2aa73bc5/39.7555,-105.2211';

$.ajax({
  dataType: "jsonp",
  url: url,
  success: displayForecastIO
});

function displayForecastIO(data) {
  console.log(data);
  $('.io-currently-summary').html(data.currently.summary);
  $('.io-minutely-summary').html(data.minutely.summary);
  $('.io-hourly-summary').html(data.hourly.summary);
  $('.io-daily-summary').html(data.daily.summary);
}