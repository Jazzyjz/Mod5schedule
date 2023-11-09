
$(function () {

  var currentTime = dayjs().hour();

  

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
  

  $('.saveBtn').on('click', function (){
    var hour = $(this).siblings('.hour').text();
    var descriptionBlock = $(this).siblings('.description').val();

      localStorage.setItem(hour,descriptionBlock);
  });


  



  
  fullDate = dayjs().format('dddd'+' '+'MMMM'+' '+ 'D')
  var timeDisplayEl = $('#currentDay');
  timeDisplayEl.text( fullDate);


});
