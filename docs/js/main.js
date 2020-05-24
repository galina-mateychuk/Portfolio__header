$(document).
    ready(
        function () {
            // Появление/отключение бокового меню
            const mobileMenuToggle = document.querySelector('.toggle-menu');
            const mobMenu = document.querySelector('.header-top_nav');

            const overlay = document.querySelector('#overlay')
            const bodyElement = document.body;

            mobileMenuToggle.addEventListener('click', function () {
                mobMenu.classList.toggle('active');
                this.classList.toggle('active');
                overlay.classList.toggle('active');
                bodyElement.classList.toggle('noscroll');
            })
            // Отключение бокового меню при ресайзе
            window.addEventListener('resize', function () {
                mobMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                overlay.classList.remove('active');
                bodyElement.classList.remove('noscroll');
            })
            // Выборка карточек
            let containerEl = document.querySelector('#portfolio-works');
            let mixer = mixitup(containerEl, {
            });
            // Приводим карточки к одному размеру
            const filterToggles = document.querySelectorAll('.portfolio-nav button');
            const portfolioBigCards = document.querySelectorAll('.portfolio-works__item');
            for (let i = 0; i < filterToggles.length; i++) {

                filterToggles[i].addEventListener('click', function () {
                    if (i == 0) {
                        for (let j = 0; j < 2; j++) {
                            portfolioBigCards[j].classList.add('.portfolio-works__item-big')
                        }
                    }
                    else {
                        for (let j = 0; j < 2; j++) {
                            portfolioBigCards[j].classList.remove('.portfolio-works__item')
                        }
                    }
                });

            }
            // fake-placeholder
            const formInputs = document.querySelectorAll('.form-field')
            for (let item of formInputs) {

                const inputPlaceholder = item.nextElementSibling;
                item.addEventListener('click', function () {
                    inputPlaceholder.classList.add('active');
                });
                item.addEventListener('blur', function () {
                    if (this.value == '') {
                        inputPlaceholder.classList.remove('active');
                    }
                })
            }
        }
    );