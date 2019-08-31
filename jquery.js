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


// crollTop por cada sección 
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

