import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import {db} from 'libs/firebase'

function useUserProfile(path) {
    //read a single Doc from a collection
    const [userProfile, setUserProfile] = useState(null)
    const [output, setOutput]= useState('is working')

    useEffect(()=>{
        async function getFirebaseDoc(){
            const docRef = await doc(db, path)
            const docData = await getDoc(docRef)
            // docData.data()
            console.log(docData.exists())
            console.log(docData.data())
            setUserProfile(docData.data())
        }
        getFirebaseDoc()
    }, [])

    return userProfile
}

export {useUserProfile}

