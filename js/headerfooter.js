function footer(){
  $.ajax({
      url: "footer.html",
      cache: false,
      success: function(data){
        $('body').append(data);
      }
  });
}

function header(){
  $.ajax({
      url: "header.html",
      cache: false,
      success: function(data){
        $('body').prepend(data);
      }
  });
}

