$(function() {

	/* Burger */

	$('.burger').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('body').toggleClass('hidden');
		$('.mobMenuSection').slideToggle();
	});

	/* What our users are saying */

	if ($(window).width() > 960) {
		$('.reviewsWrap').slick({
			slidesToShow: 3,
			arrows: false,
			speed: 750
		});
	}

	$('.reviewsArrow.prev').on('click', function(e) {
		e.preventDefault();

		$('.reviewsWrap').slick('slickPrev');
	});

	$('.reviewsArrow.next').on('click', function(e) {
		e.preventDefault();

		$('.reviewsWrap').slick('slickNext');
	});




	/* Video play */

	$(document).on('click', '.videoBlockPreview', function(e) {
		e.preventDefault();

		$('video').each(function() {
			this.pause();
			$(this).parents('.videoBlock').find('.videoBlockPreview').fadeIn();
		});

		$(this).removeClass('active');
		$(this).parents('.videoBlock').find('.videoBlockFrame').addClass('active').find('video')[0].play();
	});




	/* FAQ */

	$('.faqItemQues').on('click', function(e) {
		e.preventDefault();

		$(this).parent().toggleClass('active');
		$(this).next().slideToggle();
	});




	/* Course Contents */

	$('.courseItemInfo').on('click', function(e) {
		e.preventDefault();

		$(this).find('.courseItemArrow').toggleClass('active');
		$(this).next().slideToggle();
	});




	/* Close modals */

	$('.closeModal').on('click', function(e) {
		e.preventDefault();

		$('.overlay, .modal').fadeOut();
	});

	/* Show feedback modal */

	$('.showFeedbackModal').on('click', function(e) {
		e.preventDefault();

		$('.overlay, #feeadBackModal').fadeIn();
	});

	/* Show reset data modal */

	$('.showResetModal').on('click', function(e) {
		e.preventDefault();

		$('.overlay, #resetModal').fadeIn();
	});









});