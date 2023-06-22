import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>
          ${variables.name == null ? "Valeria" : variables.name} 
          ${variables.lastname == null ? "Salas" : variables.lastname}
          </h1>
          <h2>${
            variables.role == null ? "Full Stack Student" : variables.role
          }</h2>
          <h3>
          ${variables.city == null ? "Heredia" : variables.city},
          ${variables.country == null ? "Costa Rica" : variables.country}
          </h3>

          <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter == null ? "Notengo" : variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github == null ? "Valesa185" : variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin == null
                ? "in/valeria-salas-guzmán-28b55527a"
                : variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram == null ? "valesa_185" : variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://cdn.pixabay.com/photo/2023/04/19/12/50/flowers-7937665_1280.jpg",
    // this is the url for the profile avatar
    avatarURL: "profileImageOfMe.png",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
