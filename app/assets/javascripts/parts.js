class Part {
  constructor(id, name, price, description, manufacturer, user_id, url, page_link, qty) {
    this.id = id
    this.name = name
    this.price = price
    this.description = description
    this.manufacturer = manufacturer
    this.user_id = user_id
    this.url = url
    this.page_link = page_link
    this.qty = qty



    this.render()

  }



  render() {

    const partContainer = document.getElementById('parts')
    const partCard = document.createElement('div')
    partCard.classList.add('part-card')
    partCard.id = this.id
    partCard.innerHTML =
  `<form class="partform shadow">
    <div id="contact">
      <h2><strong>${this.manufacturer} ${this.name}</strong> </h2>
      <h4>${this.description}<br></h4>
      <h2><strong>Quantity:</strong> ${this.qty}<br></h2>
      <img src="${this.url}"></img><br>
      <h2><strong>Unit Price: </strong>$${this.price}</h2>
      <h2><strong>Total Price: </strong>$${this.price * this.qty}</h2><br>
      <a href="/parts/${this.id}/edit">Edit</a>
      &nbsp; | &nbsp;
      <a href="/parts/${this.id}/delete">Delete</a>
    </div>
  </form>`

  // renderHomeParts() {
  //   const homePartContainer = document.getElementById('homeParts')
  //   const homePartCard = document.createElement('div')
  //   homePartCard.classList.add('part-card')
  //   homePartCard.id = this.id
  //   homePartCard.innerHTML = `<div class="list-group shadow">
  //   <div class="partbutton"><a href= '#partShowModal${this.id}' data-toggle="modal" role="button" class="list-group-item"><img width=50 src= "${this.url}"> ${this.manufacturer} ${this.name}<br> <strong>Qty:</strong> ${this.qty} </a>
  //     </div></div>
  //     <div id="partShowModal${this.id}" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  //     <div class="modal-dialog">
  //     <div class="modal-content">
  //         <div class="modal-header">
  //             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
  //         Your Part
  //         </div>
  //         <div class="modal-body">
  //           <!-- <div class="parts"> -->
  //           <form class="lead shadow">
  //
  //               <h2><strong>${this.manufacturer} ${this.name}</strong> </h2>
  //               <h4>${this.description}<br></h4>
  //               <h2><strong>Quantity:</strong> ${this.qty}<br></h2>
  //               <img src="${this.url}"></img><br>
  //               <h2><strong>Unit Price: </strong>$${this.price}</h2>
  //               <h2><strong>Total Price: </strong>$${this.price * this.qty} </h2><br>
  //               <a href="/parts/${this.id}/edit">Edit</a>
  //               &nbsp; | &nbsp;
  //               <a href="/parts/${this.id}/delete">Delete</a>
  //
  //           </form>
  //           <!-- </div> -->
  //         </div>
  //         </div>
  //     </div>
  //     </div>`
  //
  //
  //
  //   homePartContainer.appendChild(homePartCard)
  // }


  // const partPanel = document.getElementById('homePartsPanel')
  // partPanel.addEventListener('click', e => {
  //
  //
  //   if (e.target.className === 'partButton') this.renderParts()
  //   if (e.target.className === 'homePartButton') this.renderHomeParts()
  // })
    partContainer.appendChild(partCard)

  }


}


const partsArray = []

$(document).on('turbolinks:load', function () {
  $("form#new_part").toArray().forEach(f => {
    $(f).on("submit", function(e){
      e.preventDefault()
      url = this.action + '.json'
      const data = {
        'authenticity_token': f.authenticity_token.value,
          'name': e.target.part_name.value,
          'price':  e.target.part_price.value,
          'description':  e.target.part_description.value,
          'manufacturer':  e.target.part_manufacturer.value,
          'qty': e.target.part_qty.value
        }


      $('.modal').removeClass('in');
      $('.modal').attr("aria-hidden","true");
      $('.modal').css("display", "none");
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');

      fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then(part => {
        const {id, name, price, description, manufacturer, user_id, url, page_link, qty } = part
        new Part(id, name, price, description, manufacturer, user_id, url, page_link, qty)
        
      })
     })
       })
     })


// $(document).on('turbolinks:load', function () {
//   $("form#new_part").toArray().forEach(f => {
//     $(f).on("submit", function(e){
//       e.preventDefault()
//
//
//       $('.modal').removeClass('in');
//                   $('.modal').attr("aria-hidden","true");
//                   $('.modal').css("display", "none");
//                   $('.modal-backdrop').remove();
//                   $('body').removeClass('modal-open');
//
//
//       $.ajax({
//     type: "POST",
//     url: this.action,
//     data: $(this).serialize(),
//     success: function(response){
//
//       let part = new Part(response.id, response.name, response.description, response.manufacturer, response.user_id, response.url, response.page_link, response.qty)
//       partsArray.push(part)
//       document.getElementById('parts').innerHTML = partArray.render()
//
//
//
//       // const parts = $(`.parts`)
//   //     const homeParts = $('.homeParts')
//   //     var partCard = `<form class="partform shadow"><div id="contact">
//   //       <h2><strong>${response.manufacturer} ${response.name}</strong> </h2>
//   //       <h4>${response.description}<br></h4>
//   //       <h2><strong>Quantity:</strong> ${response.qty}<br></h2>
//   //       <img src="${response.url}"></img><br>
//   //       <h2><strong>Unit Price: </strong>$${response.price}</h2>
//   //       <h2><strong>Total Price: </strong>$${response.price * response.qty}</h2><br>
        // <a href="/parts/${response.id}/edit">Edit</a>
        // &nbsp; | &nbsp;
        // <a href="/parts/${response.id}/delete">Delete</a>
//   //     </div></form>`
//   //
  // let fullHomePart = `<div class="list-group shadow">
  // <div class="partbutton"><a href= '#partShowModal${response.id}' data-toggle="modal" role="button" class="list-group-item"><img width=50 src= "${response.url}"> ${response.manufacturer} ${response.name}<br> <strong>Qty:</strong> ${response.qty} </a>
  //   </div></div>
  //   <div id="partShowModal${response.id}" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  //   <div class="modal-dialog">
  //   <div class="modal-content">
  //       <div class="modal-header">
  //           <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
  //       Your Part
  //       </div>
  //       <div class="modal-body">
  //         <!-- <div class="parts"> -->
  //         <form class="lead shadow">
  //
  //             <h2><strong>${response.manufacturer} ${response.name}</strong> </h2>
  //             <h4>${response.description}<br></h4>
  //             <h2><strong>Quantity:</strong> ${response.qty}<br></h2>
  //             <img src="${response.url}"></img><br>
  //             <h2><strong>Unit Price: </strong>$${response.price}</h2>
  //             <h2><strong>Total Price: </strong>$${response.price * response.qty} </h2><br>
  //             <a href="/parts/${response.id}/edit">Edit</a>
  //             &nbsp; | &nbsp;
  //             <a href="/parts/${response.id}/delete">Delete</a>
  //
  //         </form>
  //         <!-- </div> -->
  //       </div>
  //       </div>
  //   </div>
  //   </div>`
//       // parts.append(fullPart)
//       // homeParts.append(fullHomePart)
//     }
//   });
// f.reset()
// })
//   })
// })
//
// // $(function() {
// //   $(".partbutton").on('click', function(e) {
// //     e.preventDefault()
// // debugger
// // //     $.ajax({
// // //   type: "GET",
// // //   url: this.action,
// // //   data: $(this).serialize(),
// // //   success: function(response){
// // //     debugger
// // //
// // //   }
// // // })
// // })
// //
// // })
