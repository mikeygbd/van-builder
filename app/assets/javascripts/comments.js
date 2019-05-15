
$(document).on('turbolinks:load', function () {
  $("form#new_comment").toArray().forEach(f => {
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
      $('.modal').removeClass('in');
                  $('.modal').attr("aria-hidden","true");
                  $('.modal').css("display", "none");
                  $('.modal-backdrop').remove();
                  $('body').removeClass('modal-open');
console.log(data)
console.log(url)
      $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(response, e){
      const comments = $(`[data-id="${response.post_id}"]`)


      let fullComment = `<div class="comments list-group-item"><strong><a href="/users/${response.user_id}">${response.user.email}</a></strong> - ${response.content}</div>`
      comments.append(fullComment)
    }
  });
  f.reset()
})
  })
})
