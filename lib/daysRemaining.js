exports.getDaysRemaining = function() {
  // Should flip at midnight mountain time (MDT)
  var weddingDay = new Date(Date.UTC(2017, 8, 3, 6));
  var today = new Date().getTime();

  var exactDaysRemaining = (weddingDay - today)/(24*60*60*1000);
  var roundedDaysRemaining = Math.ceil(exactDaysRemaining);

  if (exactDaysRemaining > 0.75) {
    return `${roundedDaysRemaining} days to go!`;
  } else if (exactDaysRemaining < 0.75 && exactDaysRemaining > -0.5) {
    return 'Today is the day!';
  } else {
    return 'Thank you for celebrating with us!';
  }
};
