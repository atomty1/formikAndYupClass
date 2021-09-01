import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import NewFunc from './components/newclass/NewFunc';
import ReduxClass from './components/newclass/ReduxClass';
import ReduxFunc from './components/newclass/ReduxFunc';
import SecondChild from './components/newclass/secondChild';
import ChildApp from './components/newclass/TestChild';
// import { editName, increment, decrement } from './components/newclass/myredux/actions';

let details = {firstname: "Taiwo", lastname: "", password: "", email: ""}
const submitMyForm = values=>{
  console.log(values);
}
const myValidation = Yup.object().shape({
  firstname: Yup.string().min(6, "Firstname is too short").required("You need to fill lastname"),
  lastname: Yup.string().min(6, "lastname is too short").required("You need to fill lastname"),
  password: Yup.string().min(8, "password is too short").required(),
  email: Yup.string().email("Type a valid email address").required(),
})

const App = ()=>{
  
  // let myVal = useSelector(state=>state.num);
  // let myName = useSelector(state=>state.name);
  // let dispatch = useDispatch();
let [login, setLogin] = useState(false);
let userDetails =  [
{
  type: "text", 
  val: "firstname"
}, 
{
type: "text",
val: "lastname"
},
{
  type: "password",
  val: "password"
},
{
  type: "email",
  val: "email"
}]
  
  return(

    <>
    <Formik
    initialValues={details}
    onSubmit={submitMyForm}
    validationSchema={myValidation}

    
    >
     {()=>(
      <Form>
        {userDetails.map((detail, i)=>(
          <div key={i}>
            <Field name={detail.val} type={detail.type} placeholder={detail.val}/>
            <ErrorMessage name={detail.val}/>
          </div>
        ))}
        <button>submit form</button>
        {/* <Field name="firstname" placeholder="firstname"/>
        <ErrorMessage name="firstname"/>
        <Field name="lastname" placeholder="lastname"/>
        <ErrorMessage name="lastname"/>
        <Field name="email" placeholder="email"/>
        <ErrorMessage name="email"/>
        <Field type="password" name="password"/>
        <ErrorMessage name="password"/> */}
        {/* <button>submit form</button> */}
      </Form>
     )}

    </Formik>
    {/* Hello
    <button onClick={()=>setLogin(true)}>login</button>
    <button onClick={()=>setLogin(false)}>logout</button>
    <ChildApp loginStatus={login}/>
<SecondChild loginStatus={login}/>
   */}
    {/* <ReduxFunc/>
<NewFunc/> */}
    {/* <ReduxClass/> */}
   
    </>
  )
}
export default App;