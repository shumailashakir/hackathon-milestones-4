// get refrences to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

// handle form submission
form.addEventListener("submit" , ( event: Event) => {
event.preventDefault();

    // collect input value

    const name = (document.getElementById("name") as HTMLInputElement).value
    const fathername = (document.getElementById("fathername") as HTMLInputElement).value
    const address = (document.getElementById("address") as HTMLInputElement).value
    const  email =(document.getElementById("email") as HTMLInputElement).value
    const  mobileno =(document.getElementById("mobileno") as HTMLInputElement).value
    const cnicno = (document.getElementById("cnicno") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>PERSONAL INFORMATION</3>
    <p><b>NAME:</b><span contenteditable ="true">${name}</span></p>
    <p><b>FATHERNAME:</b><span contenteditable ="true">${fathername}</span></p>
    <p><b>ADDRESS:</b><span contenteditable ="true">${address}</span></p>
    <p><b>EMAIL:</b><span contenteditable ="true">${email}</span></p>
    <p><b>MOBILE:</b><span contenteditable ="true">${mobileno}</span></p>
    <p><b>CNICNO:</b><span contenteditable ="true">${cnicno}</span></p>

    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
//  display the genereted resume
if (resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
 } else{
        console.error("The resume display element is missing.")
    }

} ) 


