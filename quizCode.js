window.onload = function() {
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'none';
  document.getElementById('question7').style.display = 'none';
  document.getElementById('results').style.display = 'none'
}
function quizIntro() {
  document.getElementById("intro").style.display = "inline-block";
  document.getElementById("question1").style.display = "none";
  document.getElementById("results").style.display = "none";
}
function question1() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
    document.getElementById("question2").style.display = "none";
  }
  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
    document.getElementById("question3").style.display = "none";
  }
  function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
    document.getElementById("question4").style.display = "none";
  }
  function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
    document.getElementById("question5").style.display = "none";
  }
  function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
    document.getElementById("question6").style.display = "none";
  }
  function question6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "inline-block";
    document.getElementById("question7").style.display = "none";
  }
  function question7() {
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "inline-block";
    document.getElementById("results").style.display = "none";
  }
  function results()  {
    // calculateResults()
    document.getElementById("question7").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
  }