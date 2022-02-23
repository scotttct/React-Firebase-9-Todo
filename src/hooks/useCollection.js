import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'

//firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q1, _q2) => {
    const [documents, setDocuments] = useState(null)

    //setup query
    const q1 = useRef(_q1).current
    const q2 = useRef( _q2).current

    useEffect(() => {
        let ref = collection(db, c)

        if (q1) {
            ref = query(ref, where(...q1))
        } else if(q2) {
            ref = query(ref, where(...q1), where(...q2))
        }

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
        } )

        //cleanup Function
        return () => unsub()

    }, [c, q1, q2])
    return { documents }
}