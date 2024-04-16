import { Grades } from "./gradeData";

const GradeList = () => {
  
 return (
    <div className="flex flex-col my-10 bg-gray-100">
        <div className="flex justify-center mt-4">
            <div className="flex flex-row gap-10 font-bold text-black-600">
                <h1 className="text-left w-20">Marks</h1>
                <h1 className="text-left w-20">Grades</h1>
                <h1 className="text-left w-20">Points</h1>
                <h1 className="text-left w-24">Status</h1>
            </div>
        </div>
        <div className="flex justify-center flex-col items-center mb-4">
        {Grades.map((data)=>(
            <div key={data.id} className="flex flex-row gap-10">
                <h1 className="text-left w-20">{data.marks}</h1>
                <p className="text-left w-20">{data.grade}</p>
                <p className="text-left w-20">{data.points}</p>
                <p className="text-left w-24">{data.status}</p>
            </div>
        ))}
        </div>
       
    </div>
  )
}

export default GradeList