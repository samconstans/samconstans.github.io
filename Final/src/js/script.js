$(function () {

        $('.bxslider').bxSlider({
            auto: false,
            pager: false,
            autoControls: true
        });

        function grid() {
            var $grid = $('.grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: '.gutter-sizer',
                    percentPosition: true
                });
            });
        }

        function search(page) {
            $('.ideas').find('div').remove();
            var $searchKey = $('.search__field').val();

            $.ajax({
                url: 'https://pixabay.com/api/?key=2625721-e3ff5ebd965ddc75924869c3f&q=' + $searchKey + '&page=' + page + '&per_page=10&safesearch=true&lang=en&image_type=photo',
                dataType: 'jsonp',
                success: function (data) {
                    var $html = $('#container').html();
                    console.log(data);
                    var $content = tmpl($html, data);
                    $('.ideas').append($content);
                    grid();
                },
                error: function () {
                    alert('Error!');
                }
            });
        }

        var randomPage = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        // console.log(randomPage);
        search(+randomPage);

        $('.search__button').on('click', function (e) {
            e.preventDefault();
            search('1');
            $('.search__field').val('');
        })
    }
);
