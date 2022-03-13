import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestResetPassword, resetPassword } from "../../api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import Loading from "../loading/Loading";
import * as Yup from 'yup';

const Recover = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const emailInitialValues = {
    email: ""
  };

  const codeInitialValues = {
    code: ''
  };

  const passwordInitialValues = {
    newPassword: '',
    confirmPassword: ''
  };

  const sendEmail = (values) => {
    setIsLoading(true)
    requestResetPassword(values?.email)
    .then(res => {
      setData({...data, email: values?.email})
      setStep(2)
      setIsLoading(false)
    }).catch(errorStatus => {
      setIsLoading(false)
      if(errorStatus == 400) {
        alert('Bad request');
      } else if(errorStatus == 404) {
        alert('User not found with this email');
      } else {
        alert('Occurred error, please try later');
      }
    })
  };

  const setCode = (values) => {
    setIsLoading(true)
    resetPassword({...data, code: values?.code})
    .catch(response => {
      setIsLoading(false)
      if(response == 'continue') {
        setData({...data, code: values?.code})
        setStep(3)
      } else {
        alert('Incorrect code')
      }
    })
  }

  const handleReset = (values) => {
    setIsLoading(true)
    resetPassword({
      ...data,
      newPassword: values?.newPassword,
      confirmPassword: values?.confirmPassword
    }).then(res => {
      setIsLoading(false)
      alert('Your password has been changed')
      navigate('/login')
    }).catch(error => {
      setIsLoading(false)
      if(values?.newPassword != values?.confirmPassword) {
        alert('Passwords should match each other')
      } else {
        alert('Happened error, please try later')
        navigate('/login')
      }
    })
  }

  const emailValidationSchema = Yup.object({
    email:Yup.string().email('invalid email format').required('email is required'),
  })

  const codeValidationSchema = Yup.object({
    code: Yup.string().required('reset code is required')
  })

  const passwordValidationSchema = Yup.object({
    newPassword: Yup.string().required('new password is required'),
    confirmPassword: Yup.string().required('password confirmation is required')
  })


  return (
    <MainLayout>
      <RecoverStyled>
      <h1 className="recover__heading">Recover</h1>
      {
        step == 1 &&
        <>
          <p>We will send you an email to reset your password</p>
          <Formik
            initialValues={emailInitialValues}
            validationSchema={emailValidationSchema}
            onSubmit={sendEmail}
          >
            <Form className="recover__content">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="email"
              />
              <div className="error-message"><ErrorMessage name="email"/></div>

                <div className="submit-wrapper">
                  { isLoading && <Loading /> }
                  <button className="signIn-btn" type="submit">Submit</button>
                </div>
            </Form>
          </Formik>
        </> 
      }{
        step == 2 &&
        <>
          <p>Recovery code has been send</p>
          <Formik
            initialValues={codeInitialValues}
            validationSchema={codeValidationSchema}
            onSubmit={setCode}
          >
            <Form className="recover__content">
              <Field
                type="number"
                id="code"
                name="code"
                placeholder="code"
              />
              <div className="error-message"><ErrorMessage name="code"/></div>
              <div className="submit-wrapper">
                { isLoading && <Loading /> }
                <button className="signIn-btn" type="submit">Next</button>
              </div>
            </Form>
          </Formik>
        </>
      }{
        step == 3 &&
        <>
          <p>Set new password</p>
          <Formik
            initialValues={passwordInitialValues}
            validationSchema={passwordValidationSchema}
            onSubmit={handleReset}
          >
            <Form className="recover__content">
              <Field
                type="text"
                id="password"
                name="newPassword"
                placeholder="password"
              />
              <div className="error-message"><ErrorMessage name="newPassword"/></div>
              <Field
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
              />
              <div className="error-message"><ErrorMessage name="confirmPassword"/></div>
              <div className="submit-wrapper">
                { isLoading && <Loading /> }
                <button className="signIn-btn" type="submit">Submit</button>
              </div>  
            </Form>
          </Formik>
        </>
      }
      </RecoverStyled>
    </MainLayout>
  );
};

export default Recover;

const RecoverStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  &>p{
    font-size:16px;
    color:#121212BF;
    padding: 0 15px;
    text-align: center;
  }
  .recover__validation h5{
    font-size:22px;
    line-height:1;
    display:flex;
    align-items:center;
    gap:5px;
  }
  .recover__validation h5 svg{
    color:red;
  }
  .recover__validation ul li {
    font-size:16px;
    color:#121212BF;
    list-style-type:disc;
    list-style-position: inside;
  }
  .error-message{
    font-size:14px;
    color:red;
  }


  .recover__content {
    box-sizing: border-box;
    padding: 0px 15px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .recover__heading {
    font-size: 40px;
    margin: 14px auto;
    margin-top:60px;
  }

  .recover__content input {
    width: 446px;
    box-sizing: border-box;
    padding: 15px;
    margin: 10px 0px;
  }

  .recover {
    font-size: 14px;
    color: #121212bf;
    text-decoration: none;
    width: 446px;
  }
  .recover span {
    border-bottom: 1px solid #121212bf;
    padding: 2px 0;
    cursor: pointer;
  }

  .create-account {
    font-size: 14px;
    color: #121212bf;
    text-decoration: none;
  }
  .create-account span {
    border-bottom: 1px solid #121212bf;
    padding: 2px 0;
    cursor: pointer;
  }

  .submit-wrapper {
    position: relative;
    &>.loading-wrap {
      transform: translate(-40%, 20%);
      &>.lds-ripple div {
        border-color: #fff;
      }
    }
  }

  .signIn-btn {
    width: 120px;
    align-self: center;
    height: 45px;
    border: none;
    outline: none;
    color: white;
    background-color: #121212;
    margin: 30px auto 20px auto;
    border: 2px solid white;
  }

  .signIn-btn:hover {
    border: 2px solid black;
  }

  @media (max-width: 750px) {
    .Recover__heading {
      font-size: 30px;
      margin: 20px auto;
    }

    .recover__content input {
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      margin: 10px 0px;
    }
    .recover {
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
      display: inline-block;
    }
  }
`;
