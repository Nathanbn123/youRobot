$(function(){
  var playerCharStats = new charStats
  var character;
  var music;
  $("#characterForm").submit(function(event){
    event.preventDefault();
    var newChar = $("#characterSelect").val();
    if (newChar == "guy"){
      character = "guy";
    } else if (newChar == "girl"){
      character = "girl";
    };
    document.getElementById('character').src = 'img/' + character + '-neutral.png';
    document.getElementById('robot').src = 'img/robot-green.png';
    $("#refreshButton").show();
    $("body").css('background-image', 'url(img/classroom.jpeg)');
    $("body").css('background-color', 'black');
    $("body").css('color', 'white');
    $("button").css('color', 'white');
    $("#startScreen").hide();
    $("#scenario1").fadeIn(500).delay(500);
  });
  $("#characterBar").click(function(){
    $("#characterBar p").slideToggle();
  });

  $("#scenario1Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario1Options]:checked").val();
    playerCharStats.pushStatFirst(stat);
    if (!stat){
      $("#scenario1Form").addClass("animated shake");
    } else{
      $("#scenario1Form").removeClass("animated shake");
      $("#scenario1").hide();
      $("#scenario1Outcome-"+stat).fadeIn(500).delay(500);
      if (stat == "a") {
        $("#agilDisplay").append('<span class="fas fa-bolt"></span><span class="fas fa-bolt"></span>');
      } else if (stat == "s") {
        $("#strDisplay").append('<span class="fas fa-fist-raised"></span><span class="fas fa-fist-raised"></span>');
      } else if (stat == "c") {
        $("#charDisplay").append('<span class="fas fa-grin"></span><span class="fas fa-grin"></span>');
      } else if (stat == "i") {
        $("#intDisplay").append('<span class="fas fa-brain"></span><span class="fas fa-brain"></span>');
      } else if (stat == "h") {
        $("#humDisplay").append('<span class="fas fa-male"></span><span class="fas fa-male"></span>');
      }
    };
  });
  $(".scenario1Complete").click(function(){
    $("body").css('background-image', 'url(img/street1.jpeg)');
    $("h1").css('text-shadow', '0px 0px 8px black');
    $("body").css('background-position', 'center');
    $("body").css('background-size', 'cover');
    $("body").css('background-color', 'black');
    $("body").css('color', 'white');
    $("button").css('color', 'white');
    $(".outcome").hide();
    $("#scenario2").fadeIn(500).delay(500);
  });

  $("#scenario2Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario2Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario2Form").addClass("animated shake");
    } else{
      $("#scenario2Form").removeClass("animated shake");
      $("#scenario2").hide();
      $("#scenario2Outcome-"+stat).fadeIn(500).delay(500);
      if (stat == "a") {
        $("#agilDisplay").append('<span class="fas fa-bolt"></span>');
      } else if (stat == "s") {
        $("#strDisplay").append('<span class="fas fa-fist-raised"></span>');
      } else if (stat == "c") {
        $("#charDisplay").append('<span class="fas fa-grin"></span>');
      } else if (stat == "i") {
        $("#intDisplay").append('<span class="fas fa-brain"></span>');
      } else if (stat == "h") {
        $("#humDisplay").append('<span class="fas fa-male"></span>');
      }
      document.getElementById('character').src = 'img/' + character + '-scared.png';
      document.getElementById('robot').src = 'img/robot-orange.png';
    };
  });
  $(".scenario2Complete").click(function(){
    $("body").css('background-image', 'url(img/alley.jpeg)');
    $("body").css('background-position', 'center');
    $("body").css('background-size', 'cover');
    $("body").css('background-color', 'black');
    $("body").css('color', 'white');
    $("button").css('color', 'white');
    $("h1").css('text-shadow', '0px 0px 8px black');
    $(".outcome").hide();
    $("#scenario3").fadeIn(500).delay(500);
  });

  $("#scenario3Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario3Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario3Form").addClass("animated shake");
    } else{
      $("#scenario3Form").removeClass("animated shake");
      $("#scenario3").hide();
      $("#scenario3Outcome-"+stat).fadeIn(500).delay(500);
      if (stat == "a") {
        $("#agilDisplay").append('<span class="fas fa-bolt"></span>');
      } else if (stat == "s") {
        $("#strDisplay").append('<span class="fas fa-fist-raised"></span>');
      } else if (stat == "c") {
        $("#charDisplay").append('<span class="fas fa-grin"></span>');
      } else if (stat == "i") {
        $("#intDisplay").append('<span class="fas fa-brain"></span>');
      } else if (stat == "h") {
        $("#humDisplay").append('<span class="fas fa-male"></span>');
      }
    };
  });
  $(".scenario3Complete").click(function(){
    $("body").css('background-image', 'url(img/crowd3.jpeg)');
    $("body").css('background-color', 'black');
    $("body").css('background-size', 'cover');
    $("body").css('color', 'white');
    $("button").css('color', 'white');
    $("h1").css('text-shadow', '0px 0px 8px black');
    $(".outcome").hide();
    $("#scenario4").fadeIn(500).delay(500);
  });

  $("#scenario4Form").submit(function(event){
    event.preventDefault();
    var stat = $("input:radio[name=scenario4Options]:checked").val();
    playerCharStats.pushStat(stat);
    if (!stat){
      $("#scenario4Form").addClass("animated shake");
    } else{
      $("#scenario4Form").removeClass("animated shake");
      $("#scenario4").hide();
      $("#scenario4Outcome-"+stat).fadeIn(500).delay(500);
      if (stat == "a") {
        $("#agilDisplay").append('<span class="fas fa-bolt"></span>');
      } else if (stat == "s") {
        $("#strDisplay").append('<span class="fas fa-fist-raised"></span>');
      } else if (stat == "c") {
        $("#charDisplay").append('<span class="fas fa-grin"></span>');
      } else if (stat == "i") {
        $("#intDisplay").append('<span class="fas fa-brain"></span>');
      } else if (stat == "h") {
        $("#humDisplay").append('<span class="fas fa-male"></span>');
      }
      document.getElementById('character').src = 'img/' + character + '-angry.png';
      document.getElementById('robot').src = 'img/robot-red.png';
    };
  });
  $(".scenario4Complete").click(function(){
    $("#character").hide();
    $("#robot").hide();
    $(".outcome").hide();
    var music = document.getElementById("music");
    if (!music.paused){
      music.autoplay = true;
    };
    var final = playerCharStats.decideEnd()
    $(final).fadeIn(500).delay(500);

    if (final === "#ending-i") {
      document.getElementById('music').src = 'mp3/instinct.mp3';
      $("body").css('background-image', 'url(http://s3.amazonaws.com/assets.vision.org/uploadedimages/Home/Articles/winter2016-fourhorsemen-lead.jpg)');
      $("body").css('background-color', 'black');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-a") {
      document.getElementById('music').src = 'mp3/turning.mp3';
      $("body").css('background-image', 'url(https://images.unsplash.com/photo-1532178324009-6b6adeca1741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3496&q=80)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'black');
      $("body").css('color', '#51FFC1');
      $("button").css('color', '#51FFC1');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-c") {
      document.getElementById('music').src = 'mp3/deathmarch.mp3';
      $("body").css('background-image', 'url(https://images.unsplash.com/photo-1510885154241-75e69f87acae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'black');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("body").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-s") {
      document.getElementById('music').src = 'mp3/meatgrinder.mp3';
      $("body").css('background-image', 'url(https://www.incimages.com/uploaded_files/image/1940x900/getty_624678524_361747.jpg)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'gray');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px black');
    }
    if (final === "#ending-h") {
      document.getElementById('music').src = 'mp3/relaxing.mp3';
      $("body").css('background-image', 'url(https://images.unsplash.com/photo-1499516387605-0d549f707bd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)');
      $("body").css('background-size', 'cover');
      $("body").css('background-color', 'black');
      $("body").css('color', 'white');
      $("button").css('color', 'white');
      $("h1").css('text-shadow', '0px 0px 8px #FFF100');
    }
  });


  $("#refreshButton").click(function(){
    location.reload();
  });
});
