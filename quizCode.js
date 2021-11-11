//Hides all Quiz elements besides Intro
window.onload = function() {
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'none';
  document.getElementById('question7').style.display = 'none';
  document.getElementById('quizResults').style.display = 'none'
}
//Goes to the next question
function nextQuestion(current, next){
  document.getElementById(current).style.display = "none"
  document.getElementById(next).style.display = "inline-block"
}
//Goes to the previous question
function prevQuestion(current, prev){
  document.getElementById(current).style.display = "none"
  document.getElementById(prev).style.display = "inline-block"
}
//Goes to the Results screen
function resultsScreen(){
  calculatingResults()
  document.getElementById('question7').style.display = "none"
  document.getElementById('quizResults').style.display = "inline-block"
}
//calculates results and displays message based on differing score
function calculatingResults(){
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }
  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }
  
  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }
  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }
  
  const radios6 = document.querySelectorAll('input[name="quest6"]');
  let q6Value;
  for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
  }
  const radios7 = document.querySelectorAll('input[name="quest7"]');
  let q7Value;
  for (const rb of radios7) {
      if (rb.checked) {
          q7Value = rb.value;
          break;
      }
  }
  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value) + Number(q7Value)
  result = total
  if (result == 21){
    msg = "You have gotten everything correct, well done!";
  } else if (result == 0){
    msg = "You have managed to get everything incorrect, well done!";
  } else {
    msg = "You're almost there, try again and get everything correct!";
  }

  document.getElementById("result").innerHTML = msg
}