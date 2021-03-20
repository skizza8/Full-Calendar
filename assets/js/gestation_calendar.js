/* Dynamically change active tab menu option
$(document).ready(function() {
	$(".mr-auto .nav-item").on("click", function(){
	   $(".mr-auto .nav-item").find(".active").removeClass("active");
	   $(this).addClass("active");
	});

});


$(document).ready(function() {
    $( ".mr-auto .nav-item" ).bind( "click", function(event) {
       // event.preventDefault();
        var clickedItem = $( this );
        $( ".mr-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});
*/

/*
Full calendar custom JS code obtained from
https://github.com/niinpatel/calendarHTML-Javascript/blob/master/scripts.js
*/

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendarWithFarrow_2(currentMonth, currentYear);

function date_today() {
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();

    console.log('Trying to display the current date....');
    console.log(`With month ${currentMonth}`);
    console.log(`With year ${currentYear}`);

    showCalendarWithFarrow_2(currentMonth, currentYear);
    console.log();
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendarWithFarrow_2(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendarWithFarrow_2(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendarWithFarrow_2(currentMonth, currentYear);
}

function addDays(year, month, day, days) {
    month = month + 1;
    //console.log(`year:${year} , month:${month} , day:${day} `);

    let tdate = new Date(`${year},${month},${day}`);

    // add days
    let ndate = tdate.setDate(tdate.getDate() + days);

    return formatDate(ndate);
}

function subtractDays(year, month, day, days) {
    month = month + 1;
    //console.log(`year:${year} , month:${month} , day:${day} `);
    let tdate = new Date(`${year},${month},${day}`);

    // add days
    let ndate = tdate.setDate(tdate.getDate() - days);

    return formatDate(ndate);

}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    //year = d.getFullYear().toString().substr(-2);

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("gestation-calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

// A custom show calendar method with the farrow dates included.

function showCalendarWithFarrow(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("gestation-calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        // second row to containing the farrow dates
        let row2 = document.createElement("tr");


        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("th");
                cell.colSpan = 2;
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);

                //catering for the farrow dates
                let cell2 = document.createElement("td");
                let cellText2 = document.createTextNode("");
                cell2.appendChild(cellText2);
                row2.appendChild(cell2);

                let cell3 = document.createElement("td");
                let cellText3 = document.createTextNode("");
                cell3.appendChild(cellText3);
                row2.appendChild(cell3);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("th");
                cell.colSpan = 2;
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);

                //catering for the farrow dates
                let cell2 = document.createElement("td");
                cell2.classList.add("text-success");
                let cellText2 = document.createTextNode(subtractDays(year, month, date, 114));
                //console.log(cellText2);
                cell2.appendChild(cellText2);
                row2.appendChild(cell2);

                let cell3 = document.createElement("td");
                cell3.classList.add("text-danger");
                let cellText3 = document.createTextNode(addDays(year, month, date, 114));
                //console.log(cellText3);
                cell3.appendChild(cellText3);
                row2.appendChild(cell3);

                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
        tbl.appendChild(row2);

    }

}

//-- A custom show calendar method with farrow dates version 2

function showCalendarWithFarrow_2(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("gestation-calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");
        row.classList.add("days");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                cell.classList.add("day");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                cell.classList.add("day");
                let date_div = document.createElement("div");
                date_div.classList.add("date");
                let cellText = document.createTextNode(date);

                //-- adding the content for the farrow dates
                let gestation_dates_div = document.createElement("div");
                gestation_dates_div.classList.add("event");
                cell.appendChild(gestation_dates_div);

                let breeding_date_div = document.createElement("div");
                breeding_date_div.classList.add("event-desc");
                breeding_date_div.classList.add("text-danger");
                let breeding_date_cellText = document.createTextNode(subtractDays(year, month, date, 114));
                breeding_date_div.appendChild(breeding_date_cellText);
                gestation_dates_div.appendChild(breeding_date_div);

                let farrowing_date_div = document.createElement("div");
                farrowing_date_div.classList.add("event-desc");
                farrowing_date_div.classList.add("text-success");
                let farrowing_date_cellText = document.createTextNode(addDays(year, month, date, 114));
                farrowing_date_div.appendChild(farrowing_date_cellText);
                gestation_dates_div.appendChild(farrowing_date_div);

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today");
                    //cell.style.opacity = 0.8;
                } // color today's date
                date_div.appendChild(cellText);
                cell.appendChild(date_div);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}