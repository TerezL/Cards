import {React, useState} from 'react';
import BackCard from "./images/bg-card-back.png";
import FrontCard from "./images/bg-card-front.png";
import CardLogo from "./images/card-logo.svg";
import * as Yup from 'yup';
import { useFormik} from 'formik';
import ThankYou from './ThankYou';


export default function Form() {

    

    const [submit, setSubmit] = useState(false);

    const formik =useFormik({
        
        initialValues: {
            cardHolder:"",
            cardNumber:"",
            month:"",
            year:"",
            cvc:""
        },
        validationSchema:Yup.object({
            cardHolder:Yup.string()
            .required("Can't be blank")
            .max(45,'Maximum of 45 characters is only allowed'),
            cardNumber:Yup.string() 
            .min(16)
            .max(16)
            .required("Can't be blank"),
            month:Yup.string().oneOf(['01','02','03','04','05','06','07','08','09','10','11','12'], "Enter in the following format '01' for Jan"),
            year:Yup.number()
            .required("Can't be blank"),
            cvc:Yup.string()
            .max(3)
            .required("Can't be blank")
        }),
        
        onSubmit:(values)=>{
            
            setSubmit(!submit);
        },
        
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false
        
        
    })



    return (
        <>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-center">
      <div className="col">
                  <section className="cards">
        <div className="frontcard">
                <img src={FrontCard} alt="frontcard" className="frontc"/>
                <div>
                <div className="cardlogo">
                    <img src={CardLogo} alt="cardlogo" />
                </div>
            <h4 className="cnumber">
            {formik.values.cardNumber === "" ? <div>0000 0000 0000 0000</div> : <div>{formik.values.cardNumber.match(/.{1,4}/g).join(" ")}</div>
          }
            </h4>
            <p className="cname">
            {
            
            formik.values.cardHolder === "" ? "Jane Appleseed" : <div>{formik.values.cardHolder}</div>
            }
            </p>
            <p className="cexp">{
            
            formik.values.month === "" ? "00" : <>{formik.values.month}</>
            }/
            {
            
            formik.values.year === "" ? "00" : <>{formik.values.year}</>
            }</p>
        </div>
                </div>
                
                <div className="backcard">
                <img src={BackCard} alt="backcard" className="backc" />
                
                <p className="ccvc">
            {
            
            formik.values.cvc === "" ? "000" : <div>{formik.values.cvc}</div>
            }
            </p>
                </div>
                </section>
</div>

<div className="col">
      <div className="formsec">
      {!submit ? (
      <form onSubmit={formik.handleSubmit}>
           
          <label htmlFor='cardHolder' className="form-label">Cardholder Name</label>
          <input
          id="cardHolder"
          name="cardHolder"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cardHolder}
          placeholder='e.g. Jane Appleseed'
          className="form-control"
          >
          </input>
          {formik.errors.cardHolder ? (
           <div className="error">{formik.errors.cardHolder}</div>
         ) : null}
  
          
          
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
          id="cardNumber"
          name="cardNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          className="form-control"
          >
          </input>
          {formik.errors.cardNumber ? (
           <div className="error">{formik.errors.cardNumber}</div>
         ) : null}
         <div className="exp">
         <div className="row">
         <div className="col">
          
          <label htmlFor="month" className="form-label">Exp. Date (MM/YY) </label>
         
          <input
          id="month"
          name="month"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.month}
          placeholder='MM'
          className="form-control month"
          >
          </input>
          {formik.errors.month ? (
           <div className="error">{formik.errors.month}</div>
         ) : null}
         
         
          <input
          id="year"
          name="year"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.year}
          placeholder='YY'
          className="form-control year"
          >
          </input>
          {formik.errors.year ? (
           <div className="error">{formik.errors.year}</div>
         ) : null}
          
         </div>
         <div className="col">
          
          <label htmlFor="cvc" className="form-label">CVC</label>
          <input
          id="cvc"
          name="cvc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.cvc}
          placeholder='e.g. 123'
          className="form-control cvc"
          >
          </input>
          {formik.errors.cvc ? (
           <div className="error">{formik.errors.cvc}</div>
         ) : null}
         </div>
        </div>
  </div>
          <button
          
          type='submit'>Confirm</button>
      </form>
    ) : (
        <ThankYou />
      )}
</div>
      </div>
      </div>
      </div>
      </>
    )
  }

