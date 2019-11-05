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
                                     scrollTop: $($anchor.attr('href')).offset().top - 50
                                 }, 1000, 'swing');
                             });
                         });

                         // Função de transição das telas

                         const bounce = function(func, wait, immediate) {
                             let timeout;
                             return function(...args) {
                                 const context = this;
                                 const later = function() {
                                     timeout = null;
                                     if (!immediate) func.apply(context, args);
                                 };
                                 const callNow = immediate && !timeout;
                                 clearTimeout(timeout);
                                 timeout = setTimeout(later, wait);
                                 if (callNow) func.apply(context, args);
                             };
                         };

                         const target = document.querySelectorAll('[data-anime]');
                         const animationClass = 'animate';

                         function animeScroll() {
                             const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
                             target.forEach(function(element) {
                                 if ((windowTop) > element.offsetTop) {
                                     element.classList.add(animationClass);
                                 } else {
                                     element.classList.remove(animationClass);
                                 }
                             })
                         }

                         animeScroll();
                         if (target.length) {
                             window.addEventListener('scroll', function() {
                                 animeScroll();
                             })
                         }
                         // Função para responsividade do menu
                         function myFunction() {
                             var x = document.getElementById("navbar");
                             if (x.className === "navbar") {
                                 x.className += " responsive";
                             } else {
                                 x.className = "navbar";
                             }
                         }