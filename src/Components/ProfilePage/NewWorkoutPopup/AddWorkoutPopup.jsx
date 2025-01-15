import React from 'react';
import WorkoutForm from "/src/Components/ProfilePage/NewWorkoutPopup/WorkoutForm"

export default function Popup(props) {

  return (
     props.openStatus && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
        {/* Popup Box */}
        <div
          className={`${
            props.showPopup ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ease-in-out transition-all duration-300 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-96 overflow-scroll`}
        >
          <button
            onClick={props.close}
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-lg"
          >
            Close
          </button>
          <WorkoutForm index={props.index} workoutName={props.workoutName} workoutExercises={props.workoutExercises} editWorkouts={props.editWorkouts} close={props.close}/>
        </div>
      </div>
    )
  );
}