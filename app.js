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
const form = document.getElementById("contact-form");
const inputFields = document.querySelectorAll(".input-field");
const alert = document.querySelector(".alert");

// emailjs.init("");

sectionBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        sectionBtns.forEach(btn => btn.classList.remove("active-btn"))
        const currentBtn = e.currentTarget;
        currentBtn.classList.add("active-btn");

        //add active class for the button clicked
        // sectionBtns.forEach(btn => btn.classList.remove("active"))
        // currentBtn.classList.add("active")
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
        showCertificationBtn.classList.remove("rotated");    
    } else {
        showCertificationBtn.parentElement.classList.add('extend');
        showCertificationBtn.classList.add("rotated");
    }
})

//expanding blog
expandBtns.forEach(btn => (btn.addEventListener("click", (e) => {
    //know which blog is selected and add a class to expand it
    const blog = e.currentTarget.parentElement.parentElement;
    blog.classList.add("expanded");

    //copy the selected blog in order to add a button element
    const selectedBlog = blog.cloneNode(true);
    selectedBlog.insertAdjacentHTML('beforeend','<i class="close-btn fa-solid fa-x"></i>');

    //add the copied element to the ready made html container
    expandedBlogContainer.appendChild(selectedBlog);
    expandedBlogContainer.classList.add("visible-expanded-blog");
    window.scrollTo(0, 0);

    //making the height of the blogs section not much more than the expanded blog
    const expandedBlogHeight = selectedBlog.getBoundingClientRect().height;
    const remSizeInPixel = parseFloat(getComputedStyle(document.documentElement).fontSize);
    console.log(remSizeInPixel);
    blogsSection.style.height = `${expandedBlogHeight + (2 * 12 *  remSizeInPixel)}px`;
    blogsSection.style.overflow = "hidden";

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        expandedBlogContainer.classList.remove("visible-expanded-blog");
        expandedBlogContainer.innerHTML="";
        blogsSection.style.height="auto";
        blogsSection.style.overflow="auto";
    })
    
    // blogsSection.style.height="100vh";
    // blogsSection.style.overflow="hidden";

})))

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert.style.display="block";

    const formData = new FormData(e.target);

    const emailData = {
        "name": formData.get("name"),
        "email": formData.get("email"),
        "subject": formData.get("subject"),
        "message": formData.get("message")
    };

    emailjs.send("service_86qyy7c", "template_vo3mqud", emailData)
    .then(function(response) {
      console.log("Message sent successfully", response);
      alert.innerHTML = "Your message has been sent!";
      alert.classList.add("alert-success");
      inputFields.forEach(inputfield => {
          inputfield.value="";
      })

      setTimeout(() => {
        clear();
      }, 3000);
    }, function(error) {
      console.error("Failed to send message", error);
      alert.innerHTML = "Failed to send your message. Please try again later.";
      alert.classList.add("alert-danger");

      setTimeout(() => {
        clear();
      }, 3000);
    });
    // console.log([...formData.entries()]);
})

function clear() {
    alert.classList.remove("alert-success");
    alert.classList.remove("alert-danger");
    alert.style.display="none";
}