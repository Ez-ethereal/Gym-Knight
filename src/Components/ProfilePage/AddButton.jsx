import Popup from "/src/Components/ProfilePage/AddWorkoutPopup.jsx"
import React from "react"
import { nanoid } from "nanoid"

export default function AddButton(props) {
    return(
        <button onClick={props.triggerPopup} className="w-1/2 h-1/2">
            <img src="/src/assets/addbutton.png" />
        </button>
    )
}