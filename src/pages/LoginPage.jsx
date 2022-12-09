import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginPage = ({func}) => {
    const [num,setNum] = useState('');
    const [otp,setOtp] = useState('');

    const number = 1752;

    const otpGenerator =() =>{
        alert('Your OTP is '+number);
    }
    const otpChecker = () =>{
        var otpInNum = +otp
        console.log(otpInNum,number);
        if(otpInNum===number){
            console.log(func('products'))
        }
        else{
            alert('wrong otp')
        }
    }

  return (
    <div>
        <div style={{textAlign:'center'}}>
            <h2>LOGIN</h2>
            <div className='num'>
                <TextField id="standard-basic" label="Enter Number" variant="standard" onChange={(e)=>{setNum(e.target.value)}} />
            </div>
            <div className='sendBtn'><Button variant="text" onClick={otpGenerator}>Send OTP</Button></div>
            <div className='otp'>
                <TextField id="standard-basic" label="Enter OTP" variant="standard" onChange={(e)=>{setOtp(e.target.value)}}/>
            </div>
            <div className='submitBtn'><Button variant="text" onClick={otpChecker}>Submit OTP</Button></div>
        </div>
    </div>
  )
}
