// SLIDER
$(function() {
    $('.slider').slider({
        auto: true, // Автопроигрывание, по умолчанию false
        cursor: true, // Пауза автопроигрывания при наведении курсора мыши на изображение, по умолчанию false
        speedText: 500, // Скорость появления текста на слайдере, по умолчанию 4 мсек
        speed: 1000, // Скорость смены слайдa при клике, по умолчанию 6 милисекунд
        autoSpeed: 6000 // Скорость смены слайдов при автопроигрывании, по умолчанию 5 секунд
    });
});

$(function() {
    var html = $('#author').html();
    var about = [
        {
            avatar: '<img src="img/icons/Photo3.jpg" width="100%" height="100%" alt="I am" title="I am :-)">'
        },
        {
            button: "Edit"
        },
        {
            name: 'Anastasiya',
            lastname: 'I.',
            surname: 'Vovk'
        },
        {
            from: '<a href="https://en.wikipedia.org/wiki/Cherkasy" target="_blank" title="My city">Kiyv</a>'
        },
        {
            title: 'Current city:',
            labeled: 'Kiyv'
        },
        {
            title: 'Relationship status:',
            labeled: 'Married'
        },
        {
            title: 'Company:',
            labeled: 'Freelance'
        },
        
    ];
    var contact = [
        {
            heading: 'Contact information'
        },
	{
	    heading: 'Personal information'
	},
        {
            title: 'Mobile:',
            labeled: '+12138455654i'
        },
        {
            title: 'Skype:',
            labeled: 'nastia-vovk'
        },
        {
            title: 'Facebook:',
            labeled: '<a href="https://www.facebook.com/anastasia.vovk" target="_blank" title="facebook">Vovk Anastasia</a>'
        },
        {
            title: 'VK:',
            labeled: '<a href="http://vk.com/id3828876" target="_blank" title="facebook">Fedotova Anastasia</a>'
        },
        {
            show: 'Show full information',
	    edit: 'Edit'
        },
    ];
    var answers = [
        {
            title: 'I want to learn Front-end Web Development, because:'
        },
        {
            answer: '<p><span>1.</span>I want to know all the secrets of frontend</p>'
        },
        {
            answer: '<p><span>2.</span>I get from it a lot of fun</p>'
        },
        {
            answer: '<p><span>3.</span>I like it!</p>'
        }
    ];
    var post = [
        {
            tab: 'All posts'
        },
        {
            tab: 'My posts'
        },
        {
            delete: 'Delete post',
            pin: 'Pin post'
        }
    ];
    var counts = [
        {
            count: '111',
	    title: 'friends'
        },
        {
            count: '382',
	    title: 'follower'
        },
        {
            count: '101',
	    title: 'photos'
        },
        {
            count: '19',
	    title: 'tags'
        },
        {
            count: '1,124',
	    title: 'videos'
        }
    ];
    var wall = [
        {
            user: '<img src="img/users/puvvl-small.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: '#optimization <img src="http://vk.com/images/emoji/D83DDE04.png" alt="">',
            date: '12 May at 12:43 pm',
	    thumbed: '<img src="img/uploads/22c4ee88cd89d60fcc.gif" alt="">',
	    like: 'Like',
	    lCount: '2357',
	    share: 'Share',
	    sCount: '361',
	    comment: 'Comment'
        },
        {
            user: '<img src="img/users/puvvl-small.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: ' ',
            date: '5 May at 1:58 pm',
	    thumbed: '<img src="img/uploads/eD0PHUGm3Y4.jpg" alt="">',
	    like: 'Like',
	    lCount: '325',
	    share: 'Share',
	    sCount: '28',
	    comment: 'Comment'
        },
        {
            user: '<img src="img/users/puvvl-small.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            date: '3 May at 23:49 pm',
            text: '#bestfriend <img src="http://vk.com/images/emoji/D83DDE04.png" alt="">',
	    thumbed: '<img src="https://psv4.vk.me/c609323/u140417658/docs/732b54be81d0/Kogda_Taschish_Pyanogo_Druga_Damoy.gif?extra=OoLmRswXXxtDq8hqd4yitutw0JgHL7ekT5wYoY5UrhOcL65cEs3tZfeDRZ05H3LVi3qYFRHsAnjo1bcsxBSfe8yV7H-WYdzPFWe-Ibg51cIvnY0Qvxp9ZRI" alt="">',
	    like: 'Like',
	    lCount: '4582',
	    share: 'Share',
	    sCount: '529',
	    comment: 'Comment'
        },
    ];
    var content = tmpl(html, {
        header: about,
        main: answers,
        info: contact,
        feedback: post,
	counts: counts,
	wall: wall
    });
    $('.wrapper').append(content);
})
//ANIMATION
$(function() {
    $('.page__edit__button').hide();
    $('.info__edit__button').hide();

    $('.contact__info').hover(function() {
        $('.contact__heading').css({'width': '630px'});
        $('.page__edit__button').show(200);
    }, function() {
        $('.page__edit__button').hide();
        $('.contact__heading').css({'width': '670px'});
    });

    $('.profile__info').hover(function() {
        $('.profile__heading').css({'width': '630px'});
        $('.info__edit__button').show(200);
    }, function() {
        $('.info__edit__button').hide();
        $('.profile__heading').css({'width': '670px'});
    });

//SHOW INFO
    var profile = $('.profile__more__info');
    var show = profile.css('display', 'block');
    var hide = profile.css('display', 'none');
    $('#show').on('click', function(event) {
        event.preventDefault()
        if(profile.is(':visible')) {
            profile.slideUp(500) && $('#show').text('Show full information');
        } else {
            profile.slideDown(500) && $('#show').text('Hide full information')
        }
    });

});