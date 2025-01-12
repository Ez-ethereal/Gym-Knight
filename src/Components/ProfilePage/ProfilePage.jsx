import React from 'react';
import UserBasicInfo from '/src/Components/ProfilePage/UserBasicInfo'; // Placeholder for your component
import LogoutButton from '/src/Components/ProfilePage/Logout'; // Placeholder for your component
import Workout from '/src/Components/ProfilePage/UserWorkout'; // Placeholder for your component
import workouts from '/src/Components/workouts.js'
import BeginWorkout from '/src/Components/ProfilePage/BeginWorkout.jsx'
import ViewStats from '/src/Components/ProfilePage/ViewStats.jsx'
import Popup from "/src/Components/ProfilePage/AddWorkoutPopup.jsx"
import AddButton from "/src/Components/ProfilePage/AddButton.jsx"
import { nanoid } from "nanoid";

export default function ProfilePage() {

  const [buttonPopup, setButtonPopup] = React.useState(false)
  const [showPopup, setShowPopup] = React.useState(false)
  const workoutComps = workouts.map(workout => <Workout key={nanoid()} name={workout.name} exercises={workout.exercises} />)
  const emptySpaces = 6 - workoutComps.length
  
  function triggerPopup() {
    setButtonPopup(true)
    setTimeout(() => setShowPopup(true))
  }

  function closePopup() {
    setShowPopup(false)
    setTimeout(() => setButtonPopup(false), 300)
  }

  const adds = Array.from({ length: emptySpaces }, () => (
    <AddButton triggerPopup={triggerPopup} key={nanoid()}/>
  ))

  return (
    <div className="flex min-h-screen bg-sky-900">
      {/* Sidebar */}
      <div className="w-1/6 min-w-44 p-6 bg-white flex flex-col justify-between align-center">
        {/* User Basic Info */}
        <div className="flex flex-col gap-8">
          <UserBasicInfo />
          <BeginWorkout />
          <ViewStats />
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>

      {/* Main Content */}
  
      
      <div className="flex-1 p-6 overflow-scroll">
        {/* Grid of Workouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full h-full place-items-center">
            {workoutComps}
            {adds}
        </div>
      </div>
      <Popup openStatus={buttonPopup} showPopup={showPopup} close={closePopup} />
    </div>
  )
}

