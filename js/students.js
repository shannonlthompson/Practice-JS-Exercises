  var students = [
      { 
        name: "Shannon",
        track: "Front-end Development",
        achievement: 14,
        points: 3349
      },
      { 
        name: "Janie",
        track: "Web Design",
        achievement: 19,
        points: 9842
      },
      { 
        name: "Alfred",
        track: "iOS Development",
        achievement: 4,
        points: 453
      },
      { 
        name: "Carrie",
        track: "Web Development",
        achievement: 34,
        points: 234039
      },
      { 
        name: "Danny",
        track: "iOS Development",
        achievement: 909,
        points: 394829
      }
  ];  

function printArray (myArray) {
    var msg = "";
    for (var i = 0; i < myArray.length; i += 1) {
        msg += "<h2>Student " + (i+1) +"</h2>";
        for (prop in myArray[i]) {
            msg += "<p>" + prop +": "+ (myArray[i])[prop]+"</p>";    
        }
    }
    document.getElementById("output").innerHTML = msg;
}

printArray(students);