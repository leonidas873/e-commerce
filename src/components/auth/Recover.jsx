import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const Recover = () => {


  const initialValues = {
    email: "",
    
  };

  const onSubmit = (values) => {
    console.log(values)
  };

  const validationSchema = Yup.object({
    email:Yup.string().email('invalid email format').required('email is required'),
    
  })


  return (
    <MainLayout>
      <RecoverStyled>
      <h1 className="recover__heading">Recover</h1>
      <p>We will send you an email to reset your password</p>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
          
        <Form className="recover__content">
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="email"
            
          />
          <div className="error-message"><ErrorMessage name="email"/></div>

          <button className="signIn-btn" type="submit">submit</button>
          <Link to="/register" className="create-account">
            <span>Create accaount</span>
          </Link>
        </Form>
        </Formik>
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

    .Recover__content input {
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
