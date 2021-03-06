import React,{useEffect,useState} from "react";    
import { Link,useHistory,useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Icon } from '@iconify/react';
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import './navbar.css'
import { useMediaQuery } from 'react-responsive'

function Navbar({ hide }) {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  useEffect(() => {
    const token  = user?.token;

    if(token){
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  const logout = (e) => {
    if(e){
      e.preventDefault()
    }
    dispatch({type : LOGOUT});
    
    history.push('/');
    
    setUser(null);
  }

  const AuthButtons = () => {
    return(
      <div className="">
        {!hide ? (
        <div className="">
         <Link to="signin" className="mr-5 text-md">Log In</Link>
         <Link to="signup" className="text-primary text-md">Register Now</Link>
        </div>
      ) : (
        <div />
      )}
      </div>
    )
  }

  const NavItems = () => {
    return (
      <div className="flex items-center absoluter inset-0">
        {!isMobile && <div className="gap-3 flex items-center justify-center">
        <Link to="/findjob" className=" text-black text-md ">Find Jobs</Link>
        <Link to={`/create-resume/${user?.user._id}`} className=" text-black text-md mr-5">Create Resume</Link>
        </div>}
        <div className="">
        <div className="dropdown inline-block relative z-50 ">
          <div className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">{user?.user.name}</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 right-1">
            {isMobile && <> <li ><Link to="/findjob" className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg w-64" href="#"><Icon className="mr-3 text-2xl" icon="ant-design:search-outlined" /><span>Find Job</span></Link></li>
            <li ><Link to={`/create-resume/${user?.user._id}`} className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg w-64" href="#"><Icon className="mr-3 text-2xl" icon="ant-design:profile-outlined" /><span>Create Resume</span></Link></li></>}
            <li ><Link to={`/my-profile/${user?.user._id}`} className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg w-64" href="#"><Icon className="mr-3 text-2xl" icon="ant-design:user-outlined" /><span>Profile</span></Link></li>
            <li ><Link to="/my-jobs" className="bg-gray-200 hover:bg-gray-400 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg" href="#"><Icon className="mr-3 text-2xl" icon="akar-icons:heart" /><span>My Jobs</span></Link></li>
            <li  onClick={logout}><a className="hover:bg-black-200 py-3 px-2 block whitespace-no-wrap flex items-center justify-start text-lg text-white" href="#" style={{backgroundColor:"#008FAE"}}><Icon className="mr-1 text-2xl" icon="uil:signout" /><span>Sign Out</span></a></li>
          </ul>
        </div>
      </div>
      </div>
    )
  }

  return (
    <div className="bg-white h-20 flex fixed w-screen top-0 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" >Jobs<span className="text-primary">Way.</span></Link>
        {user ? <NavItems/> : <AuthButtons />}
      </div>
    </div>
  );
}

export default Navbar;








