var employeeQuestionnaires = [[]]; //id, q1, weighing
var employerQuestionnaires = [[]];

var majors = new Array(300);
readTextFile('selection1.txt')
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                majors = (allText.split("\n"));
            }
        }
    }
    rawFile.send(null);
}
for(var i=0; i<294; i++){
  var option = document.createElement("option");
  option.text = String(majors[i]);
  document.getElementById("s0").add(option);
}
var environmentTypes = ["--","A conventional work environment", "A enterprising work environment", "A social work environment", "A artistic work environment", "A investigative work environment", "A realistic work environment"] 
for(var i=0; i<6; i++){
  var o = document.createElement("option");
  o.text = environmentTypes[i];
  document.getElementById("s1").add(o);
}
var shifts = ["--", "First Shift", "Second Shift", "Third Shift", "Fixed Shift", "Rotating Shift", "Split Shift", "On-Call Shift", "Weekday Shift", "Weekend Shift"];
for(var i=0; i<shifts.length; i++){
  var o = document.createElement("option");
  o.text = shifts[i];
  document.getElementById("s2").add(o);
}


var questions=[], importance=[];
for(var i=0; i<3; i++){
  console.log("s"+String(i));
  questions[i] = document.getElementById("s"+String(i));
  importance[i] = document.getElementById("i"+String(i));
}
function submitQuestionnaire(){
  var qinfo = [];
  for(var i=0; i<questions.length; i++){
    qinfo.push(questions[i].value);
    qinfo.push(importance[i].value);
  } 
  employeeQuestionnaires.push(qinfo);
}
