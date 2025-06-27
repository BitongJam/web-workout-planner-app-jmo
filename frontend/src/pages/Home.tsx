import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import WorkoutCard from "../components/WorkoutCard";

function Home() {
  const [addForm, setAddForm] = useState<boolean>(false);
  const [workouts, setWorkouts] = useState([
    { title: "Push Ups", weight: "15 Kg", sets: "5x Sets", reps: "12x Reps" },
    { title: "Skipping Rope", weight: "0 Kg", sets: "5x Sets", reps: "3 mins" },
    { title: "Jogging", weight: "0 Kg", sets: "2 Sets", reps: "1 Km" },
  ]);

  
  const [exerciseValue, setExerciseValue] = useState({
  title: '',
  sets: '',
  weight: '',
  reps: ''
});

  const handleAddExcercise = (e:React.FormEvent<HTMLFormElement>,title:string,weight:string,sets:string,reps:string) =>{
    e.preventDefault();
    console.log("trigger");
    setWorkouts([
        ...workouts,{
            title:title,
            weight:weight,
            sets:sets,
            reps:reps
        }
    ])
    setAddForm(false);
  }


   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExerciseValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
    {/* Navbar */}
        <div className="bg-blue-900 mb-10 px-6 py-6 flex justify-center">
            
            <ul className="flex space-x-8">
                <li className="text-white hover:font-extrabold cursor-pointer">Workout</li>
                <li  className="text-white hover:font-extrabold cursor-pointer  ">Excercises</li>
            </ul>
        </div>
      {/* End Navbar */}
      <div className="border mx-2 md:mx-20 px-15 bg-gray-100">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-lg font-semibold">My Workout Plan</h2>

          <button
            className="rounded-full bg-blue-500 px-5 hover:bg-blue-600 text-white p-4"
            onClick={() => setAddForm(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {/* Card */}
        {addForm && (
          <form className="shadow-lg  my-5 p-5 rounded-2xl bg-white grid grid-cols-[60%_10%_10%_10%_10%]" onSubmit={(e) => handleAddExcercise(e,exerciseValue.title,exerciseValue.weight,exerciseValue.sets,exerciseValue.reps)}>
            <input
              type="text"
              name="title"
              placeholder="Workout Title"
              className="p-2 shadow-md rounded w-auto mx-8"
              value={exerciseValue.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="weight"
              placeholder="Weight"
              className="p-2 shadow-md  rounded  w-auto mx-8"
              value={exerciseValue.weight}
              onChange={handleChange}
            />
            <input
              type="text"
              name="sets"
              placeholder="Sets"
              className="p-2 shadow-md  rounded  w-auto mx-8"
              value={exerciseValue.sets}
              onChange={handleChange}
            />
            <input
              type="text"
              name="reps"
              placeholder="Reps"
              className="p-2 shadow-md  rounded  w-auto mx-8"
              value={exerciseValue.reps}
              onChange={handleChange}
            />
            <button
              className="rounded-full bg-green-500 px-5 hover:bg-green-700 text-white p-4 mx-10"
              
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </form>
        )}

  

        {workouts.map((workout, index) =>(
            <WorkoutCard key={index} workout_title={workout.title} workout_weight={workout.weight} workout_set={workout.sets} workout_reps={workout.reps}/>

        ))}
      </div>
    </>
  );
}

export default Home;
