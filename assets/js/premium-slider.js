
// Version 2 code start
var closeModal = document.querySelector(".premium-resource .modal-close");
var modalContainer = document.querySelector(".modal-container");
var premiumButton = document.querySelector(".premium-button");
console.log(premiumButton);

premiumButton.addEventListener("click", function() {
    modalContainer.classList.add("slide");
});

closeModal.addEventListener("click", function() {
    modalContainer.classList.remove("slide");
});

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        if (!modalContainer.contains(event.target) && !premiumButton.contains(event.target)) {
            if (!premiumButton.contains(event.target) && !premiumButton.contains(event.target)) {
                modalContainer.classList.remove("slide");
            } else {
                modalContainer.classList.add("slide");
            }
            
        }
    });
});

let filterSearchInput = document.querySelector(".filter-search-input");

filterSearchInput?.addEventListener("focus", function (e) {
  handleFocus()
})
filterSearchInput?.addEventListener("blur", function (e) {
  handleOutsideFocus()
})


let searchBox = document.getElementById("search-input");

function handleFocus() {
  searchBox.classList.add("set-shadow")
}
function handleOutsideFocus() {
  searchBox.classList.remove("set-shadow")
}