
//Toogles section.
function startToggle() {
    var toggle = document.getElementById("form");
    toggle.style.display = toggle.style.display === "none" ? "block" : "none";
  }
//Sets values.
  var resultModal = document.getElementById('resultModal');
  resultModal.addEventListener('show.bs.modal', function (event) {
        let firstNameInput = document.getElementById("firstName").value;
        let lastNameInput = document.getElementById("lastName").value;
        let modalBodyInput = resultModal.querySelector('.modal-body b');
        let str = `${firstNameInput} ${lastNameInput}, your custom banner is ready! `;
        modalBodyInput.textContent = str;

        let colorSelected = document.getElementById("colorInput").value;
        document.getElementById("customRectangle").style.backgroundColor = colorSelected;

        let firstImageRadio = document.getElementById("img1").checked;
        let secondImageRadio = document.getElementById("img2").checked;
        if(firstImageRadio){
          let firstImage = document.getElementById("bckgImg1").src; 
          let firstNewImage = document.getElementById('customImage1');
          firstNewImage.src = firstImage; 
        }
        if(secondImageRadio){
          let secondImage = document.getElementById("bckgImg2").src; 
          let secondNewImage = document.getElementById('customImage1');
          secondNewImage.src = secondImage;
        }
});
//Validates inputs.
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('show.bs.modal', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



