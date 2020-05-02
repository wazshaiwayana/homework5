

$(document).ready(function(){

 $(".saveBtn").on("click", function(){
    var value=$(this).siblings(".description").val();
    var time=$(this).parent().attr("id");
    localStorage.setItem(time, value);

    });

// display todays date and time on top 
  var time= moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDay").append(time);
     
 // create a function to update hour colors to past or present 


function colors(){
  var currentHour = moment().hours();
  console.log(currentHour);
  $(".time-block").each(function(){
   var hours= $(this).attr("id").split("-")[1];
   console.log(hours);
    if (hours < currentHour) {
      $(this).addClass("past");
      console.log("reached inside");
    }
    else if ( hours == currentHour){
      $(this).removeClass("past");
      $(this).addClass("present");
      console.log("reached inside of else if");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  });
}

colors();


// after, grab all items from local storage and set them to show in the front end
 //localStorage.getItem(value, time);

 $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  for (var i = 0; i < 18; i ++){
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }

//  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
//  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
//  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
//  $("#hour-13 .description").val(localStorage.getItem("hour-9"))
//  $("#hour-14.description").val(localStorage.getItem("hour-9"))
//  $("#hour-15.description").val(localStorage.getItem("hour-9"))
//  $("#hour-16 .description").val(localStorage.getItem("hour-9"))
//  $("#hour-17 .description").val(localStorage.getItem("hour-9"))













});