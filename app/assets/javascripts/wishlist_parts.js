
$(document).on('turbolinks:load', function () {
  $("form#new_wishlist_part").toArray().forEach(f => {
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

      const wishlistParts = $(`.wishlistparts`)
      const homeWishlistParts = $('.homeWishlistParts')
      let fullWishlistPart = `<form class="wlform shadow"><div id="contact">
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

  let fullHomeWishlistPart = `<div class="list-group shadow">
  <div class="WishlistPartButton"><a href= '#WishlistPartShowModal${response.id}' data-toggle="modal" role="button" class="list-group-item"><img width=50 src= "${response.url}"> ${response.manufacturer} ${response.name}<br> <strong>Qty:</strong> ${response.qty} </a>
    </div></div>
    <div id="WishlistPartShowModal${response.id}" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        Your Part
        </div>
        <div class="modal-body">
          <!-- <div class="parts"> -->
          <form class="lead shadow">

              <h2><strong>${response.manufacturer} ${response.name}</strong> </h2>
              <h4>${response.description}<br></h4>
              <h2><strong>Quantity:</strong> ${response.qty}<br></h2>
              <img src="${response.url}"></img><br>
              <h2><strong>Unit Price: </strong>$${response.price}</h2>
              <h2><strong>Total Price: </strong>$${response.price * response.qty} </h2><br>
              <a href="/parts/${response.id}/edit">Edit</a>
              &nbsp; | &nbsp;
              <a href="/parts/${response.id}/delete">Delete</a>

          </form>
          <!-- </div> -->
        </div>
        </div>
    </div>
    </div>`
      wishlistParts.append(fullWishlistPart)
      homeWishlistParts.append(fullHomeWishlistPart)
    }
  });
f.reset()
})
  })
})
