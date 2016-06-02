$(function() {
    $('.carousel').carousel();

    //шаблон
    var data = {
        name: 'Vovk Anastasiya',
        photo: {
            src: 'img/Photo3.jpg',
            alt: 'We are'
        },
        job: 'Front end developer',
        why: 'I want to work front-end developer, because:',
        reasons: ['I want to change the type of activity',
                 'Boring',
                 'I always wanted to develop'],
        tel: 'My phone:',
        number: '+380509304787',
        fb: 'My profile in social networks:',
        fb_link: '<a href="https://www.facebook.com/anastasia.vovk">fb.com</a>',
        feedback: 'My feedback:',
        feedback_text: 'Embody the customers ideas to life'
    }

    // JavaScript Micro-Templating
    var profile = $('#profile').html();
    var content = tmpl(profile, data);
    $('.shablon').append('<h2>JavaScript Micro-Templating</h2>');
    $('.shablon').append(content);

    // Шаблонизатор LoDash
    var profile = $('#profile').html();
    var content = _.template(profile)(data);
    $('.shablon').append('<h2>LoDash</h2>');
    $('.shablon').append(content);
});
