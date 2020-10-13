$(document).ready(function() {
    
    //for current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss: a"));

    $(".saveBtn")on("click", function () {
        //when the save button is clicked (this) will be logged
        console.log(this);
        //what is logged will now be displayed in the description
        var text = $(this).siblings(".description").val();
        //telling the page which text area to find based on the id associated with it
        var time = $(this).parent().attr("id");
        //create local storage to be pulled up
        localStorage.setItem(time, text);
    })

    //when page refreshes, it needs to ask for info from local storage, here is a loop that will do so
    
})