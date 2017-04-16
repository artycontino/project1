var correctAnswers=[0,1,2,0];{


var AnsweredCorrectly=0;{


function start(){
document.getElementById('quizstart').style.display="none";
document.getElementById('question0').style.display="block";
}
function toggle(a,b){
AnsweredCorrectly+=(document.getElementsByName('ans'+a)[correctAnswers[a]].checked?1:0);
document.getElementById('question'+a).style.display="none";
document.getElementById('question'+b).style.display="block";
}
function end(a){
AnsweredCorrectly+=(document.getElementsByName('ans'+a)[correctAnswers[a]].checked?1:0);
document.getElementById('question'+a).style.display="none";
document.getElementById('summary').style.display="block";
document.getElementById('result').innerHTML=AnsweredCorrectly;

}