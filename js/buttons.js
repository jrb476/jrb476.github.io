$(document).ready(function(){
    $('.do_content').hide();
    $('.done_content').hide();
    $('#overview_done').show();
    $('#overview_do').show();
    $(document).on('click', function(e){
      e.preventDefault();
      if (($(e.target).attr("class")) == 'button_do') {
      	$('.do_content').hide();
      	$('#'+($(e.target).attr("name"))).show();
      }
      if (($(e.target).attr("class")) == 'button_done') {
        $('.done_content').hide();
        $('#'+($(e.target).attr("name"))).show();
      }
    });
  });