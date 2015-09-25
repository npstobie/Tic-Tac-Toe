window.onload = function(){
	boardBuilder()
}

var count = 0;

function boardBuilder(){
	for (var i=0; i<9; i++) {
		var box = $('body').append("<div class='box' id='box" + i + "'>");

		if (i === 2 || i === 5) {
			$('body').append('<br>')
		}
	}
	$(".box").on('click', function(){
		
		if (count % 2 === 0) {
			this.innerHTML = 'x';
		} else {
			this.innerHTML = 'o'
		}
		count += 1;
	})
};







