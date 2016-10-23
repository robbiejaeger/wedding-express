exports.getDaysRemaining = function() {
  var weddingDay = new Date(2017, 8, 3, 17);
  var today = new Date();

  return Math.ceil((weddingDay - today)/(24*60*60*1000));
};
