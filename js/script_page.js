(function(){
  $(document).ready(function() {
        // $('body').css("background","red");
        $('button').click(function(){
          $('body').css("background","red");
          console.log($(document));
        });
  });

    // function cuentaTexto()
    // {
    //     $nodeTemp = $(this).clone();
    //     $nodeTemp.find('.gmail_quote').remove();
    //     $('.contadorExt').remove();
    //     var numChar = $nodeTemp.text().length+1;
    //     var html = '<div class="contadorExt">' + numChar + '</div>';
    //     $('.aWQ').append(html);
    // }
}());
