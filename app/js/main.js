        document.addEventListener('DOMContentLoaded', function() {
            const tabsItems = document.querySelectorAll('.tabs-item');
            
            tabsItems.forEach(item => {
                const head = item.querySelector('.tabs-head');
                
                head.addEventListener('click', function() {
                    // Закрываем все табы
                    tabsItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Открываем/закрываем текущий таб
                    item.classList.toggle('active');
                });
            });
            
            // По желанию: открыть первый таб по умолчанию
            // tabsItems[0].classList.add('active');
        });