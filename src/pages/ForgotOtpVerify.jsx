import React, { useEffect, useState } from 'react';
import OtpInput from 'otp-input-react';
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import { signup, verifyForgotOtp, verifyotp } from '../actions/auth';
import { useLocation,useHistory} from 'react-router';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const initialState = {password : ''}

const ForgotOtpVerify = () => {

const [formData, setFormData] = useState(initialState)
    const [otp, setOtp] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const otpDetails = {otp,phone:location.state.phone,newPassword : formData.password}
        setLoading(true)
        dispatch(verifyForgotOtp(otpDetails,history,setLoading))
    }

    useEffect(() => {

    }, [location])

    if(loading){
        return <LoadingSpinner />
    }

    const inputStyle = {
        backgroundColor : '#f2f2f2',
        width : '90px',
        height : '100px',
        fontSize : '60px'
    }

    const handleResend = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(signup(location.state.formData,history,setLoading))
    }


    const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData,[e.target.name] : e.target.value})
      };

      console.log(location.state);

    return (
        <div>
            <Navbar hide={true} />
            <div className="flex items-center flex-col justify-center text-center h-screen">
                <h4 className="text-5xl font-semibold mb-4">Enter your Verification Code.</h4>
                <h6 className="text-xl text-dark mb-4 font-light">We have sent a verification code to <span className="font-semibold">{`+91 ${location.state.phone}`}</span></h6>
                {location.state.Err && <p className="text-red-800 text-lg mb-3" style={{color:'red'}} >{location.state.Err}</p>}
                <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        inputStyles={inputStyle}
                        autocomplete="off"
                    />
                    <input
              onChange={handleChange}
              type="password"
              name="password"
              id=""
              placeholder="New Password"
              className="bg-secondary p-4 mt-7 rounded-md w-3/4 "
              required
            />
                    <button className="bg-green-600 px-10 py-3 mt-10 mb-5 rounded-md text-white hover:bg-green-700" type="submit" style={{ color: 'white' }}>Reset Password</button>
                </form>
                {/* <Link onClick={handleResend} className="mt-3 hover:underline text-dark">Haven't received yet? Resend OTP.</Link> */}
            </div>
        </div>
    )
}

export default ForgotOtpVerify
