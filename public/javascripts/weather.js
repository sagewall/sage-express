$.getJSON('//api.wunderground.com/api/1f8c5d8b0f435e87/forecast/q/CO/Golden.json', function (data) {
  $('.wu-today').html(data.forecast.txt_forecast.forecastday[0].fcttext);
  $('.wu-tomorrow').html(data.forecast.txt_forecast.forecastday[1].fcttext);
});

darkSkyUrl = '//api.darksky.net/forecast/76e613916d6f9b5d1ee8447f2aa73bc5/39.7555,-105.2211';

$.ajax({
  dataType: "jsonp",
  url: darkSkyUrl,
  success: displayForecastIO
});

function displayForecastIO(data) {
  $('.ds-currently-summary').html(data.currently.summary);
  $('.ds-minutely-summary').html(data.minutely.summary);
  $('.ds-hourly-summary').html(data.hourly.summary);
  $('.ds-daily-summary').html(data.daily.summary);
}