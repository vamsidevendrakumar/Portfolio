document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu_btn");
  const menu = document.getElementById("menu");
  const navLinks = document.querySelectorAll("#menu a");
  const contactButton = document.getElementById("contactButton");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
      menuBtn.textContent = "menu";
    } else {
      menuBtn.textContent = "close";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
        menuBtn.textContent = "menu";
      }
    });
  });

  contactButton.addEventListener("click", function () {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();

    if (name === "" || email === "") {
      alert("Please fill out the form completely.");
      return;
    }

    const subject = encodeURIComponent("Hello from Portfolio Website");
    const body = encodeURIComponent(`Hi, I am ${name}`);
    const mailtoLink = `mailto:vamsidevendrakumark@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
  });
});
