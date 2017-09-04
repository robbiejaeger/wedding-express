exports.getDaysRemaining = function() {
  // Should flip at midnight mountain time (MDT)
  var weddingDay = new Date(Date.UTC(2017, 8, 3, 6));
  var today = new Date().getTime();

  var exactDaysRemaining = (weddingDay - today)/(24*60*60*1000);
  var roundedDaysRemaining = Math.ceil(exactDaysRemaining);

  return roundedDaysRemaining;
};
