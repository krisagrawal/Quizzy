//signup
function signupButton() {
    if(document.getElementById("teacher").checked) {
        document.getElementById("signup").href="teacher-dashboard.html";
    } 
    else if(document.getElementById("student").checked) {
        document.getElementById("signup").href="student-dashboard.html";
    }
    else {
        alert("Please select a field!");
    }
    return false;
}

//delete a quiz
function deleteQuiz() {
  const element = document.getElementById("box1");
  element.remove();
  document.getElementById("container").style.height = "250px";
  document.getElementById("buttons").style.visibility = "visible";
}

//search bar
function search() {
  const collection = document.getElementsByClassName("searches");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.visibility = "visible";
  }
  if(document.getElementById("input").value.length == 0) {
    const collection = document.getElementsByClassName("searches");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.visibility = "hidden";
    }
  }
}
