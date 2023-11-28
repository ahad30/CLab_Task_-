import './App.css'
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

const onSubmit = (payload) => {
  const params = {
    "params": payload,
    "model": "user",
  }
  console.log(params);
  // console.log(data)
  axios
  .post('https://cadd-corner-backend.coderslab.com.bd/api/v1/models/store', payload)
  .then((res) => {
    console.log(res, "======>")
    // if (res?.payload?.status) {
    //   reset();
    // }
    })
  .catch((err) => {
      console.log(err);
    });
}

  return (
 
   <div className=" flex justify-center items-center min-h-screen ml-96">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3 rounded-xl justify-center object-center bg-white shadow-xl p-5"
        action=""
      >
        <div><p className="text-dark text-center font-bold text-xl">Sign up here</p></div>
    
          <div className="grid  grid-cols-1  lg:grid-cols-2 gap-4 w-full">
            {/* name */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="name"
                className="input input-bordered w-full "
              />
           
            </div>
            {/* email */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="email"
                className="input input-bordered w-full "
              />
        
            </div>

            {/* Gender */}

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <input
                type="text"
                {...register("gender")}
                placeholder="name"
                className="input input-bordered w-full "
              />
           
            </div>

           {/*Blood */}


           <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Blood</span>
              </label>
              <input
                type="text"
                {...register("blood")}
                placeholder="name"
                className="input input-bordered w-full "
              />
           
            </div>


            {/* Phone */}

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="name"
                className="input input-bordered w-full "
              />
           
            </div>


            {/* Address */}

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Address </span>
              </label>
              <input
                type="text"
                {...register("address")}
                placeholder="name"
                className="input input-bordered w-full "
              />
           
            </div>
            

            {/* Field */}

            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text">Field of study</span>
              </label>
              <input
                type="text"
                {...register("field_of_study")}
                placeholder="name"
                className="input input-bordered w-full "
              /> 
            </div>
          </div>
           
          <div className=" ">
              <button className="bg-green-500 btn text-white w-full">
                Register
              </button>
          </div>
          <div>  
          </div>
      </form>
    </div>
  )
}

export default App;
