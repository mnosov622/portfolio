// $(function() {                       
//     $(".header__contact-btn").click(() => { 
        
//       $(".header__contacts-content").addClass("open-contacts-content");
//       $(".header__contacts").addClass("open-contacts");
//     });

//     $(".close-icon").click(() => {
//         $(".header__contacts-content").removeClass("open-contacts-content"); 
//         $(".header__contacts").removeClass("open-contacts");
//     })

//     $('.header__contacts').click(function(e){
//         e.stopPropagation();
//     });

// });

const contactMeBtn = document.querySelector(".header__contact-btn");
const contactsContent = document.querySelector(".header__contacts-content");
const contacts = document.querySelector(".header__contacts");
const closeIcon = document.querySelector(".close-icon");

contactMeBtn.addEventListener("click", () => {
    contactsContent.classList.add("open-contacts-content");
    contacts.classList.add("open-contacts");
})


closeIcon.addEventListener("click", () => {
    contactsContent.classList.remove("open-contacts-content");
    contacts.classList.remove("open-contacts");
})

