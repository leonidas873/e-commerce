import React, { useState } from "react"
import axios  from "axios"
import GoogleLogin from "react-google-login"
import styled from 'styled-components';

// UNDA GAESHVAS npm react-google-login axios (AN yarn add DA fetchZEC SHEDIZLEBA GADAKETEBA)
const GoogleAuth = () => {
    const [user, setUser] = useState(null)

    const onSuccess = async res => {
        try {
            // const result = await axios.post("http://localhost:3001/auth/google-auth", {
            const result = await axios.post("https://ecommerse--watamasheba.herokuapp.com/auth/google-auth", {
                token: res?.tokenId,
            },{
              withCredentials: true,
              credentials: 'include',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            console.log(result.data.user)
            setUser(result.data.user)
        } catch (err) {
            console.log(err)
        }
    };

    const Button = styled.button`
      width: 180px;
      height: 42px;
      display: flex;
      align-items: center;
      gap: 10px;
      jusfity-content: flex-start;
      padding: 0 8px;
      border-radius: 8px;
      background-color: #fff;
    `
    const Avatar = styled.img`
      width: 28px;
      height: 28px;
      border-radius: 50%;
    `
    const Name = styled.h1`
      font-size: 18px;
      color: gray;
      margin: 0;
    `

    return (
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        {!user && (
          <GoogleLogin
            clientId={`1068850605287-o1pignk020ft6da6c5ijovube2km1k49.apps.googleusercontent.com`}
            onSuccess={onSuccess}
          />
        )}

        {user && (
          <Button>
            <Avatar src={user?.picture} />
            <Name>
              {user?.name}
            </Name>
          </Button>
        )}
      </div>
  );
};

export default GoogleAuth;