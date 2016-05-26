$(function(){
    var html = $('#profile').html();
    var data = {
        name : 'Грахов Сергей',
        photo: {
            src: 'img/Photo3.jpg',
            alt: 'My photo',
            title:'Vovk Anastasiya',
            width:'200'
        },
        job: 'junior front-end developer',
        why: 'Хочу учить фронтенд, потому что:',
        reasons: ['Хочу сменить род деятельности',
            'Скучно',
            'Всегда хотела заниматься разработкой'],
        tel:'Мой контакный телефон',
        number: '+380509304787',
        fb: 'Мой профиль фейсбук',
        fb_link: '<a href="https://www.facebook.com/anastasia.vovk">fb.com</a>',
        feedback: 'Мой фидбек:',
        feedback_text: 'Воплощать идеи заказчиков в жизнь'
    };
    var content = tmpl(html, data);
    $('body').append(content);
});