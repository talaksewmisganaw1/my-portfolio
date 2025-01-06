const sections = document.querySelectorAll('.section');
const btnsContainer = document.querySelector(".controls");
const sectionBtns = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');


sectionBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        sectionBtns.forEach(btn => btn.classList.remove("active-btn"))
        const currentBtn = e.currentTarget;
        currentBtn.classList.add("active-btn");

        //add active class for the button clicked
        sectionBtns.forEach(btn => btn.classList.remove("active"))
        currentBtn.classList.add("active")
        const id = e.currentTarget.dataset.id;
        const currentSection = document.getElementById(id);

        //add active class for the sections with the id of the clicked button's "data-id"
        sections.forEach(section => section.classList.remove("active"));
        currentSection.classList.add("active");
    })
})

