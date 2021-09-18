$(document).ready(function(){
	// menu de busqueda =============================== menu de busqueda ====================
	$('#buscar-nav').focus(function(){
		console.log('algo esta pasando');
		$('.Busquedas').show();
		$('.Busquedas').css({"top":"calc(100% - 0.7rem)"});
		$('.fondo').css("filter",'opacity(1)');
		$(this).focusout(function(){
			$('.Busquedas').css({"top":" -50rem"});
			$('.fondo').css("filter",'opacity(0)');
		})
	})
	// productos ==================================== productos =======================================
	$('.Productos').hover(function(){
		var id_producto = '#';
		id_producto += $(this).attr('id');
		// console.log(id_producto);
		$(id_producto+' .logo-producto').css({'top':'33%','transform':'translateY(-40%) translateX(-50%)'});
		$(id_producto+' .contenido-psotion-rel a').css({'bottom':'18%'});
	},
	function(){
		var id_producto = '#';
		id_producto += $(this).attr('id');
		$(id_producto+' .logo-producto').css({'top':'-200px','transform':'translateY(-40%) translateX(-50%)'});
		$(id_producto+' .contenido-psotion-rel a').css({'bottom':'-150px'});
	});
	// slider ============================================ slider ===========================================
	// genera paginacion dinamica

	var imgItems = $('.slider li').length;
	var imgPos = 1;
	for (var i = 1 ; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fas fa-circle"></span></li>');
	}
	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color':'#0084ff'});

	// hacemos que se muestre y se oculte las flechas
	$('.CONTED_slider').hover(function(){
		$('.slider_left').css({'left':'0'});
		$('.slider_right').css({'right':'0'});
	},function(){
		$('.slider_left').css({'left':'-200px'});
		$('.slider_right').css({'right':'-200px'});
	});
	// ejecutamos funciones
	$('.pagination li').click(pagination);
	$('.slider_left span').click(irIz);
	$('.slider_right span').click(irDe);
	setInterval(function(){
		irDe();
	}, 5000);

	//funciones =====================================================================
	// paginacion
	function pagination(){
		var paginationPostion = $(this).index() + 1 ;
		$('.slider li').hide();
		$('.slider li:nth-child('+paginationPostion+')').fadeIn(1500);
		$('.pagination li').css({'color':'#efefef'});
		if ((paginationPostion % 2) == 0) {
			$(this).css({'color':'#ff8080'});
		}else{
			$(this).css({'color':'#0084ff'});
		}

	}
	// nex slider
 	function irDe(){
 		imgPos++;
 		if (imgPos > imgItems) {
 			imgPos = 1;
 		}
 		$('.slider li').hide();
 		$('.slider li:nth-child('+imgPos+')').fadeIn(1500);
 		$('.pagination li').css({'color':'#efefef'});
 		if ((imgPos % 2) == 0) {
 			console.log('entroooo');
 			$('.pagination li:nth-child('+imgPos+')').css({'color':'#ff8080'});
 		}else{
 			$('.pagination li:nth-child('+imgPos+')').css({'color':'#0084ff'});
 		}
 	}
 	function irIz(){
 		imgPos--;
 		if (imgPos < 1) {
 			imgPos = imgItems;
 		}
 		$('.slider li').hide();
 		$('.slider li:nth-child('+imgPos+')').fadeIn(1500);
 		$('.pagination li').css({'color':'#efefef'});
 		if ((imgPos % 2) == 0) {
 			$('.pagination li:nth-child('+imgPos+')').css({'color':'#ff8080'});
 		}else{
 			$('.pagination li:nth-child('+imgPos+')').css({'color':'#0084ff'});
 		}
 	}
})