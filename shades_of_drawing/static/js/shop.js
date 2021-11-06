var $grid = $('.grid').isotope( {
    itemSelector: '.container-item',
    masonry: {
        columnWidth: 50,
        gutter: 40,
        transitionDuration:1500,
        fitWidth:true  
    }  

});

$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

