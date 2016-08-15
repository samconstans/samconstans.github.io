$(function () {
        $('.bxslider').bxSlider({
            auto: false,
            pager: false,
            autoControls: true
        });

        function search(page) {
            var $pictures = $('.pictures'),
                $grid;
            $pictures.find('div').remove();

            var $searchKey = $('.search__field').val();

            $.ajax({
                url: 'https://pixabay.com/api/?key=2625721-e3ff5ebd965ddc75924869c3f&q=' + $searchKey + '&page=' + page + '&per_page=10&safesearch=true&lang=en&image_type=photo',
                dataType: 'jsonp',
                success: function (data) {
                    var $html = $('#container').html();
                    var $content = tmpl($html, data);
                    $pictures.append($content);

                    // $grid = $('.grid').masonry({
                    //     itemSelector: '.grid-item',
                    //     columnWidth: '.grid-sizer',
                    //     gutter: '.gutter-sizer',
                    //     percentPosition: true
                    // });

                    // layout Masonry after each image loads
                    // $grid.imagesLoaded().progress( function() {
                    //     $grid.masonry('layout');
                    // });


                    var $grid = $('.grid');
                    $grid.imagesLoaded( function(){
                        $grid.masonry({
                            itemSelector : '.grid-item',
                            columnWidth: '.grid-sizer',
                            gutter: '.gutter-sizer',
                            percentPosition: true
                        });
                    });
                },
                error: function () {
                    $pictures.remove();
                    console.log('Pixabay is now offlane');
                }
            });
        }

        var randomPage = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        search(+randomPage);

        function refreshGrid() {
            search('0');
            $('.search__field').val('');
        }

        $('.search__button').on('click', function (e) {
            e.preventDefault();
            refreshGrid();
        });

        $('.search__field').keyup(function(e){
            if(e.keyCode == 13) {
                refreshGrid();
            }
        });
    }
);
