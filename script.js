
$(function (){

  $(".fa-paper-plane").click(function(){
    var text = $(".type_here").val();
    if (text) {
      var new_text = $(".template .message").clone();
      new_text.children(".content").text(text);
      new_text.children(".message_time").text(current_time());
      $(".message_box.active").append(new_text);
      $(".message_box").scrollTop(10000);
    };
    $(".type_here").val("");

    setTimeout (function (){
      var new_text = $(".template .message").clone();
      new_text.toggleClass("green white");
      new_text.children(".content").text("I will catch you later");
      new_text.children(".message_time").text(current_time());
      $(".message_box.active").append(new_text);
      $(".header_right").find(".message_time").text(current_time());
      $(".chat_list").children(".contact.active").find(".sentence").text("I will catch you later, the aim and end of one's existence").css("color", " #39e605").css("font-weight","Bold");
      $(".chat_list").children(".contact.active").find(".message_time").text(current_time());
      $(".message_box").scrollTop(10000);
    }, 1000);

  });
  $(".type_here").keypress(function(e) {
      var key = e.which;
      if (key == 13) {
        $(".fa-paper-plane").click();
        return false;
      }
    });

  $(".searchme").keyup(function() {
      var lookup = $(this).val().toLowerCase();
      $(".contact").each(function() {
        if ($(this).find(".firstname").text().toLowerCase().includes(lookup)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });

  $(".contact").click(function() {
    var talk = $(this).attr("data-chat");
    var talkscreen = $('.message_box[data-chat="'+talk+'"]');
    $(".message_box").removeClass("active");
    $(".contact").removeClass("active");
    talkscreen.addClass("active");
    $(this).addClass("active");
    var name = $(".contact.active").find(".firstname").text();
    $(".header_right").children(".name").find(".firstname").text(name);
    var photo = $(this).find("img").attr("src");
    $(".header_right").children("img").attr("src", photo)
  });

  $(document).on("click", ".message i", function() {
    $(this).parent(".message").find(".message_options").toggleClass("active");
  });

  $(document).on("click", ".message_delete", function() {
    $(this).closest(".message").hide();
  });
});

function current_time() {
   var d = new Date();
   var m = d.getMinutes();
   var h = d.getHours();

   if (m < 10) {
     m = "0" + m;
   };
   if (h < 10) {
     h = "0" + h;
   }
   return h + ":" + m;
};

function toggle(){
            let r=getComputedStyle(document.documentElement);
            let a=r.getPropertyValue('--t');
            let root=document.documentElement;
            if(a==0+"px"){
                root.style.setProperty('--t',20+"px");
                root.style.setProperty('--bgdiv',"#70f866cf");
                document.querySelector("body").style.backgroundColor="black";
            }
            else{
                root.style.setProperty('--t',0+"px");
                root.style.setProperty('--bgdiv',"rgba(255, 70, 70, 0.831)");
                document.querySelector("body").style.backgroundColor="white";
                
            }
        }
