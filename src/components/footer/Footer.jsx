import styled from 'styled-components';
import {BsArrowRight} from 'react-icons/bs';
import {AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {SiTiktok} from 'react-icons/si';
import { subscribe } from '../../api';
import { useState } from 'react';

const Footer = () => {

const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        subscribe(email).then(()=>alert("you have subscribed successfully"))
    }


    return <FooterStyled>
        <div className="footer-content">
        <div className="footer-raw">
<div className="footer-col">
    <div className='footer-col__title'>Quick links</div>
    <div className="footer-col__item">Bags</div>
    <div className="footer-col__item">Shoes</div>
    <div className="footer-col__item">Lookbook</div>
</div>
<div className="footer-col">
<div className='footer-col__title'>Info</div>
    <div className="footer-col__item">About</div>
    <div className="footer-col__item">Contact us</div>
    <div className="footer-col__item">Shipping policy</div>
    <div className="footer-col__item">Blog</div>
</div>
<div className="footer-col">
<div className='footer-col__title'>Our mission</div>
    <div className="footer-col__item">Quality materials, good designs, craftsmanship and sustainability.</div>
</div>
</div>
<div className="footer-raw2">
    <div className="footer__subscribe">
        <div className="footer__subscribe-text">Subscribe to our emails</div>
        <div className="footer__subscribe-input">
        <input placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
        <BsArrowRight onClick={handleSubscribe}/>
        </div>
    </div>
    <div className="footer__logos">
        <AiOutlineTwitter/>
              <AiFillFacebook/>
              <AiFillInstagram/>
              <AiFillYoutube/>
              <SiTiktok/>
        </div>
</div>
</div>
    </FooterStyled>
}

export default Footer;

const FooterStyled = styled.div`
background-color:white;
border-top:2px solid #ECECEC;
display:flex;
justify-content:center;

.footer-content{
    box-sizing:border-box;
padding:50px;
display:flex;
flex-direction:column;
gap:40px;
flex:1;
max-width:1200px;
}
.footer-raw{
    display:flex;
    
}
.footer-col{
    flex:1 350px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
}

.footer-col__title{
    margin-bottom:20px;
    font-size:18px;
    color:#121212;
}

.footer-col__item{
    padding:10px 0;
    font-size:14px;
    color:#121212bf;
    margin-right:10px;
}

/* footer-raw2 */

.footer-raw2{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
}

.footer__subscribe-text{
    margin-bottom:20px;
    font-size:18px;
    color:#121212;
}

.footer__subscribe{
    flex:1 600px;
    cursor:pointer;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
}
.footer__subscribe-input{
background:white;
max-width:358px;
display:flex;
align-items:center;
box-sizing:border-box;
padding:10px;
outline:2px solid #1212126a;
width:100%;

}
.footer__subscribe-input svg{
    font-size:18px;
}
.footer__subscribe-input:hover{
    outline:2px solid #121212;
}

.footer__subscribe-input input{
    border:none;
    outline:none;
    flex:1 360px;
    padding:0;
    width:100px;
}

.footer__logos{
    display:flex;
    
}

.footer__logos svg{
    font-size:18px;
    margin:13px;
}

.footer__logos svg:hover{
    transform:scale(1.3);
    cursor:pointer;
}

@media (max-width:750px){

    .footer-content{
        padding:40px 30px;
    }

    .footer-raw{
        flex-wrap:wrap; 
        gap:40px;
    }
    .footer-raw2{
        flex-wrap:wrap;
        justify-content:center;
        gap:30px;
    }

    .footer__subscribe{
        align-items:center;
    }
}


`


