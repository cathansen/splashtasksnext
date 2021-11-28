import {useAuth} from 'libs/hooks/useAuth'
import {useRouter} from 'next/router'
import { signOut } from '@firebase/auth';

import { auth } from 'libs/firebase';
import { IoPersonCircleSharp } from "react-icons/io5";
import {LoginStatus} from './styles'



function UserLoginStatus({ size, color, status, ...props }) {
  //Conditional render loged in
  const user = useAuth()
  const router = useRouter()
  // logout click handler
  function handleClick(){
      signOut(auth)
      .then(()=>{
        //sign out, clean up logic
        router.push('/')
      })
  }

  if(user){
    return (
      <LoginStatus {...props} onClick={handleClick} bgcolor="#d6fecd">
        <IoPersonCircleSharp size={size || "1.75rem"} />
        <figcaption>
          <p>display name</p>
          <p>logout</p>
        </figcaption>
      </LoginStatus>
    )
  }

  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} color = "red" />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
