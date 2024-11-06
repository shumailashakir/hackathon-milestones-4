// get refrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input value
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("fathername").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("mobileno").value;
    var cnicno = document.getElementById("cnicno").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>PERSONAL INFORMATION</3>\n    <p><b>NAME:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>FATHERNAME:</b><span contenteditable =\"true\">").concat(fathername, "</span></p>\n    <p><b>ADDRESS:</b><span contenteditable =\"true\">").concat(address, "</span></p>\n    <p><b>EMAIL:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>MOBILE:</b><span contenteditable =\"true\">").concat(mobileno, "</span></p>\n    <p><b>CNICNO:</b><span contenteditable =\"true\">").concat(cnicno, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    //  display the genereted resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
