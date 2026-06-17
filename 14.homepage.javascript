document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Newsletter Form Submission Handling
    const subscribeForm = document.getElementById("subscribeForm");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector("input[type='email']");
            if (emailInput.value) {
                alert(`Thank you for subscribing with: ${emailInput.value}!`);
                emailInput.value = "";
            }
        });
    }

    // 2. Mobile Footer Collapsible Accordion Menus
    const footerHeaders = document.querySelectorAll(".footer-col h4");
    
    footerHeaders.forEach(header => {
        header.addEventListener("click", () => {
            if (window.innerWidth <= 992) {
                const menu = header.nextElementSibling;
                const toggleIcon = header.querySelector(".mobile-toggle");
                
                menu.classList.toggle("active");
                
                if (menu.classList.contains("active")) {
                    toggleIcon.classList.remove("fa-plus");
                    toggleIcon.classList.add("fa-minus");
                } else {
                    toggleIcon.classList.remove("fa-minus");
                    toggleIcon.classList.add("fa-plus");
                }
            }
        });
    });

    // 3. Keep horizontal rooms scroll wheel intuitive
    const horizontalScrollContainer = document.querySelector(".rooms-container");
    if (horizontalScrollContainer) {
        horizontalScrollContainer.addEventListener("wheel", (evt) => {
            if (window.innerWidth > 992) {
                evt.preventDefault();
                horizontalScrollContainer.scrollLeft += evt.deltaY;
            }
        });
    }
});
