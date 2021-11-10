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
function nextQuestion(prev, next){
  document.getElementById(prev).style.display = "none"
  document.getElementById(next).style.display = "inline-block"
}
//Goes to the previous question
function prevQuestion(current, prev){
  document.getElementById(current).style.display = "none"
  document.getElementById(prev).style.display = "inline-block"
}