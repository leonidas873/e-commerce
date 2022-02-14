import React, { useState } from "react"
import axios  from "axios"
import GoogleLogin from "react-google-login"

// UNDA GAESHVAS npm react-google-login axios (AN yarn add DA fetchZEC SHEDIZLEBA GADAKETEBA)
const GoogleAuth = () => {
    const [user, setUser] = useState(null)

    const onSuccess = async res => {
        try {
            const result = await axios.post("https://ecommerse--watamasheba.herokuapp.com/auth/google-auth", {
                token: res?.tokenId,
            });
            console.log(result.data.user)
            setUser(result.data.user)
        } catch (err) {
            console.log(err)
        }
    };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      {!user && (
        <GoogleLogin
          clientId={`1068850605287-o1pignk020ft6da6c5ijovube2km1k49.apps.googleusercontent.com`}
          onSuccess={onSuccess}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;