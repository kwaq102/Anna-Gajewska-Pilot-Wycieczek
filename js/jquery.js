const $doc = $(document);
const $header = $('header');

$doc.on('scroll', function () {
    const scrollPosition = $doc.scrollTop();
    const headerHeight = $header.outerHeight();
    $header.css({
        'opacity': 1 - scrollPosition / headerHeight,
        'filter': 'grayscale(' + 2 * scrollPosition / headerHeight + ')'
    })
})

// $('nav ul li a').on('click', function () {
//     const goToSection = "." + $(this).attr('id');

//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top
//     })
// })