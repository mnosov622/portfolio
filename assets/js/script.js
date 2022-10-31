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
AOS.init();

const contactMeBtn = document.querySelector(".header__contact-btn");
const contactsContent = document.querySelector(".header__contacts-content");
const contacts = document.querySelector(".header__contacts");
const closeIcon = document.querySelector(".close-icon");

contactMeBtn.addEventListener("click", () => {
  contacts.classList.remove("close-contacts");
  contactsContent.classList.remove("close-contacts-content");
  contactsContent.classList.add("open-contacts-content");
  contacts.classList.add("open-contacts");
  document.body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  contacts.classList.add("close-contacts");
  contactsContent.classList.add("close-contacts-content");
  document.body.style.overflow = "unset";
});

document.addEventListener("click", (e) => {
  if (e.target === contacts) {
    contacts.classList.add("close-contacts");
    contactsContent.classList.add("close-contacts-content");
    document.body.style.overflow = "unset";
  }
});
