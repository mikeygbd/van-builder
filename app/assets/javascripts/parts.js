

$(document).on('turbolinks:load', function () {
  $("form#new_part").toArray().forEach(f => {
    $(f).on("submit", function(e){
      e.preventDefault()

      url = this.action

      data = {
        'authenticity_token': f.authenticity_token.value,
        'part': {
          'name': f['part[name]'].value,
          'price': f['part[price]'].value,
          'description': f['part[description]'].value,
          'manufacturer': f['part[manufacturer]'].value,
          'qty': f['part[qty]'].value,

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

      const parts = $(`.parts`)
      const homeParts = $('.homeParts')
      let fullPart = `<form class="partform shadow"><div id="contact">
        <h2><strong>${response.manufacturer} ${response.name}</strong> </h2>
        <h4>${response.description}<br></h4>
        <h2><strong>Quantity:</strong> ${response.qty}<br></h2>
        <img src="${response.url}"></img><br>
        <h2><strong>Unit Price: </strong>$${response.price}</h2>
        <h2><strong>Total Price: </strong>$${response.price * response.qty}</h2><br>
        <a href="/parts/${response.id}/edit">Edit</a>
        &nbsp; | &nbsp;
        <a href="/parts/${response.id}/delete">Delete</a>
      </div></form>`

  let fullHomePart = `<div class="list-group shadow">
  <a href= '/parts/${response.id}' role="button" class="list-group-item"><img width=50 src= "${response.url}"> ${response.manufacturer} ${response.name}<br> <strong>Qty:</strong> ${response.qty} </a>
    </div></div>`
      parts.append(fullPart)
      homeParts.append(fullHomePart)
    }
  });
f.reset()
})
  })
})
