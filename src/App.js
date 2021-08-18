import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Admin from './components/newclass/inventory/Admin';
// import { Redirect } from 'react-router-dom';

// import About from './components/newclass/About';
// import Contact from './components/newclass/Contact';
// import FirstContact from './components/newclass/FirstContact';


// import Home from './components/newclass/Home';
// import NavBar from './components/newclass/NavBar';
// import NotFoundComponent from './components/newclass/NotFoundComponent';
// import User from './components/newclass/User';
// const App = ()=>{
//   const [name, setName] = useState("Taiwo");

//   return(
//      <>

//    <NavBar/>

//    <button onClick={()=>setName("Kenny")}>change name</button>
//      <Switch>
     
//      <Route path="/" exact  component={Home} />
//      <Route path="/dashboard/:myName" component={User}/>
     
//         <Route path="/info" component={About}/>
//         <Route path="/contact" exact component={Contact}/>
//         <Route path="/contact/first" component={FirstContact}/>
//         <Route component={NotFoundComponent}/>
//      </Switch>
  
//   </>
//   )
// }
// export default App;
// import React from 'react';
import Landing from './components/newclass/inventory/landing';
import Nav from './components/newclass/inventory/Nav';
import User from './components/newclass/inventory/User';
// import EffectClass from './components/newclass/EffectClass';
// import EffectFunction from './components/newclass/EffectFunction';
const App = ()=>{
  const [goods, setGoods] = useState([]);
  const deleteGood = i=>{
    let newGoods = goods.filter((_, ind)=>i!==ind);
    setGoods(newGoods);
 }
 const addGood = good=>{
  setGoods([...goods, good]);
}
const deductGood = goodsToDeduct =>{
  let getAllGoods = [...goods];
  for (let index = 0; index < getAllGoods.length; index++) {
    for (let i = 0; i < goodsToDeduct.length; i++) {
      if(index === goodsToDeduct[i].index && getAllGoods[index].goodQty>= goodsToDeduct[i].qty){
        getAllGoods[index].goodQty -=goodsToDeduct[i].qty; 
      }
      
    }
    
  }
  setGoods(getAllGoods);
}
// const [dept, setDept] = useState();

  return(

    <>
    <Nav/>
    <br/>
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/admin" render={(props)=><Admin {...props} goods={goods} deleteGood={deleteGood} addGood={addGood}/>}/>
      <Route path="/user" render={(props)=><User {...props} goods={goods} deductGood={deductGood}/>}/>
    </Switch>

  
      
    </>
  )
}
export default App;