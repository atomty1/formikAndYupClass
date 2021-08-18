import React, { Component } from 'react';
class App extends Component {
  state = { questions: [], question: "", a: "", b: "", c: "", answer: "a", answers: [], score: 0, tryExam: false  };
submitQuestion= ()=>{
  let newQuestion = {
    'question': this.state.question,
    "options": [
                {
                  "choice" : "a",
                  "val": this.state.a,
                },
                {
                  "choice" : "b",
                  "val": this.state.b
                },
                {
                  "choice" : "c",
                  "val": this.state.c
                }

              ],
      "answer": this.state.answer
  };
 this.setState({questions: [...this.state.questions, newQuestion]});

}
setValue = e=>{
this.setState({[e.target.name]: e.target.value});
}
submitAnswer= ()=>{
  let {answers} = this.state;
  let questionAnswers = this.state.questions.map(q=>q.answer);
  let score =0;
  
for (let index = 0; index < questionAnswers.length; index++) {
if(questionAnswers[index]===answers[index]){
    score++;
}

  
}
this.setState({score, tryExam: true});

}
setRadio=(e, i)=>{
let {answers} = this.state;
  answers[i] = e.target.value;
  this.setState({answers});
}
  render() { 
    return ( 
      <>
      {this.state.tryExam?<>You scored {this.state.score}</>: null}
      <h3>Questions</h3>
      <input value={this.state.question} name="question" onChange={this.setValue} placeholder="Question"/>
      <h3>Options</h3>
      <input value={this.state.a} name="a" onChange={this.setValue} placeholder="Option A"/>
      <input value={this.state.b} name="b" onChange={this.setValue} placeholder="Option B"/>
      <input value={this.state.c} name="c" onChange={this.setValue} placeholder="Option C"/>
    Correct Answer
      <select name="answer" onChange={this.setValue}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <button onClick={this.submitQuestion}>submit Question</button>

      <h2>Display question section</h2>
      {this.state.questions.length>0? 
      <div>
      {this.state.questions.map((q, i)=>(
        <div key={i}>
          <strong>Question{i+1}: </strong>
          {q.question}
        {q.options.map((option, ind)=>(
          <div key={ind}>
             {option.choice}
               <input value={option.choice} name={`myoption${i}`} type="radio" onChange={(e)=>this.setRadio(e, i)}/>
               {option.val}
            
          </div>
         
        ))}
       
        </div>
        
      ))}
       <button onClick={this.submitAnswer}>Submit answer</button>
      </div>
      
      :
      <div>No question present</div>
      }
      </>
     );
  }
}
 
export default App;