$(document).
    ready(
        function () {

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

            window.addEventListener('resize', function(){
                mobMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                overlay.classList.remove('active');
                bodyElement.classList.remove('noscroll');
            })

        let containerEl = document.querySelector('#portfolio-works');
        let mixer = mixitup(containerEl, {
            
        })
        
        }
    );