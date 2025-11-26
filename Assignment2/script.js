// When the form is submitted
document.getElementById("idForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
  
    // Getting values from form inputs
    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const concentration = document.getElementById("concentration").value;
  
    // Outputting values into the ID card
    document.getElementById("nameOutput").textContent = name;
    document.getElementById("studentIdOutput").textContent = studentId;
    document.getElementById("concentrationOutput").textContent = concentration;
  
    // Hide form, show ID Card
    document.getElementById("formSection").style.display = "none";
    document.getElementById("idCard").style.display = "flex";
  });
  