// const caja = document.querySelector("#caja");
// caja.addEventListener("click",cambiarColor);
// function cambiarColor() {
//     caja.style.background = "red";
// }
// $("#caja").click(function (params) {
//     $("#caja").css({"width":"285px", "height":"200px", "background":"red"});
// });
$(document).ready(() =>{
    
    let windownWidth = $(window).width();   
// scroll de navbar 
   let scroll;
    $(window).scroll(() => {
        scroll = $(window).scrollTop();

     if (windownWidth < 978) {  
        $(".navbar-brand").css({"font-size":"1.1rem", overflow: "hidden", "height": '100%'}) }
     else if (windownWidth > 978){
        if (scroll > 200) {
            $(".navbar-brand").css({"font-size":"1.5rem"}) ,    
            $("#nav").css({"margin-top":"-2px", "height":"70px"})
        }else{
            $(".navbar-brand").css({"font-size":"1.7rem"}) , 
            $("#nav").css({"margin-top":"0px", "height":"103.69px"})
        }}
    });
  // Funcionalidad del label pero falta terminar
  // la funcionalidad de los id paara que los input sean reconocidos por su cuenta

//  function idInputLabel(inpName) {
     
//   $('input[id=inpName]').on('input', function(){
//         let emptyInput = $(this).val();
//         // console.log(emptyInput.length);   
//        if(emptyInput.length === 0){
//           $("label[id=uno]").hide();
//        }else{
//            $("label[id=uno]").show();
//         }   
//   });

// }


//  $("button").click(function(){
//     alert(($("input").val()).length);
//   });
// $("input").keypress(()=>{
//      if ($("input").val().length < 0) {
//         $("input").keyup(()=>{
//             $("label").css({"display":"none"});
//          })
//      } else{
//         $("input").keydown(()=>{
//             $("label").css({"display":"block","transition": "all 0.5s linear"});
//         });
//      }
//     })
    

    // $('input').on('input', function(){
    //     $('input').each(function() {  
    //         let empty = $(this).prop('value');
    //     //   var boton      = $( '#user-data-next-button' );
    //     // if (empty === '') {
    //     //     $("label").hide();
    //     // } 
    //     // else{
    //     //     $("input").keypress(()=>{
    //     //         $("label").show(); 
    //     //      })
    //     // }
    //     //   let empty = $(this).prop('value') === '';   
    //     //   boton.prop('disabled', esta_vacio);    
    //     console.log(empty);
           
    //     });
    // });


   
    // let empty = $("#inputName").prop('value');
    // console.log(empty);
    
 

// scrollTop por cada sección de la página 
    $('a').on("click",() => {

        if (this.hash !== "") {
            let secHash = $(this.hash);
            
            $('html, body').animate({
                scrollTop:secHash.offset()
            }, 1000, () =>{
                window.location.hash = secHash;
            });

        }
    })

});



   

