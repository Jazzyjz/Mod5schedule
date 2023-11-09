
$(function () {

  var currentTime = dayjs().hour();

  
//color code
  var timeBlockList = $('.time-block')

  for (var i = 0; i<timeBlockList.length;i++){
    // console.log(timeBlockList[i])
    if ($(timeBlockList[i]).attr('id') < currentTime){
      $(timeBlockList[i]).addClass('past')
    }
    if ($(timeBlockList[i]).attr('id') == currentTime){
      $(timeBlockList[i]).addClass('present')
  }
    if ($(timeBlockList[i]).attr('id') > currentTime){
    $(timeBlockList[i]).addClass('future')
  }
  }
  
  //save user input

  $('.saveBtn').on('click', function (){
    var hour = $(this).siblings('.hour').text();
    var descriptionBlock = $(this).siblings('.description').val();

      localStorage.setItem(hour,descriptionBlock);
  });

  // refresh page 
  var userRefresh = function () {
    $('.hour').each(function () {
        if ($(this).text() !== null) {
            $(this).siblings('.description').val(localStorage.getItem($(this).text()));
        }
    });
};
// refresh page every 30 minutes
setInterval(function () {
  $('.hour').each(function () {
      reviewTask();
  });
}, 1800000);
  

//display time

  
  fullDate = dayjs().format('dddd'+' '+'MMMM'+' '+ 'D')
  var timeDisplayEl = $('#currentDay');
  timeDisplayEl.text( fullDate);

  userRefresh();
  reviewTask()


});
