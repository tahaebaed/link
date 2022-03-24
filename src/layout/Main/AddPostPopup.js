import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../store/context/FireContext';
const AddPostPopup = ({ trigger, settrigger, setpopupClose }) => {
    const [postText, setPostText] = useState();
    const postsCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        })
    }
    return trigger ? (
        <>
            <div className='popUp_Container'>
                <div>
                    <span onClick={() => {
                        settrigger(false);
                        setpopupClose(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                </div>

                <div>
                    <input type="text" onChange={(e) => setPostText(e.target.value)} placeholder='what is on your mind?' />
                    <button onClick={createPost}>add post</button>
                </div>

            </div>
        </>
    ) : ('')
}

export default AddPostPopup