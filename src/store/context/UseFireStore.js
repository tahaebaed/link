import  { useEffect, useState } from 'react'
import { db } from './FireContext'

export const UseFireStore = () => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        const unsubscribe = db
        .collection('users')
        .onSnapshot((snap) => {
          let fetched = snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setUserInfo(fetched)
    })
    return unsubscribe
    }, [])
  return {userInfo }
}
