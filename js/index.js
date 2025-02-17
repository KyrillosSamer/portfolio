$(document).ready(function () {
  var typed = new Typed('#element', {
    strings: ['<i>Geo spatial Solutions Developer</i>', 'Front End  Developer'],
    typeSpeed: 50,
  });

  function counterUp(element, limit, speed) {
    let counter = 0;
    let x = setInterval(function () {
      counter++;
      $(element).html(counter);
      if (counter == limit) {
        clearInterval(x);
      }
    }, speed)
  }

  function startCounter() {
    counterUp("#projectsNumber", 50, 100);
    counterUp("#clientsNumber", 60, 100);
    counterUp("#codeLinesNumber", 70, 100);
    counterUp("#cofeeNumber", 80, 100);
  }

  let aboutOffsetTop = $("#about").offset().top;
  let workOffsetTop = $("#work").offset().top;
  let counterStarted = false;

  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffsetTop - 50) {
      $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.7)");
      $("#btnUp").fadeIn(500);
    } else {
      $("#main-nav").css("backgroundColor", "transparent");
      $("#btnUp").fadeOut(500);
    }

    if (wScroll > workOffsetTop - 200 && !counterStarted) {
      startCounter();
      counterStarted = true;
    }
  });

  $("#title").fadeIn(4000);

  $("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 3000);
  });

  $("a[href^='#']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);
  });

  $("#sideBarToggle").click(function () {
    let colorBoxWidth = $("#colorsBox").innerWidth();
    if ($("#sideBar").css("left") == "0px") {
      $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 1000);
    } else {
      $("#sideBar").animate({ left: `0px` }, 1000);
    }
  });

  let colorsBox = $(".color-item");
  if (colorsBox.length > 0) {
    for (let i = 0; i < colorsBox.length; i++) {
      let red = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      colorsBox.eq(i).css("backgroundColor", `rgb(${red} , ${green} ,${blue})`);
    }
  }

  colorsBox.click(function () {
    let bgColor = $(this).css("backgroundColor");
    $(".change,p,h2,.title").css("color", bgColor);
  });

  if ($("#loading").length > 0) {
    $("#loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  }
});

function printDate() {
  let fullDate = new Date();
  $("#hour").text(fullDate.getHours());
  $("#minutes").text(fullDate.getMinutes());
  $("#seconds").text(fullDate.getSeconds());
}

setInterval(printDate, 1000);
