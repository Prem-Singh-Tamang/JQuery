$(document).ready(function(){
    $(".hide").click(function(){
      $("header").hide();
 });
    $(".show").click(function(){
        $("header").show();
  
  });
});


// slide
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel ").slideDown(5000);
    });
    // stop
$("#stop").click(function(){
    $("#panel").stop();
});
  });


//   toggle
$(document).ready(function(){
    $(".tfade").click(function(){
      $("#toggle").fadeToggle();
    });
});

// Animation
$(document).ready(function(){
    $(".ani").click(function(){
        $(".phallus").animate({left:'290px'});
    });  
});

// hide para
$(document).ready(function(){
    $(".para").click(function(){
        $("#one").hide("s;ow", function(){
            alert("The para is hidden now");
        });
    });
});


// chaining
$(document).ready(function(){
    $("#jquery").mouseenter(function(){
        $("#css").slideUp(2000).slideDown(2000);

    });
});

// get
$(document).ready(function(){
    $("#idvalue").click(function(){
        alert("value:" +
        $("#test").val());
    });

});

// set
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("hello everybody!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b> Kuzu Zangpo la! </b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Kota Phorab!!");
    });
});

// add
function afterText() {
    var txt1 = "<b>I </b>";           
    var txt2 = $("<i></i>").text("love ");  
    var txt3 = document.createElement("b");   
    txt3.innerHTML = "Sunset!";
    $("img").after(txt1, txt2, txt3);    
  }

//   remove
$(document).ready(function(){
    $("#rem").click(function(){
      $("#remove").remove();
    });
  });

//   css class
$(document).ready(function(){
    $("#cssp").click(function(){
      $("#h1f, #h2f, #long, #thu").toggleClass("blue");
    });
  });


//   dimension
$(document).ready(function(){
    $("#cool").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#dimension").width() + "</br>";
      txt += "Height of div: " + $("#dimension").height();
      $("#dimension").html(txt);
    });
  });