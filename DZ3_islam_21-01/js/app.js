const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();


let slideIndex = 0;

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                slideIndex = i;
                hideTabContent();
                showTabContent(slideIndex);
            }
        });
    }
});

const timer = () => {
    slideIndex++;

    if (slideIndex > 3) {
        slideIndex = 0;
    }
    hideTabContent()
    showTabContent(slideIndex)
}
setInterval(timer, 3000)


const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})

const body = document.getElementsByTagName('html')
const modal1 = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
window.addEventListener('scroll', () => {
    if (document.body.clientHeight - body[0].clientHeight === body[0].scrollTop) {
        modal1.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modalClose.addEventListener('click', () => {
            modal1.style.display = 'none';
            document.body.style.overflow = 'visible';
        });
    }
})


function openModalScroll() {
    const page = document.documentElement;

    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal();

        window.removeEventListener("scroll", openModalScroll);
    }
}

window.addEventListener("scroll", openModalScroll);