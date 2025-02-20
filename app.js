const sections = document.querySelectorAll('.section');
const btnsContainer = document.querySelector(".controls");
const sectionBtns = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');
const showCertificationBtn = document.querySelector('.show-btn');
const certificationContainer = document.querySelector('.certifications')
const certificates = document.querySelector('.certificates');
const showIcon = document.querySelector('.show-icon');
const expandBtns = document.querySelectorAll('.expander');
const expandedBlogContainer = document.querySelector(".expanded-blog-container");
const blogsSection = document.getElementById("blogs");

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

//toggle theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
})

// toggle the certificates link & description

showCertificationBtn.addEventListener("click", () => {
    certificates.classList.toggle("shown");
    if(!certificates.classList.contains("shown")) {
        showCertificationBtn.parentElement.classList.remove('extend');
        // showCertificationBtn.innerHTML=`<i class="fa-solid fa-caret-down">`
        showCertificationBtn.classList.remove("rotated");    
    } else {
        showCertificationBtn.parentElement.classList.add('extend');
        // showCertificationBtn.innerHTML=`<i class="fa-solid fa-caret-up">`
        showCertificationBtn.classList.add("rotated");
    }
})

//expanding blog
expandBtns.forEach(btn => (btn.addEventListener("click", (e) => {
    const blog = e.currentTarget.parentElement.parentElement;
    blog.classList.add("expanded");

    const selectedBlog = blog.cloneNode(true);
    selectedBlog.insertAdjacentHTML('beforeend','<i class="close-btn fa-solid fa-x"></i>');

    console.log(selectedBlog)
    expandedBlogContainer.appendChild(selectedBlog);
    expandedBlogContainer.classList.add("visible-expanded-blog");
    
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        expandedBlogContainer.classList.remove("visible-expanded-blog");
        expandedBlogContainer.innerHTML="";
    })
    
    // blogsSection.style.height="100vh";
    // blogsSection.style.overflow="hidden";

})))