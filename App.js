import logo from './logo.svg';
import './App.css';

function App(){ 
  /*Parent Component*/
  
 const [calc, setCalc]= React.useState({ /*taking a json object*/
   current:0,
   total:0,
   isInitial:true, /*on clicking another button it should bring*/
   preOp: ""
 /*handleNumber and handleOperator are responsible for changing the state*/

 }); /* Hook, display gives the current state and setDisplay changes the state. It can take a string, number, array or even a json object as a parameter*/
 function handleNumber(val){/*callback functions are made with second word capitalized*/

   
   let newVal=val;
   if (!calc.isInitial){
   newVal=calc.current + val;
 }
   
   setCalc({current: newVal, total: calc.total, isInitial:false, preOp:calc.preOp});
   
 } 
 function handleOperator(val){
   const total=doCalc()/*doCalc() returns a number that is stored in total*/
   setCalc({current: total.toString(), total:total.toString(), isInitial:true, preOp:val/*on pressing operator the display should be clear , so that it does not get overwritten*/});

 }
 function doCalc(){
   let total=parseInt(calc.total); /*converting string to integer*/

 /*debugger;
 console.log(calc); used for debugging */

   switch(calc.preOp){
     case "+":total+=parseInt(calc.current)
       break;
     case "/":total/=parseInt(calc.current)
       break;
     case "-":total-=parseInt(calc.current)
       break;
     case "*":total*=parseInt(calc.current)
       break;
     default: total= parseInt(calc.current)
   
     
   }
   return total;
 }
 function handleC(){
   setCalc({
     current:0,
   total:0,
   isInitial:true,
   preOp: ""
   });
 }
 function handleEquals(){
   let total=doCalc();
   setCalc({current: total.toString(), total:total.toString(), isInitial:true, preOp:"="})

 }


 
 return (
 <div className="calculator">
   <div className="display">{calc.current}</div>


   <CalcButton className="button" val="7" onClick={handleNumber}/>
   <CalcButton  val="8" onClick={handleNumber}/>
   <CalcButton  val="9" onClick={handleNumber}/>
   <CalcButton  className="operator" val="/" onClick={handleOperator}/>
  
   <CalcButton  val="4" onClick={handleNumber}/>
   <CalcButton  val="5" onClick={handleNumber}/>
   <CalcButton  val="6" onClick={handleNumber}/>
   <CalcButton className="operator" val="*" onClick={handleOperator}/>
 
   
   <CalcButton  val="1" onClick={handleNumber}/>
   <CalcButton  val="2" onClick={handleNumber}/>
   <CalcButton  val="3" onClick={handleNumber}/>
   <CalcButton className="operator" val="+" onClick={handleOperator}/>
   
   <CalcButton val="C" onClick={handleC}/>
   <CalcButton val="0" onClick={handleNumber}/>
   <CalcButton val="=" onClick={handleEquals}/>
   <CalcButton className="operator" val="-" onClick={handleOperator}/>

</div>

 
 );

function CalcButton(props){
   return (
   <button className={props.className} onClick={() =>props.onClick(props.val)}>{props.val}</button>
   
   );
   }


 } 


