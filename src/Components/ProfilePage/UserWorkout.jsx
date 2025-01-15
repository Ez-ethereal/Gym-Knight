import { nanoid } from "nanoid"

export default function Workout(props) {
    function convertTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = time - (minutes * 60)
        return (`${minutes} minutes` + (seconds !== 0 ? `${seconds} seconds` : ''))
    }

    const exercises = props.exercises.map(exercise => (
            <p key={nanoid()}>{
                `${exercise.name}: ${exercise.sets} x
                ${exercise.reps ? exercise.reps : convertTime(exercise.duration)}`}
            </p>
        )
    )

    return (
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg h-full w-full place-self-center">
            <h2>{props.name}</h2>
            {exercises}
        </div>
    )
}