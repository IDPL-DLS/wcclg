$(document).ready(function () {

    setInterval(ShowDMYTime, 1000);

    $('#btninitiate').click(function () {
        $("#waitspininitiate").css({ 'display': 'block' });
    });

    $('#btndownload').click(function () {
        $("#waitspininitiate").css({ 'display': 'block' });
    });

    $('#btnFetchGeo').click(function () {
        $("#waitspin").css({ 'display': 'block' });
    });

    $('#DwnConfirmTable').find('tr').click(function (e) {
        var row = $(this).find('td:First').text();
        $('#hiddendistcode').text(row);
    });

    $('.badge-success').on('click', function (e) {
        //$('#showprimaryinfo').css({ 'display': 'block' });
    });

    $('.badge-primary').on('click', function (e) {
        $('#showproductbatchinfo').css({ 'display': 'block' });
    });

    $('.badge-secondary').on('click', function (e) {
        $('#showschemeinfo').css({ 'display': 'block' });
    });
});


$(function () {
    $(".dropdown-menu").on('click', 'a', function () {
        $(this).parents('.dropdown').find('button').text($(this).text());
    });
});


function ShowDMYTime() {
    var date = new Date();
    var dayname = date.toLocaleString("default", { weekday: "short" });
    var monthname = date.toLocaleString("default", { month: "short" });
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    var strtime = dayname.toString() + ", " + monthname.toString() + ", " + date.getDate() + suffix(date.getDate()) + ", " + (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + " " + ampm;
    $('#Time').text(strtime);
}

function suffix(mdate) {
    if ((mdate > 4 && mdate < 21) || (mdate > 23 && mdate < 31))
        return "th";
    else if (mdate == 3 || mdate == 23)
        return "rd";
    else if (mdate == 2 || mdate == 22)
        return "nd";
    else if (mdate == 1 || mdate == 21 || mdate == 31)
        return "st";
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

window.onscroll = function () { hfun() };
var header = document.getElementById("imgh");
var footer = document.getElementById("imgf");
var stky = header.offsetTop;
var stky1 = footer.offsetTop;
function hfun() {
    if (window.pageYOffset || window.pageXOffset > stky) {
        header.classList.add("stky");
    } else {
        header.classList.remove("stky");
    }
    if (window.pageYOffset > stky1) {
        footer.classList.add("stky");
    } else {
        footer.classList.remove("stky");
    }
}