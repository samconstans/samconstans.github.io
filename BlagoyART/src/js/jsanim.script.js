function menu() {
    var sub = document.querySelector('.sub');
    sub.addEventListener('mouseenter', openMenu);
    sub.addEventListener('mouseleave', closeMenu);

    function openMenu() {
        var subMenu = this.querySelector('.sub__first');
        if (subMenu) {
            subMenu.style.display = 'block';
            var nextSub = this.querySelector('.sub');
            if (nextSub) {
                nextSub.addEventListener('mouseenter', openMenu);
            }
        } else {
            return;
        }
    };

    function openMenu() {
        var subMenu = this.querySelector('.sub__first');
        if (subMenu) {
            subMenu.style.display = 'block';
            var nextSub = this.querySelector('.sub');
            if (nextSub) {
                nextSub.addEventListener('mouseenter', openMenu);
            }
        } else {
            return;
        }
    };

    function closeMenu() {
        var subMenu = this.querySelector('.sub__first');
        if (subMenu) {
            var fps = 50;

            var timer = setInterval(function() {
                            if (!subMenu.style.opacity) {
                                subMenu.style.opacity = 1;
                            }
                            subMenu.style.opacity = subMenu.style.opacity - 0.05;
                            if (subMenu.style.opacity <= 0) {
                                clearInterval(timer);
                                subMenu.style.opacity = 1;
                                subMenu.style.display = 'none';
                            }
                        }, 2000 / fps)

            var nextSub = this.querySelector('.sub');
            if (nextSub) {
                nextSub.addEventListener('mouseleave', closeMenu);
            }
        }
    };
}

document.addEventListener('DOMContentLoaded', menu);
