exports.getDaysRemaining = function() {
  // Should flip at midnight mountain time (MDT)
  var weddingDay = new Date(Date.UTC(2017, 8, 3, 6));
  var today = new Date().getTime();

  return Math.ceil((weddingDay - today)/(24*60*60*1000));
};
