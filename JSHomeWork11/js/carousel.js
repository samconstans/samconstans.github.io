(function($) {
    $.fn.slider = function(options) {
        var defaults = {
            'auto': false, // Автопроигрывание, по умолчанию false
            'cursor': false, // Пауза при наведении курсора мыши на изображение, по умолчанию false
            'speedText': 400, // Скорость появления текста на слайдере, по умолчанию 4 мсек
            'speed': 600, // Скорость смены слайдa при клике, по умолчанию 600
            'autoSpeed': 5000 // Скорость смены слайдов при автопроигрывании, по умолчанию 5 секунд
        }
        return this.each(function() {
            if (options) {
                $.extend(defaults, options);
            }

        var $left = $('.arrow-left');
        var $right = $('.arrow-right');
        var $list = $('.slider-list');
        var $listHeader = $('.slider-header');
        var $slideWidth = $('.slider-element').outerWidth(); // переменная определяет размер слайдера
        var $scrollSlider = $list.position().left - $slideWidth;

        // Листает слайды влево
        $left.on('click', function(event){
            if(!$list.is(':animated')) {
                $list
                    .css({
                        'left': $scrollSlider
                    })
                    .find('.slider-element:last')
                    .prependTo($list)
                    .parent()
                    .animate({
                        left: 0
                    }, defaults.speed);
            }
            event.preventDefault();
        });
        // Листает слайды вправо
        $right.on('click', function(event) {
            if(!$list.is(':animated')) {
                $list.animate({
                    left: $scrollSlider
                }, defaults.speed, function(){
                    $list
                        .find('.slider-element:first')
                        .appendTo($list)
                        .parent()
                        .css({
                            'left': 0
                        });
                });
            }
            event.preventDefault();
        });
        
        // Автопрокрутка
        if (defaults.auto === true) {
            var timer = function() {
                if(!$list.is(':animated')) {
                 $list.animate({
                    left: $scrollSlider
                 }, defaults.speed, function(){
                  $list
                   .find('.slider-element:first')
                   .appendTo($list)
                   .parent()
                   .css({
                       'left': 0
                   });
                 });
                }
            };
            var interval = setInterval(timer, defaults.autoSpeed);
            // Пауза при наведении курсора мыши на изображение
            if (defaults.cursor === true) {
                $list.hover(function() {
                    clearInterval(interval);
                }, function() {
                    interval = setInterval(timer, defaults.autoSpeed);
                });
            }
            // Сбрасываем таймер, когда нажата кнопка вправо или влево
            $right.on('click', function() {
                clearInterval(interval);
                interval = setInterval(timer, defaults.autoSpeed);
            });
            $left.on('click', function() {
                clearInterval(interval);
                interval = setInterval(timer, defaults.autoSpeed);
            });
        }
    });
};
})(jQuery);



