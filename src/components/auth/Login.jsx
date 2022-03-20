import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, register } from "../../api";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/actions/authActions";
import { useNavigate,  } from "react-router-dom";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookButton from "./FacebookAuthButton/FacebookButton";
import { GoogleLogin } from 'react-google-login';
import GoogleButton from "./GoogleAuthButton/GoogleButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidInputs, setInvalidInputs] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const googleSuccess = async res => {
    const result = res?.profileObj

    const resgisterValues = {
      firstName: result?.givenName,
      lastName: result?.familyName,
      userName: result?.name,
      email: result?.email,
      password: result?.googleId,
    }

    try {
      login(result?.email, result.googleId)
        .then(() => {
          dispatch(setLogin(true));
          navigate("/");
        })
        .catch((err) => {
          register(resgisterValues)
          .then(res => {
            login(result?.email, result.googleId)
            .then(() => {
              dispatch(setLogin(true));
              navigate("/");
            }).catch(error => alert('User already exists with this email'));
          }).catch(error => alert('User already exists with this email'));
        });
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log('Google sign in was unsuccessful. Please try later.')
    console.log(error)
  }

  const loginFacebook = res => {
    const values = {
      firstName: null,
      lastName: null,
      userName: res?.name,
      email: `${res.name.split(" ")[0]}${res?.userID}@gmail.com`,
      password: res?.userID,
    }

    try {
      login(values?.email, values?.password)
        .then(() => {
          dispatch(setLogin(true));
          navigate("/");
        })
        .catch((err) => {
          register(values)
          .then(res => {
            login(values?.email, values?.password)
            .then(() => {
              dispatch(setLogin(true));
              navigate("/");
            }).catch(error => alert('User already exists with connected email'));
          }).catch(error => alert('User already exists with connected email'));
        });
    } catch (error) {
      console.log(error)
    }
  }

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
            <GoogleLogin
              clientId={'1068850605287-o1pignk020ft6da6c5ijovube2km1k49.apps.googleusercontent.com'}
              render={props => <GoogleButton
                onClick={props.onClick}
                disabled={props.disabled}
                />
              }
              cookiePolicy='single_host_origin'
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <FacebookLogin
              appId="417725786780379"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={loginFacebook}
              render={props => (
                <FacebookButton onClick={props.onClick} />
              )}
            />
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
    width: 184px;
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
