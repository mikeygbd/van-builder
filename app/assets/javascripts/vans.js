

$(document).on('turbolinks:load', function () {
  $("form#new_van").toArray().forEach(f => {
    $(f).on("submit", function(e){
      e.preventDefault()


      $('.modal').removeClass('in');
                  $('.modal').attr("aria-hidden","true");
                  $('.modal').css("display", "none");
                  $('.modal-backdrop').remove();
                  $('body').removeClass('modal-open');


      $.ajax({
    type: "POST",
    url: this.action,
    data: $(this).serialize(),
    success: function(response){

      const van = $(`#van`)
      let html = `<div class="van"><h1><img width=200 src= "${response.url}"></h1>
    <p class="lead"><strong>Make:</strong> ${response.van_make}</p>
    <p class="lead"> <strong>Model:</strong> ${response.van_model}</p>
    <p class="lead"> <strong>Year:</strong> ${response.van_year}</p>
    <p class="lead"> <strong>Wheelbase:</strong> ${response.van_wheelbase}</p>
    <p class="lead"> <strong>Color:</strong> ${response.van_color}</p>
    <p class="lead"><a href="/vans/${response.id}/edit">Edit</a>&nbsp; | &nbsp;<a href="/vans/${response.id}/delete">Delete</a></p></div>`

      van.append(html)

    }
  });
f.reset()
})
  })
})
