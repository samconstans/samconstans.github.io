$(document).ready(function() {
	$('#signup').validate({
		
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				rangelength: [8,16]
			},
			confirm_password: {equalTo: '#password'},
			spam: "required"
		}, // end rules

		messages: {
			email: {
				required: "Введите aдрес электронной почты",
				email: "Это некорректный адрес электронной почты"
			},

			password: {
				required: 'Введите пароль',
				rangelength: 'Пароль должен содержать от 8 до 16 символов'
			},

			confirm_password: {
				equalTo: 'Пароли не совпадают.'
			}

		errorPlacement:function(error, element) {
			if (element.is(":radio") || element.is(":checkbox")) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		} // end errorPlacement

		} // end messages
	});		
}); // конец ready
