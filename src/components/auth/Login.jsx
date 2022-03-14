import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../api";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/actions/authActions";
import { useSelector } from "react-redux";
import { useNavigate,  } from "react-router-dom";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidInputs, setInvalidInputs] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    login(values.email, values.password)
      .then(() => {
        dispatch(setLogin(true));
        navigate("/");
        setInvalidInputs(false);
      })
      .catch((err) => {
        console.log(err);
        setInvalidInputs(true);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  });

  // const errors = Object.keys(formik.errors)
  // .map(function(key) {
  //     return formik.errors[key];
  // });

  return (
    <MainLayout>
      <LoginStyled>
        <h1 className="login__heading">Login</h1>
        {invalidInputs && (
          <div className="login__validation">
            <h5>
              <RiErrorWarningFill /> Please adjust the following:{" "}
            </h5>
            <ul>
              <li>Incorrect email or password.</li>
            </ul>
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="login__content">
            <Field type="text" id="email" name="email" placeholder="email" />
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>
            <Field
              type="text"
              id="password"
              name="password"
              placeholder="password"
            />
            <div className="error-message">
              <ErrorMessage name="password" />{" "}
            </div>
            <a className="recover">
              <span onClick={() => navigate("/recover")}>
                Forget your password?
              </span>
            </a>
            <button className="signIn-btn" type="submit">
              submit
            </button>
            <Link to="/register" className="create-account">
              <span>Create accaount</span>
            </Link>
          </Form>
        </Formik>
      </LoginStyled>
    </MainLayout>
  );
};

export default Login;

const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .login__validation h5 {
    font-size: 22px;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .login__validation h5 svg {
    color: red;
  }
  .login__validation ul li {
    font-size: 16px;
    color: #121212bf;
    list-style-type: disc;
    list-style-position: inside;
  }
  .error-message {
    font-size: 14px;
    color: red;
  }

  .login__content {
    box-sizing: border-box;
    padding: 0px 15px;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .login__heading {
    font-size: 40px;
    margin: 27px auto;
    margin-top: 60px;
  }

  .login__content input {
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
    .login__heading {
      font-size: 30px;
      margin: 20px auto;
    }

    .login__content input {
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
