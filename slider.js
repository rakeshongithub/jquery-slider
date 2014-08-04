// JavaScript Document

;(function( $, window, document, undefined ){
		   
		   var 	  sliderUl = $('.slider').css('overflow','hidden').find('ul'),
		   			   img = sliderUl.children('li').find('img'),
				    imgLen = img.length,
				  imgWidth = img[0].width,
				totalWidth = imgLen * imgWidth,
				   current = 1;
			
			$('#slider-nav').show().find('button').on('click', function(){
				var direction = $(this).data('dir'),
					loc = imgWidth;
				
				(direction === 'next') ? ++current : --current;
				
				if(current === 0 ){
					  current = imgLen;
					      loc = totalWidth - imgWidth; 
					direction = 'next';
				} else if (current - 1 === imgLen){
					  current = 1;
					      loc = 0;
				}
				
				transition(sliderUl, loc, direction);
				count(current)
				//uniqeCount(current)
			});
			
			// Move images 
			function transition(container, loc, direction){
				var unit;
				
				if(direction && loc !== 0){
					unit = (direction === 'next') ? '-=' : '+=';
				}
				//console.log(loc)
				
				container.animate({
					marginLeft : unit ? (unit + loc) : loc
				})
			}
			
			// create bullet points
			$('body').append('<ul class="nav-count"></ul>')
			for(var i = 1; i <= imgLen; i++){
				$('.nav-count').append('<li>'+i+'</li>')
			}
			$('.nav-count').children('li:eq(0)').addClass('active')
			
			// add active class on bullet point
			function count(current){
				var newCount = current-1;
				$('.nav-count').children('li').removeClass();
				$('.nav-count').children('li:eq('+newCount+')').addClass('active')
			}
			
			// slide images on click of bullet numbers
			$('.nav-count').find('li').on('click', function(){
					
					var $this = $(this),
						current = $this.text()
						
					$this.siblings('li').removeClass().end().addClass('active')				
					sliderUl.animate({'margin-left':-imgWidth * (current - 1)})
					
			});
			
			
		   
})( jQuery, window, document );