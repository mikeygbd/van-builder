
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
      let fullPost = `<form class="post shadow"><div id="contact"><h2><strong>${response.title}</strong> </h2><br><br>
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

    <h5><strong><u>Comments</u></strong> </h5>
  </div>
  </form>`
      posts.append(fullPost)
    }
  });
f.reset()
})
  })
})
