const searchBar = document.querySelector(".search-bar");
const searchBarInput = document.querySelector(".search-bar-input");

document.addEventListener("click", function (e) {
  if (
    e.target.matches(".search-bar") ||
    e.target.matches(".search-bar-input")
  ) {
    //console.log("here we are");
    searchBar.classList.add("focused");
  } else {
    //console.log("not we are");
    searchBar.classList.remove("focused");
  }
});

if (searchBarInput.value) {
  console.log("here is a value");
}
