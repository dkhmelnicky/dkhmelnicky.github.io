var counter = 0;
var what_question = 0;
function inner(state) {
	var element = document.getElementById("question");
	var statement =state;
	if(state=='start'){
		document.getElementById('body').style.backgroundImage= "";
		document.getElementById('dovilny_priamokutnyk').style.display="none";
		document.getElementById('dovilna_trapecyja').style.display="none";
		document.getElementById('deltoid').style.display="none";
		document.getElementById('square').style.display="none";
		document.getElementById('priamokutnyk').style.display="none";
		document.getElementById('parallelogram').style.display="none";
		document.getElementById('trapezoid').style.display="none";
		document.getElementById('diamond-narrow').style.display="none";
		document.getElementById('priamokutna_trapecyja').style.display="none";
		counter=0;
	}
	if (counter==0) {
		element.innerText="Є 2 пари паралельних сторін?";
		document.getElementById('but1').style.display = "none";
		document.getElementById('but2').style.display = "flex";
		document.getElementById('but3').style.display = "flex";
	}
	
		if(counter==1){
			statement_1=statement;
			var picture = document.getElementById('pic');
			picture.setAttribute('src', 'think.png');
			if(statement==0){
				element.innerText="Є пара рівних сторін?";
			}
			else{
				element.innerText="Є прямий кут?";
			}
}
		if(counter==2){
			statement_2=statement;
			var picture = document.getElementById('pic');
			picture.setAttribute('src', 'angry.png');
			if (statement_1==0 && state==0) {
				element.innerText="Є пара паралельних сторін?";
			}
			else{
				element.innerText="Діагоналі перпендикулярні?";
			}
		}
		if(counter==4){
			var picture = document.getElementById('pic');
				picture.setAttribute('src', 'акинатор.png');
				console.log(statement_1,statement_2,statement_3,statement);
			if (statement_1==0 && statement_2==0 && statement_3==1 && statement==0) {
				element.innerText="Це трапеція";
			}
			else{
				element.innerText="Це прямокутна трапеція";
			}
			counter=-1;
		}
		if(counter==3){
			statement_3=statement;
			if(statement_1==0 && statement_2==0 && statement==1){
				element.innerText="Є прямий кут?";
			}
			else{
				var picture = document.getElementById('pic');
				picture.setAttribute('src', 'акинатор.png');
				if(statement_1==0 && statement_2==0 && statement==0){
					element.innerText="Це довільний чотирикутник";
				}
				if(statement_1==0 && statement_2==1 && statement==0){
					element.innerText="Це рівнобедрена трапеція";
				}
				if(statement_1==0 && statement_2==1 && statement==1){
					element.innerText="Це дельтоїд";
				}
				if(statement_1==1 && statement_2==0 && statement==0){
					element.innerText="Це паралелограм";
				}
				if(statement_1==1 && statement_2==0 && statement==1){
					element.innerText="Це ромб";
				}
				if(statement_1==1 && statement_2==1 && statement==0){
					element.innerText="Це прямокутник";
				}
				if(statement_1==1 && statement_2==1 && statement==1){
					element.innerText="Це квадрат";
				}
				counter=-1;
		}
		}console.log(counter);
		if(counter==-1){
			document.getElementById('body').style.backgroundImage= "url('confetti.png')";
			document.getElementById('but2').style.display = "none";
			document.getElementById('but3').style.display = "none";
			document.getElementById('but1').style.display = "flex";
			document.getElementById('but1').innerText = "Грати ще";
			return 0;
		}
		counter++;		
	}