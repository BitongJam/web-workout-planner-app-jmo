import React from 'react'

interface WorkoutCardProps {
    workout_title: string;
    workout_weight:string;
    workout_set:string;
    workout_reps:string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout_title,
  workout_weight,
  workout_set,
  workout_reps,
}) => {
  return (
    <div className="shadow-lg  my-5 p-5 rounded-2xl bg-white grid grid-cols-[70%_10%_10%_10%]">
          <div className="workout-title">{workout_title}</div>
          <div className="workout-weight">{workout_weight}</div>
          <div className="workout-set">{workout_set}</div>
          <div className="workout-reps">{workout_reps}</div>
        </div>

  )
}

export default WorkoutCard