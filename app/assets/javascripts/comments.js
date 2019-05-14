$(document).on('turbolinks:load', function () {
  $("form").toArray().forEach(f => {
    $(f).on("submit", function(e){
      e.preventDefault()
      url = this.action
      data = {
        'authenticity_token': f.authenticity_token.value,
        'comment': {
          'content': f['comment[content]'].value,
          'post_id': f['comment[post_id]'].value
        }
      }
      console.log('submitted')
      //$(`#${e.target.parentElement.parentElement.parentElement.parentElement.id}`).modal('hide')
      $('.modal').removeClass('in');
                  $('.modal').attr("aria-hidden","true");
                  $('.modal').css("display", "none");
                  $('.modal-backdrop').remove();
                  $('body').removeClass('modal-open');
