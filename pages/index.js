import firebase from '../firebase'

import NavBar from '../components/navbar'
import Brand from './../components/branding'

export default function Home() {
   console.log(firebase)
  return (
     <div>
       <NavBar/>
       <Brand title="Home Page" tagline="directory app start"/>

     </div>
     
       
    
  )
}
