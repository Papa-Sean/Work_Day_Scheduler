$(document).ready(function() {
    
    //for current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
        //when the save button is clicked (this) will be logged
        //create local storage to be pulled up
        //telling the page which text area to find based on the id associated with it
        //what is logged will now be displayed in the description

        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
    })

    //when page refreshes, it needs to ask for info from local storage, here is a loop that will do so
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
            //assinging css classes for past if the hour has passed removing future/present
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            //assingning css class if it is in the current hour block
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            //assigning css for future hour blocks
            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
        })
    }
    hourTracker();
})