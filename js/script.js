                       // Função para que o menu apareça na rolagem
                       var prevScrollpos = window.pageYOffset;
                       window.onscroll = function() {
                               var currentScrollPos = window.pageYOffset;
                               if (prevScrollpos > currentScrollPos) {
                                   document.getElementById("navbar").style.top = "0";
                               } else {
                                   document.getElementById("navbar").style.top = "-100px";
                               }
                               prevScrollpos = currentScrollPos;
                           }
                           // Fim da função rolagem

                       // Inicio da função deslize suave da página
                       $(function() {
                           $('a').bind('click', function(event) {
                               var $anchor = $(this);
                               $('html, body').stop().animate({
                                   scrollTop: $($anchor.attr('href')).offset().top
                               }, 1000, 'swing');
                           });
                       });
                       // Fim da função deslize