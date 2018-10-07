

// PRINTING DATA //

// console.log(data);

$(document).ready(function() {

    for (i = 0; i < data.movies.length; i++) {
    	$('.movie-content').prepend('<div class="movie-container col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ' + data.movies[i].genre +
                                    '" data-year="' + data.movies[i].year +'" data-length="' + data.movies[i].length +'" data-likes="' + data.movies[i].likes + ' ">' + 
    								'<div><div class="row"><div class="col-4"><img class="float-left" src="' + 
    								data.movies[i].image + '" alt="' + data.movies[i].title +
    								'"></div><div class="teaser-text col-8 "><h3 class="movie-title">' + 
    								data.movies[i].title + ' <button class="expand expand' + data.movies[i].movieID + 
                                    '"><i class="fas fa-expand"></i></button><button class="closeOverlay"><i class="fas fa-window-close"></i></button>' + 
                                    '</h3><span class="genre">' + data.movies[i].genre + 
    								'</span><br><span class="shortinfo">' + data.movies[i].year + ', ' + 
    								data.movies[i].length + ' mins</span><br><p class="summary">' + 
    								data.movies[i].teaser + '</p>' + 
    								'<div class="inc button"><i class="like fas fa-thumbs-up" ></i>' + 
    								'</div><input class="result-likes" type="text" value="' + data.movies[i].likes +'" disabled >' + 
                                    '<div class="description">' + data.movies[i].desc + '</div>')
	};


/// OVERLAY ///
$(".expand").on("click", function() {
    var $expand = $(this);
    $expand.parent().parent().parent().parent().parent()
    .prependTo("body")
    .attr('id', 'expandContent')
    .removeClass('col-sm-6 col-md-6 col-lg-6 col-xl-6')
    .hide().fadeIn(300);
    $expand.parent().parent().parent().parent().parent().parent().find('#overlay').css('display', 'block');

});

/// CLOSE OVERLAY ///
$(".closeOverlay").on("click", function() {
    var $close = $(this);
    $close.parent().parent().parent().parent().parent()
    .prependTo(".movie-content").addClass('col-sm-6 col-md-6 col-lg-6 col-xl-6')
    .removeAttr('id').hide().fadeIn(300);
    $close.parent().parent().parent().parent().parent().parent().parent().parent().parent().find('#overlay').css('display', 'none');
});


/// LIKE BUTTON ///
$(".button").on("click", function() {
    var $button = $(this);
    var oldLikes = $button.parent().find("input").val();
    var newLikes = parseInt(oldLikes) + 1;
    /// print the new likes into input field
    $button.parent().find("input").val(newLikes).hide().slideDown(150);
    /// print likes into data-attribute - thx for the help, mario.
    $button.parent().parent().parent().parent()[0].dataset.likes = newLikes; 
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
            $('.Comedy').show(300);
        })

$('.cat-doc').on('click', function() {
            $('.Drama, .Comedy').hide(300);
            $('.Documentary').show(300);
        })

$('.cat-all').on('click', function(){
            $('.Drama, .Comedy, .Documentary').show(300);
        })
});









