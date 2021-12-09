import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {doc, getDoc} from 'firebase/firestore'

import {db} from 'libs/firebase'
import firebaseConfig from 'libs/firebase/firebaseConfig'


function UserProfile ({age, fullName, address, ...props}){
    return(
        <ul>
            <li>{fullName}</li>
            <li>{age}</li>
            <li>{address.city}</li>
        </ul>
    )
}


// read a single Doc from a collection (libs > hooks > useUserProfile)
function index(props) {
    
    const [userProfile, setUserProfile] = useState(null)
    const [output, setOutPut]= useState('is working')

    useEffect(()=>{
        async function getFirebaseDoc(){
            const docRef = await doc(db, 'users', 'jimf')
            const docData = await getDoc(docRef)
            // docData.data()
            console.log(docData.exists())
            console.log(docData.data())
            setUserProfile(docData.data())
        }
        getFirebaseDoc()
    }, [])

    if(userProfile){
        return <div><UserProfile {...userProfile}/></div>
    }else{
        return <div>{output}</div>
    }
}



// function index(props) {
//     //read a single Doc from a collection
//     const [users, setUsers] = useState([])

//     useEffect(()=>{
//         async function getFirebaseDoc(){
//             const ref = collection(db, 'users')
//             const userSnapshot = await getDocs(ref)

//             userSnapshot.forEach(doc=>{
//                 // object and array non mutating methods of state...
//                 setUsers(doc.data())
//             })
//         }
//         getFirebaseDoc()
//     }, [])

//     if(users){
//         return <div>Getting a Group of Docs</div>
//     }else{
//         return <div>No Users</div>
//     }
// }

export default index