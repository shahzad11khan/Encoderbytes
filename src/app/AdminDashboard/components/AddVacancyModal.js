// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AddVacancyModal = ({ isclose }) => {
//   const [formData, setFormData] = useState({
//     VacancyName: "",
//     VacancyDiscription: "",
//     Experience: "",
//   });
//   const modalRef = useRef();

//   const handleClose = (e) => {
//     if (modalRef.current === e.target) {
//       isclose();
//     }
//   };

//   const handleKeyDown = useCallback(
//     (e) => {
//       if (e.key === "Escape") {
//         isclose();
//       }
//     },
//     [isclose]
//   );

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const sendMessage = async () => {
//     // Assuming formData is an object containing SenderEmail and SenderMessage properties
//     const _obj = {
//       VacancyName: formData.VacancyName,
//       VacancyDiscription: formData.VacancyDiscription,
//       Experience: formData.Experience,
//     };

//     console.log(_obj);

//     // Here you can add your logic to send the message, e.g., API call
//     try {
//       const response = await fetch(`/api/messages`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(_obj),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log(data);
//       toast.success("Message submitted successfully");
//       isclose();
//       // Reset form data after successful sending
//       setFormData({
//         VacancyName: "",
//         ProName: "",
//         ProDiscription: "",
//       });
//     } catch (error) {
//       console.error("Error fetching or parsing messages:", error);
//       // Handle error gracefully, you might want to display an error message to the user
//     }
//   };

//   return (
//     <div
//       ref={modalRef}
//       onClick={handleClose}
//       className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
//     >
//       <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
//         <button className="self-end" onClick={isclose}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <h2 className="text-xl font-semibold text-gray-950">Add New Vacancy</h2>
//         <section className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="VacancyName" className="text-gray-950">
//               Vacancy Title :
//             </label>
//             <br />
//             <input
//               type="text"
//               id="VacancyName"
//               name="VacancyName"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.VacancyName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="Experience" className="text-gray-950">
//               Experience :
//             </label>
//             <br />
//             <input
//               type="number"
//               id="Experience"
//               name="Experience"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.Experience}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="VacancyDiscription" className="text-gray-950">
//               Discription :
//             </label>
//             <br />
//             <textarea
//               type="textarea"
//               id="VacancyDiscription"
//               name="VacancyDiscription"
//               className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
//               value={formData.VacancyDiscription}
//               onChange={handleInputChange}
//             />
//           </div>
//         </section>

//         <button
//           className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
//           onClick={sendMessage}
//         >
//           Add Vacancy
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddVacancyModal;
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVacancyModal = ({ isclose }) => {
  const [formData, setFormData] = useState({
    VacancyName: "",
    VacancyDiscription: "",
    Experience: "",
  });
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      isclose();
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        isclose();
      }
    },
    [isclose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = async () => {
    const _obj = {
      VacancyName: formData.VacancyName,
      VacancyDiscription: formData.VacancyDiscription.split("\n"),
      Experience: formData.Experience,
    };

    console.log(_obj);

    try {
      const response = await fetch(`/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(_obj),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      toast.success("Message submitted successfully");
      isclose();
      setFormData({
        VacancyName: "",
        VacancyDiscription: "",
        Experience: "",
      });
    } catch (error) {
      console.error("Error fetching or parsing messages:", error);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
        <button className="self-end" onClick={isclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-950">Add New Vacancy</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="VacancyName" className="text-gray-950">
              Vacancy Title :
            </label>
            <br />
            <input
              type="text"
              id="VacancyName"
              name="VacancyName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Experience" className="text-gray-950">
              Experience :
            </label>
            <br />
            <input
              type="number"
              id="Experience"
              name="Experience"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Experience}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="VacancyDiscription" className="text-gray-950">
              Description :
            </label>
            <br />
            <textarea
              id="VacancyDiscription"
              name="VacancyDiscription"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.VacancyDiscription}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter each bullet point on a new line"
            />
          </div>
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Add Vacancy
        </button>
      </div>
    </div>
  );
};

export default AddVacancyModal;
