var repeat = setInterval(function(){
	if(window.jQuery){
		clearInterval(repeat);
			$(document).ready(function(){
				// 화면 랜더링이 다 되면 window.onload 이벤트와 다르다
				// 제이쿼리 실행식이거나 함수
                $('.owl-buttons .owl-prev i').removeClass('fa fa-angle-left').addClass('xi-angle-left-thin')
                $('.owl-buttons .owl-next i').removeClass('fa fa-angle-right').addClass('xi-angle-right-thin')
			})
	}
})