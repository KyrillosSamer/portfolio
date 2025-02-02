$(document).ready(function () {


  // تهيئة مكتبة Typed لإضافة نصوص متحركة
  var typed = new Typed('#element', {
    strings: ['<i>web Design</i>', 'web Development'],
    typeSpeed: 50,  // سرعة الكتابة
  });



  // دالة لتغيير الرقم تدريجياً (Counter Up)
  function counterUp(element, limit, speed) {
    let counter = 0;
    let x = setInterval(function () {
      counter++;  // زيادة العدّاد
      $(element).html(counter);  
      if (counter == limit) {  
        clearInterval(x);  
      }
    }, speed) 
  }

  // دالة لبدء العدّاد عند التمرير إلى قسم العمل
  function startCounter() {
    counterUp("#projectsNumber", 50, 100);
    counterUp("#clientsNumber", 60, 100);
    counterUp("#codeLinesNumber", 70, 100);
    counterUp("#cofeeNumber", 80, 100);
  }

  // تحديد مواقع الأقسام في الصفحة
  let aboutOffsetTop = $("#about").offset().top;
  let workOffsetTop = $("#work").offset().top;

  // استماع لحدث التمرير
  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();  

    // تغيير لون خلفية الناف بار عند التمرير إلى قسم "About"
    if (wScroll > aboutOffsetTop - 50) {
      $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.7)");
      $("#btnUp").fadeIn(500);  
    } else {
      $("#main-nav").css("backgroundColor", "transparent");  
      $("#btnUp").fadeOut(500);  
    }

    // بدء العدّادات عند التمرير إلى قسم "Work"
    if (wScroll > workOffsetTop - 200) {
      startCounter();
    }
  });

  // إظهار العنوان تدريجياً عند تحميل الصفحة
  $("#title").fadeIn(4000);

  // وظيفة الزر للعودة إلى الأعلى عند النقر عليه
  $("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 3000);  
  });

  // التنقل بين الأقسام عند النقر على روابط التنقل
  $("a[href^='#']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top; 
    $("html,body").animate({ scrollTop: sectionOffset }, 1000);  
  });

  // تفعيل قائمة الشريط الجانبي عند النقر
  $("#sideBarToggle").click(function () {
    let colorBoxWidth = $("#colorsBox").innerWidth();  

    // إذا كان الشريط الجانبي مفتوحاً، قم بإغلاقه
    if ($("#sideBar").css("left") == "0px") {
      $("#sideBar").animate({ left: `-${colorBoxWidth}` }, 1000);
    } else {
      $("#sideBar").animate({ left: `0px` }, 1000); 
    }
  });

  // إضافة ألوان عشوائية لكل عنصر في قائمة الألوان
  let colorsBox = $(".color-item");
  for (let i = 0; i < colorsBox.length; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    // تعيين اللون العشوائي لكل عنصر في قائمة الألوان
    colorsBox.eq(i).css("backgroundColor", `rgb(${red} , ${green} ,${blue})`);
  }

  // تغيير لون النص عند النقر على أحد الألوان
  colorsBox.click(function () {
    let bgColor = $(this).css("backgroundColor");
    $(".change,p,h2,.title").css("color", bgColor);  
  });

  // إخفاء شاشة التحميل بعد تحميل الصفحة
  $("#loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");  
  });
});

// دالة لعرض الوقت الحالي (الساعات، الدقائق، والثواني)
function printDate() {
  let fullDate = new Date();  

  // تحديث النصوص بكل وحدة من الوقت
  $("#hour").text(fullDate.getHours());
  $("#minutes").text(fullDate.getMinutes());
  $("#seconds").text(fullDate.getSeconds());
}

// تحديث الوقت كل ثانية
setInterval(printDate, 1000);
