// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var buttonEL = $('.saveBtn')

  function renderLastRegistered() {
    var nineHour = localStorage.getItem("nineEL");
    var tenHour = localStorage.getItem("tenEL");
    var elevenHour = localStorage.getItem("elevenEL");
    var twelveHour = localStorage.getItem("twelveEL");
    var thirteenHour = localStorage.getItem("thirteenEL");
    var fourteenHour = localStorage.getItem("fourteenEL");
    var sixteenHour = localStorage.getItem("sixteenEL");
    var seventeenHour = localStorage.getItem("seventeenEL");

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    $('#Calendar9 .description').val(localStorage.getItem("nineEL"))
    
    console.log(nineHour)


  }

  $('#Calendar9 .description').val(localStorage.getItem("nineEL"))


  function handleCalanderSubmit() {

    var nineAM = $('#Calendar9').val()
    localStorage.setItem("nineEL", nineAM);

    var tenAM = $('#Calendar10').val()
    localStorage.setItem("tenEL", tenAM);

    var elevenAM = $('#Calendar11').val()
    localStorage.setItem("elevenEL", elevenAM);

    var twelvePM = $('#Calendar12').val()
    localStorage.setItem("twelveEL", twelvePM);

    var thirteenPM = $('#Calendar13').val()
    localStorage.setItem("thirteenEL", thirteenPM);

    var fourteenPM = $('#Calendar14').val()
    localStorage.setItem("fourteenEL", fourteenPM);

    var fifteenPM = $('#Calendar15').val()
    localStorage.setItem("fifteenEL", fifteenPM);

    var sixteenPM = $('#Calendar16').val()
    localStorage.setItem("sixteenEL", sixteenPM);

    var seventeenPM = $('#Calendar17').val()
    localStorage.setItem("seventeenEL", seventeenPM);


  }
  renderLastRegistered();

  buttonEL.on('click', handleCalanderSubmit);


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function HourChange() {
    var dt = new Date()
    var currentHour = dt.getHours();


    $(".time-block").each(function () {
      var specifiedTime = parseInt($(this).attr("id").split("-")[1])


      if (specifiedTime < currentHour) {
        $(this).addClass('past');
      } else if (specifiedTime === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present');
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future');
      }
    });

  }
  HourChange();


  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#date').text(today.format('MMM D, YYYY'));
});
