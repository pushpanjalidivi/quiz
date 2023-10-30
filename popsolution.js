//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1] = "What is the capital city of France?";
choice1[1] = "London";
choice1[2] = "Rome";
choice1[3] = "Paris";
choice1[4] = "Madrid";
solution[1] = "c";

question[2] = "Which planet is known as the 'Red Planet'?";
choice2[1] = "Venus";
choice2[2] = "Earth";
choice2[3] = "Mars";
choice2[4] = "Jupiter";
solution[2] = "c";

question[3] = "Who wrote the play 'Romeo and Juliet'?";
choice3[1] = "Charles Dickens";
choice3[2] = "William Shakespeare";
choice3[3] = "Jane Austen";
choice3[4] = "George Orwell";
solution[3] = "b";

question[4] = "What is the chemical symbol for gold?";
choice4[1] = "Go";
choice4[2] = "Ag";
choice4[3] = "Au";
choice4[4] = "Gl";
solution[4] = "c";

question[5] = "In which year did the Titanic sink?";
choice5[1] = "1912";
choice5[2] = "1907";
choice5[3] = "1920";
choice5[4] = "1915";
solution[5] = "a";

question[6] = "Which country is known as the Land of the Rising Sun?";
choice6[1] = "China";
choice6[2] = "South Korea";
choice6[3] = "Japan";
choice6[4] = "Vietnam";
solution[6] = "c";

question[7] = "Who painted the Mona Lisa?";
choice7[1] = "Vincent van Gogh";
choice7[2] = "Pablo Picasso";
choice7[3] = "Leonardo da Vinci";
choice7[4] = "Michelangelo";
solution[7] = "c";

question[8] = "What is the largest mammal on Earth?";
choice8[1] = "African Elephant";
choice8[2] = "Blue Whale";
choice8[3] = "Giraffe";
choice8[4] = "Lion";
solution[8] = "b";

question[9] = "What is the chemical symbol for water?";
choice9[1] = "Wt";
choice9[2] = "O2";
choice9[3] = "H2O";
choice9[4] = "Wat";
solution[9] = "c";

question[10] = "Which of the following is a primary color?";
choice10[1] = "Green";
choice10[2] = "Orange";
choice10[3] = "Red";
choice10[4] = "Brown";
solution[10] = "c";


