import { ErrorMessage, Field, Form, Formik } from "formik"
import { Fragment } from "react";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(2, "Minimum of two char").required("Fill the firstname"),
    email: Yup.string().required().email("enter a vallid email address")
})
const TestFormik = ()=>{
    const mySubmit = (values, {setSubmitting, resetForm})=>{
        console.log(values, "atom");
        setSubmitting(true);
        // console.log(actions);
        // resetForm();
    }
    return(
        <Fragment>
            I am test formik component
            <Formik initialValues={{
                firstname: "Taiwo",
                lastname: "Abidakun",
                age: 10,
                email: ""
            }}
            validationSchema ={validationSchema}
            onSubmit={mySubmit}>
            
                {({isSubmitting})=>(
                    
                    
                    <Form>
                       
                        {/* {JSON.stringify(others)} */}
              
                         <Field type="text" name="firstname"/>
                         <ErrorMessage name="firstname"/>
                         <Field type="text" name="lastname"/>
                         <Field type="text" name="email"/>
                         <ErrorMessage name="email"/>
                         <Field type="number" name="age"/>
                         <input disabled={isSubmitting} type="submit" value="submit"/>
                    {/* <button type="submit">submit</button> */}
                    </Form>
                )}
               
            </Formik>
        </Fragment>
    )
}

export default TestFormik;