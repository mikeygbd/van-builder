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
