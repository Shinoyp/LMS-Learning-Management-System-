import { useAuthContext } from "../hooks/useAuthContext"

const  OpenCourseDetails=({unit})=>{
    
    // const {user}=useAuthContext()
    // const handleClick= async()=>{
    //     if(!user){
    //         return
    //     }

    //     const response=await fetch('http://localhost:4000/api/chapters/'+ props.chapter._id,{
    //         method:'DELETE',
    //         headers:{
    //             'Authorization':`Bearer ${user.token}`
    //         }
    //     })
    //     const json=await response.json()

    //     if(response.ok){

    //         console.log('deleted')
    //     }
    // }
    return(
        <div className="border-2 border-sky-500 bg-white flex my-4 h-64 rounded-lg flex-col justify-between" style={{width:"940px"}}>
            <h4 className="border mx-auto">{unit}</h4>
            {/* <p className=" mx-auto mr-1">{props.chapters.createdAt}</p> */}
           {/* <button onClick={handleClick}>Delete</button> */}
        </div>
    )
}


export default OpenCourseDetails;