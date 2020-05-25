$(document).
    ready(
        function () {
            // валидация полей формы
            $('#request-form').validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    tmeme: {
                        required: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: 'Введите адрес электронной почты',
                        email: 'Адрес электронной почты некорректен'
                    },
                    tmeme: {
                        required: 'Введите тему сообщения'
                    },
                    message: {
                        required: 'Введите Ваше сообщение'
                    }
                },
                submitHandler: function (form) {
                    ajaxFormSubmit();
                }
        
            })
                
            // Функция AJAX запрса на сервер
        
            function ajaxFormSubmit() {
        
                let string = $("#request-form").serialize(); // Соханяем данные введенные в форму в строку.
        
                //Формируем ajax запрос
                $.ajax({
                    type: "POST", // Тип запроса - POST
                    url: "php/mail.php", // Куда отправляем запрос
                    data: string, // Какие даные отправляем, в данном случае отправляем переменную string
        
                    // Функция если все прошло успешно
                    success: function (html) {
                        $("#request-form").slideUp(800);
                        $('#answer').html(html);
                    }
                });
        
                // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
                return false;
            }
        
        })