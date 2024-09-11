var popupForm = document.querySelector('myForm')
var popuButton = document.querySelector('form-submit')

function submitForm() {
    document.getElementById('myForm').submit();
    alert('Thank you!')
}

//the Modal Box
//document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementsByClassName("modal");
    const submitBtn = document.getElementById("submitBtn");
    const closeBtn = document.getElementsByClassName("close")[0];
 
    // Open the modal when the submit button is clicked
    submitBtn.onclick = function() {
      modal.style.display = 'block'; // Show the modal
    }
  
    // Close the modal when the close button (X) is clicked
    closeBtn.onclick = function() {
      modal.style.display = 'none'; // Hide the modal
    }
  
    // Close the modal if the user clicks outside of the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none'; // Hide the modal
    }
    };

// });