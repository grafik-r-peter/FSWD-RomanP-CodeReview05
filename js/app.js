

// PRINTING DATA //

console.log(data);

$(document).ready(function() {

    for (i = 0; i < data.movies.length; i++) {
    	$('.movie-content').prepend(' <!-- ITEM --><div class="movie-container col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ' + data.movies[i].genre +'" data-year="' + data.movies[i].year +'" data-length="' + data.movies[i].length +'" data-likes="' + data.movies[i].likes + ' ">' + 
    								'<div><div class="row"><div class="col-4"><img class="float-left" src="' + 
    								data.movies[i].image + '" alt="' + data.movies[i].title +
    								'"></div><div class="teaser-text col-8 "><h3 class="movie-title">' + 
    								data.movies[i].title + '</h3><span class="genre">' + data.movies[i].genre + 
    								'</span><br><span class="shortinfo">' + data.movies[i].year + ', ' + 
    								data.movies[i].length + ' mins</span><br><p class="summary">' + 
    								data.movies[i].teaser + '</p>' + 
    								'<div class="inc button"><i class="like fas fa-thumbs-up" ></i>' + 
    								'</div><input class="result-likes" type="text" value="' + data.movies[i].likes +'" disabled >')
	};


/// LIKE BUTTON ///

$(".button").on("click", function() {

    var $button = $(this);
    var oldLikes = $button.parent().find("input").val();

    if ($button.text() == '') {
  	  var newLikes = parseFloat(oldLikes) + 1;
  	}

    $button.parent().find("input").val(newLikes);

});


/// SORT FUNCTION ///

/// sort by likes ///
$('.sortLikes').on("click", function() {
	var $wrapper = $('.movie-content');

	$wrapper.find('.movie-container').sort(function (a, b) {
	    return +b.dataset.likes - +a.dataset.likes;
	})
	.appendTo( $wrapper );
})

/// sort by length ///
$('.sortLength').on("click", function() {
	var $wrapper = $('.movie-content');

	$wrapper.find('.movie-container').sort(function (a, b) {
	    return +b.dataset.length - +a.dataset.length;
	})
	.appendTo( $wrapper );
})

/// sort by Year ///
$('.sortYear').on("click", function() {
	var $wrapper = $('.movie-content');

	$wrapper.find('.movie-container').sort(function (a, b) {
	    return +b.dataset.year - +a.dataset.year;
	})
	.appendTo( $wrapper );
})

/// FILTER ///

$('.cat-drama').on('click', function() {
            $('.Comedy, .Documentary').hide(300);
            $('.Drama').show(300);
        })

$('.cat-comedy').on('click', function() {
            $('.Drama, .Documentary').hide(300);
            $('.notebook').show(300);
        })

$('.cat-doc').on('click', function() {
            $('.Drama, .Comedy').hide(300);
            $('.Documentary').show(300);
        })

$('.cat-all').on('click', function(){
            $('.Drama, .Comedy, .Documentary').show(300);
        })


});









