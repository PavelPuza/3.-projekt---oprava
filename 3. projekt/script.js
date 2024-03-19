const input = document.querySelectorAll("input");
const scroll = document.querySelector("#scrollToTop");
const stika = document.querySelectorAll(".stika");
const passwordInputs = document.querySelectorAll(".password-input");
const paragraphText = document.querySelector(".result-text");
const menuIcon = document.querySelector(".menu-icon");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuList = document.querySelector("nav");

/* MODE */

const btn = document.querySelector(".light");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

/* PICTURE SCALE */

stika.forEach((stika) => {
  stika.addEventListener("mouseenter", () => {
    stika.style.transform = "scale(1.2)";
  });

  stika.addEventListener("mouseleave", () => {
    stika.style.transform = "scale(1)";
  });
});

class twoContentChecker {
  constructor(twoHTMLtags) {
    this.twoHTMLtags = twoHTMLtags;
  }

  /* PASSWORD */

  getInputContent = (input) => {
    return input.value;
  };

  insertContent = (htmlTag, content) => {
    htmlTag.textContent = content;
  };

  addClass = (htmlTag, className) => {
    htmlTag.classList.add(className);
  };

  removeClass = (htmlTag, className) => {
    htmlTag.classList.remove(className);
  };

  htmlTagCleaner = (input1Value, input2Value, htmlTag) => {
    if (input1Value == "" && input2Value == "") {
      htmlTag.textContent = "";
    }
  };
}

const inputChecker = new twoContentChecker(passwordInputs);

inputChecker.twoHTMLtags.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const password1Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[0]
    );
    const password2Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[1]
    );

    if (password1Value == password2Value) {
      inputChecker.insertContent(paragraphText, "Hesla jsou shodné.");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Hesla nejsou shodné.");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }

    inputChecker.htmlTagCleaner(password1Value, password2Value, paragraphText);
  });
});

/* SCROLL UP */

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* MENU ICON */

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
