
$(document).on('turbolinks:load', function () {
  $("form#new_post").toArray().forEach(f => {
    $(f).on("submit", function(e){
      e.preventDefault()

      url = this.action

      data = {
        'authenticity_token': f.authenticity_token.value,
        'post': {
          'title': f['post[title]'].value,
          'embed': f['post[embed]'].value,
          'description': f['post[description]'].value

        }
      }
      $('.modal').removeClass('in');
                  $('.modal').attr("aria-hidden","true");
                  $('.modal').css("display", "none");
                  $('.modal-backdrop').remove();
                  $('body').removeClass('modal-open');


      $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(response){
      const posts = $(`.posts`)
      const homePosts = $('#homePosts')
      let fullPost = `<div class="post shadow"><div id="contact"><h2><strong>${response.title}</strong> </h2><br><br>
    <p>Created on: ${response.user.created_at}</p>
    <br>
    ${response.embed}<br><br>
    <div class="description">
    <h4>${response.description}</h4>
    </div>
    <br>
    <a href="/posts/${response.id}/edit">Edit</a>
    &nbsp; | &nbsp;
    <a href="/posts/${response.id}/delete">Delete</a>
    <h5><strong><u>Comments</u></strong></h5></div></div>`

  let fullHomePost = `<div class="list-group shadow">
      <a href= '/posts/${response.id}' role="button" class="list-group-item"> <div class="lead">${response.title}<br><br> ${response.embed}</div></a>
    </div></div>`
      posts.append(fullPost)
      homePosts.append(fullHomePost)
    }
  });
f.reset()
})
  })
})
