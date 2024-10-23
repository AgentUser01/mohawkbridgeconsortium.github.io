$(function() {
    setTimeout(function() {
        if (location.hash) {
            window.scrollTo(0, 0);
            smoothScrollTo($(location.hash));
        }
    }, 1);


    function smoothScrollTo(target) {

        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    }
});

let sliders = [];
$(document).ready(function() {

    $('.lang-change').click(event => {
        event.stopPropagation();
        event.preventDefault();
        window.location = event.target.href + window.location.search;


    })

	//add_menu_parent_class to menu
	$('ul li.dropdown:has(ul)').addClass('has-child');
	
	$(".navbar-brand li a").addClass( "link-underline" );
	
	/* Menu filtres à gauche */
	if ( $( "#showLeftPush" ).length ) {
		$("#showLeftPush").click(function() {
			  $(this).toggleClass( "active" );
			  $(document.body).toggleClass( "cbp-spmenu-push-toright" );
			  $("#cbp-spmenu-s1").toggleClass( "cbp-spmenu-open" );
			});
		
		$(".close-search-bar").click(function() {
			$("#showLeftPush").removeClass( "active" );
			  $(document.body).removeClass( "cbp-spmenu-push-toright" );
			  $("#cbp-spmenu-s1").removeClass( "cbp-spmenu-open" );
			
		});
	}	
	
    /* navbar toggle and remove empty p */
    $(".navbar-nav > li.dropdown > a").after("<div class='dropdown-toggle plus' data-toggle='dropdown'></div>");
    $("p:empty,p:contains('&nbsp;')").css("display", "none"),
        $("p").each(function() {
            var a = $(this);
            0 == a.html().replace(/\s|&nbsp;/g, "").length && a.remove()
        });


    /* navbar */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("navbar-fixed");

        } else {
            $(".navbar").removeClass("navbar-fixed");
        }
    });
    $(".nav-menu").click(function() {
        $("body").toggleClass('support');

    });
    
    $('.main-nav .dropdown-menu a').on('click', function(){
    	//console.log(this.href);
    	$("body").toggleClass('support');
    	
    });
    
    /* gallery single slider */
    $(".slick-gallery").slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  arrows:true,
        prevArrow: '<button type="button" class="mfp-arrow mfp-arrow-left"></button>',
        nextArrow: '<button type="button" class="mfp-arrow mfp-arrow-right"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    
    /* gallery single large slider */
    $(".slick-gallery-large").slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  arrows:false,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });    
    
    

    /* project slider */
     sliders = $(".slider-project").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
         prevArrow: '<button type="button" class="slick-prev" onclick="arrowClickHandler()">Previous</button>',
         nextArrow: '<button type="button" class="slick-next" onclick="arrowClickHandler()">Next</button>',
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        }],
        dotsClass:"custom_paging",
        customPaging:function(s,i)
        	{
        	    return (i+s.options.slidesToShow - 1 )+"<span class='separator'>/</span><span class='tot'>"+ Math.floor(s.slideCount / s.options.slidesToShow + s.options.slidesToScroll )+"</span>"
        	}
    });

    sliders.each((idx, item) => {
        const currentValue = window.sessionStorage.getItem(`slide_${idx}`);
        if (currentValue) {
            $(item).slick('slickGoTo', currentValue);
        }
        ((idx) => {
            $(item).on('afterChange', (event, currentSlide) => {
                const current = currentSlide.getCurrent();
                window.sessionStorage.setItem(`slide_${idx}`, current);

            });
        })(idx);
    });
    
    /*
    var x = $(".tab-pane.active .slick-dots li").length;
    $(".num-slide").append('<span class="tot">' + x + '</span>');
    $(".num-slide .num").text('0' + $(".tab-pane.active .slick-dots li.slick-active button").text());
    $('.tab-pane.active .slider-project').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $(".num-slide .num").text('0' + currentSlide);
    });
     */

    /* mobile ul */
    $(".mobile-select span.text").text($(".nav.dropdown-menu a:first-child").text());
    $(".nav.dropdown-menu a").click(function() {
        $(".mobile-select span.text").text($(this).text());
        $(".nav.dropdown-menu").fadeOut();
    });


    /* to top */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.gotop').addClass('show');
        } else {
            $('.gotop').removeClass('show');
        }
    });
    $(".gotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });


    /* Magnific popup - Zoom */
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

    
    /* Section fixed on scroll */
   	fixRefineSearch();

   	
   	/* Custom select Cover - Début */
   	
   	$('.custom-sel').each(function() {
   	  $(this).children('select').css('display', 'none');
   	  
   	  var $current = $(this);
   	  
   	  $(this).find('option').each(function(i) {
   	    if (i == 0) {
   	      $current.prepend($('<div>', {
   	        class: $current.attr('class').replace(/custom-sel/g, 'sel__box')
   	      }));
   	      
   	      var placeholder = $(this).text();
   	      $current.prepend($('<span>', {
   	        class: $current.attr('class').replace(/custom-sel/g, 'sel__placeholder'),
   	        text: placeholder,
   	        'data-placeholder': placeholder
   	      }));
   	      
   	      return;
   	    }
   	    
   	    $current.children('div').append($('<span>', {
   	      class: $current.attr('class').replace(/custom-sel/g, 'sel__box__options'),
   	      text: $(this).text()
   	    }));
   	  });
   	});

   	// Toggling the `.active` state on the `.custom-sel`.
   	$('.leasing-listing .city-select.custom-sel').click(function(e) {
   			$('.project-type-select.custom-sel').removeClass('active');
   			$(this).toggleClass('active');
   		
   	});
   	// Toggling the `.active` state on the `.custom-sel`.
   	$('.leasing-listing .project-type-select.custom-sel').click(function(e) {
   			$('.city-select.custom-sel').removeClass('active');
   			$(this).toggleClass('active');
   		
   	});   	
   	
   	// Toggling the `.active` state on the `.custom-sel`.
   	$('.land-listing .city-select.custom-sel').click(function(e) {
   			$(this).toggleClass('active');
   		
   	});

  	
   	

   	// Toggling the `.selected` state on the options.
   	$('.sel__box__options').click(function() {
   	  var txt = $(this).text();
   	  var index = $(this).index();
   	  
   	  $(this).siblings('.sel__box__options').removeClass('selected');
   	  $(this).addClass('selected');
   	  
   	  var $currentSel = $(this).closest('.custom-sel');
   	  $currentSel.children('.sel__placeholder').text(txt);
   	  $currentSel.children('select').prop('selectedIndex', index + 1);
   	});   	
   	
   	/* Custom select Cover - Début */
   	

    
   	
   	
});

/* Section fixed on scroll */
var fixRefineInited  = false;
	function fixRefineSearch() {
		if ($(".fixme")[0])  {
		    var fixmeTop = $('.fixme').offset().top;
		    fixmeTop-=78;
		    //console.log (fixmeTop);
            if (fixRefineInited) {
                $(window).off('scroll');
            }
	        $(window).scroll(function() {
	            var currentScroll = $(window).scrollTop();
	            
	            if (currentScroll >= fixmeTop) {
	                $('.fixme').addClass('fixed');
	            } else {
	                $('.fixme').removeClass('fixed');
	                
	            }
	        });
            fixRefineInited = true;
		    	
	    	
	    }	
	 }

function changeTab(direction) {

    changeTabInited = true;
	   // console.log(sliders);
	    const $navFill = $('.nav.nav-fill .nav-link');
	    const navFillCurrent = $navFill.index($navFill.parent().find('.active'));
	    const totalTabs = $navFill.length - 1;

	    const $navDropdown = $('.nav.dropdown-menu .nav-link');

	    let changeTabIdx = 0;
	    if (direction > 0) {
	        changeTabIdx = navFillCurrent === totalTabs ? 0 : navFillCurrent + 1;
        }
	    else {
            changeTabIdx = navFillCurrent === 0 ? totalTabs : navFillCurrent - 1;
        }

	    $($navFill[changeTabIdx]).tab('show');
	    $($navDropdown[changeTabIdx]).tab('show');
	    $(sliders[changeTabIdx]).slick('slickGoTo', 0);
        sessionStorage.setItem('lastTab', $navDropdown[changeTabIdx].hash);


}

/* Smooth scroll id */
$(function() {
    $('.smooth-scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                return false;
            }
        }
    });
});


/* vertical center */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});

/* responsive tabs accordion */
$(' a[data-toggle="pill"]').on('click', function(e) {
    const idx = $(' a[data-toggle="pill"]').index(this);
    $(sliders[idx]).slick('slickGoTo', 0);
    $(this).tab('show');
    sessionStorage.setItem('lastTab', this.hash);
   //  $('.slider-project').slick('slickToGo', 0);
   //  $(".slider-project").slick("refresh");
});


const currentTab = sessionStorage.getItem('lastTab');
if (currentTab) {
    $(`a[href='${currentTab}']`).tab('show')
}



$(document).ready(function() {
    function addS() {
        $(".cover-text").fadeIn().addClass('slide');
    }

    var $loader = $(".loader");

    if ($loader.length) {
        $(".loader").delay(1200).fadeOut(800, addS);
    }
    else {
        addS();
    }



});


/* owl timeline history */
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 16; //globaly define number of elements per page
  var stepSlides = 16;
  var syncedSecondary = true;
    if ($(window).width() < 992) {
        slidesPerPage = 8;
        var stepSlides = 8;
    }
    if ($(window).width() < 792) {
        slidesPerPage = 6;
        var stepSlides = 6;
    }
    if ($(window).width() < 575) {
        slidesPerPage = 4;
        var stepSlides = 4;
    }

  sync1.owlCarousel({
    margin: 20,
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutUp',
    freeDrag : false,
    mouseDrag: true,
    pullDrag: true,
    touchDrag: true,
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: false,
    responsiveRefreshRate : 200,
      navElement: 'div',
    navText: ['<svg  width="100%" class="hide-xs" height="200px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #e3163b;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','' +
    '<svg width="100%" height="200px" class="hide-xs" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #e3163b;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  
  
    
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-stage-outer").css('background-image', 'url(/themes/broccolini/images/timeline/line.png)');
      sync2.find(".owl-stage-outer").css('background-repeat', 'repeat-x');
      sync2.find(".owl-stage-outer").css('background-position', 'center');
      sync2.find(".owl-item").eq(0).addClass("current");
      sync2.find(".owl-item").addClass("text-center");
      var w = sync2.find(".second").parents('.owl-item').css('width');
       if ($(window).width() > 791) {
        sync2.find(".owl-stage-outer").css('padding-left', w);
    }

      w = parseInt(w) / parseInt(2);
      sync2.find(".second").parents('.owl-item').css('width', w);
      w = parseInt(w) / parseInt(3);
      sync2.find(".second.equal").parents('.owl-item').css('width', w);
      sync2.find(".up").addClass("pb-0");
      sync2.find(".up").parents('.owl-item').addClass("pb-5");
      sync2.find(".up").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year-up.png)');
      sync2.find(".up").parents('.owl-item').css('background-repeat', 'no-repeat');
      sync2.find(".up").parents('.owl-item').css('background-position', 'center center');

      //mark first element 1949
        sync2.find(".up").parents('.owl-item').last().css('background-image', 'url(/themes/broccolini/images/timeline/year-upH.png)');
      sync2.find(".dw").addClass("pt-0");
      sync2.find(".dw").parents('.owl-item').addClass("pt-5");
      sync2.find(".dw").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year.png)');
      sync2.find(".dw").parents('.owl-item').css('background-repeat', 'no-repeat');
      sync2.find(".dw").parents('.owl-item').css('background-position', 'center center');

      sync2.find(".equal").addClass("py-0");
      sync2.find(".equal").parents('.owl-item').addClass("py-4");
      sync2.find(".equal").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/second.png)');
      sync2.find(".equal").parents('.owl-item').css('background-repeat', 'no-repeat');
      sync2.find(".equal").parents('.owl-item').css('background-position', 'left center');

      // sync2.find(".equal").parents('.owl-item').hover(function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/secondH.png)');
      //     }, function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/second.png)');
      //     }
      //   );
      // sync2.find(".dw").parents('.owl-item').hover(function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/yearH.png)');
      //     }, function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year.png)');
      //     }
      //   );
      // sync2.find(".up").parents('.owl-item').hover(function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year-upH.png)');
      //     }, function() {
      //       $( this ).css('background-image', 'url(/themes/broccolini/images/timeline/year-up.png)');
      //     }
      //   );

    })
    .owlCarousel({
    navContainer: '.main-content .custom-nav',
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    items : slidesPerPage,
    mouseDrag: true,
    pullDrag: true,
    touchDrag: true,
    dots: false,
    nav: true,
    smartSpeed: 0,
    slideSpeed : 0,
    slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var current = el.item.index;
    //end block

      sync2.find(".up").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year-up.png)');
      sync2.find(".dw").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year.png)');
      sync2.find(".equal").parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/second.png)');

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
     var $curItem = sync2.find('.owl-item.current .item');
     console.log($curItem);

    if ($curItem.hasClass('equal')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/secondH.png)');
    }
    else if ($curItem.hasClass('dw')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/yearH.png)');
    }
    else if ($curItem.hasClass('up')) {
        $curItem.parents('.owl-item').css('background-image', 'url(/themes/broccolini/images/timeline/year-upH.png)');
    }


    // var onscreen = sync2.find('.owl-item.active').length - 1;
    // var start = sync2.find('.owl-item.active').first().index();
    // var end = sync2.find('.owl-item.active').last().index();
    //
    // if (current > end) {
    //   sync2.data('owl.carousel').to(current, 100, true);
    // }
    // if (current < start) {
    //   sync2.data('owl.carousel').to(current - onscreen, 100, true);
    // }
  }

  function syncPosition2(el) {

      var number = el.item.index;
      sync1.data('owl.carousel').to(number , 100);

  }

  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

});

function arrowClickHandler() {
    const $element = $(event.target);
    console.log('click', $element.attr('class'));
    if ($element.hasClass('slick-disabled')) {
        const direction = $element.hasClass('slick-next') ? +1 : -1;
        console.log(direction, 'direct');
        changeTab(direction);
    }
}

//var in30Minutes = 1/48;
//if ( !Cookies.get('popup') ) { setTimeout( function() { $('#exampleModal').modal().on('shown.bs.modal', function() { Cookies.set('popup', 'true', { expires: in30Minutes, path: "/" }); }); }, 600); }
