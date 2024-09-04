// import {Link } from "react-router-dom"
// import { useState } from "react";
// import MyDatePicker from "../common/datepicker";
// import InputBox from "../components/input";
// import Footer from "../components/footer";
// import AnimationWrapper from "../common/page-animation";

// const CreatePage = () => {
//   const [name, setName] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const handleCreate = async (e) => {
//     e.preventDefault();

//     if (!startDate || !endDate) {
//       alert("Please fill in all fields");
//       return;
//     }

//     console.log(name);
//     console.log(startDate);
//     console.log(endDate);
//   };

//   return (
//     <>
//       <section className="flex items-center justify-center">
//         <AnimationWrapper>
//           <form
//             className="block rounded-md bg-white p-5 shadow-lg"
//             onSubmit={handleCreate}
//           >
//             <h3 className="mb-4 text-center text-xl font-bold">
//               Registration
//             </h3>

//             <InputBox
//               icon="bi-vote"
//               className="input-box mt-2"
//               placeholder="Poll Name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <div className="my-4">
//               <label className="text-sm">Select Start Date</label>
//               <MyDatePicker setDate={(date) => setStartDate(date)} />
//             </div>

//             <div>
//               <label className="text-sm">Select End Date</label>
//               <MyDatePicker setDate={(date) => setEndDate(date)} />
//             </div>

//             <Link to="/card">
//               <button
//                 className="btn-dark center mt-5 min-w-[150px] bg-gray-800 px-4 py-2 text-sm"
//                 type="submit"
//               >
//                 Register
                
//               </button>
//             </Link>
//           </form>
//         </AnimationWrapper>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default CreatePage;


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyDatePicker from "../common/datepicker";
import InputBox from "../components/input";
import Footer from "../components/footer";
import AnimationWrapper from "../common/page-animation";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate(); 

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate ) {
      alert("Please fill in all fields");
      return;
    }
    console.log(startDate);
    console.log(endDate);

  
    alert("Registration successful!");
    navigate("/card");
  };

  return (
    <>
      <section className="flex items-center justify-center">
        <AnimationWrapper>
          <form
            className="block rounded-md bg-white p-5 shadow-lg"
            onSubmit={handleCreate}
          >
            <h3 className="mb-4 text-center text-xl font-bold">
              Create Polls
            </h3>

            <InputBox
              icon="bi-unity"
              className="input-box mt-2"
              placeholder="Poll Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="my-4">
              <label className="text-sm">Select Start Date</label>
              <MyDatePicker setDate={(date) => setStartDate(date)} />
            </div>

            <div>
              <label className="text-sm">Select End Date</label>
              <MyDatePicker setDate={(date) => setEndDate(date)} />
            </div>

            <button
              className="btn-dark center mt-5 min-w-[150px] bg-gray-800 px-4 py-2 text-sm"
              type="submit"
            >
              Create
            </button>
          </form>
        </AnimationWrapper>
      </section>
      <Footer />
    </>
  );
};

export default CreatePage;
