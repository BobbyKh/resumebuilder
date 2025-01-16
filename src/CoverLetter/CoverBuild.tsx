// import React, { useEffect, useRef, useState } from "react";
// import Select from "react-select";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignCenter, faBookReader, faCamera, faChevronDown, faPalette, faUpload } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { ChevronDownIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import API_URL from "../api/Api";
// import axios from "axios";
// import { CoverLetterTemplate1, CoverLetterTemplate2, CoverLetterTemplate3, CoverLetterTemplate4, CoverLetterTemplate5 } from "../templatedesign/CoverTemplateDesign";

// interface Fields {
//     label : string;
//     type : string;
//     placeholder : string
//     name : string

// }

// const BuildForm = () => {
//   type FormFields = "image" | "fullname" | "position" | "email" | "phone" | "address" | "headline" | "website" | "summary" | "skills" | "language" | "education" | "experience" | "projects" | "hobbies";

//   const [formData, setFormData] = useState<Record<FormFields, string | string[] | number | boolean | any>>({
//     image: "",
//     fullname: "",
//     position: "",
//     email: "",
//     phone: "",
//     address: "",
//     headline: "",
//     website: "",
//     summary: "",
//     skills: [],
//     education: [{
//       degree: "",
//       university: "",
//       from_date: "",
//       to_date: "",
//       description: "",
//     }],
//     hobbies: [],
//     experience: [
//       {
//         company: "",
//         position: "",
//         from_date: "",
//         to_date: "",
//         description: "",
//       }
//     ],
//     projects: [
//       {
//         name: "",
//         description: "",
//         link: "",
//       }
//     ],
//     language: [],


//   });
//   const [image , setImage] = useState([]);
//   const fetchImage = async () => {
  
//     const response = await axios.get(`${API_URL}/api/template`);
  
//     setImage(response.data);
  
  
  
//   }
//   useEffect(() => {
//     fetchImage();
//   }, []);
  
  

  
//   const [educations, setEducations] = useState<any[]>([
//   ]);  // const [awards, setAwards] = useState<any[]>([""]);
//   // const [certifications, setCertifications] = useState<any[]>([""]);
//   // const [references, setReferences] = useState<any[]>([""]);
//   // const [hobbies, setHobbies] = useState<any[]>([""]);
//   const [projects, setProjects] = useState<any[]>([]);
//   const [selectedTemplate, setSelectedTemplate] = useState("template1");
//   const [zoomLevel, setZoomLevel] = useState(100);
// const [fields , setFields] = useState<Fields[]>([]);
//   const handleZoomIn = () => {
//     setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200)); // Max zoom level 200%
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 50)); // Min zoom level 50%
//   };



//   const handleResumeDownload = () => {
//     const element = document.getElementById("resume-preview");
//     if (element) {
//       html2canvas(element, {
//         useCORS: true,
//         logging: true,
//         allowTaint: true,
//         scale: 10,
//       }).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png", 1.0);
//         const pdf = new jsPDF("p", "mm", "a4");

//         // Calculate dimensions to fit the PDF page
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//         // Make links clickable
//         const links = element.querySelectorAll("a");
//         links.forEach((link) => {
//           const linkRect = link.getBoundingClientRect();
//           const linkX = linkRect.left;
//           const linkY = linkRect.top;
//           const linkWidth = linkRect.width;
//           const linkHeight = linkRect.height;
//           pdf.link(linkX, linkY, linkWidth, linkHeight, link.href);
//         });

//         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST" );
//         pdf.save("resume.pdf");
//       });
//     }
//   };
//   const templates = [
//     { id: "template1", component: <CoverLetterTemplate1 {...formData} />, name: "Professional" },
//     { id: "template2", component: <CoverLetterTemplate2 {...formData} />, name: "Chrono" },
//     { id: "template3", component: <CoverLetterTemplate2 {...formData} />, name: "Elegant" },
//     { id: "template4", component: <CoverLetterTemplate3 {...formData} />, name: "Circular" },
//     { id: "template5", component: <CoverLetterTemplate5 {...formData} />, name: "Template 5" }, // Add more templates as needed
//   ];
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3, // Show one template at a time
//     slidesToScroll: 3,
//     arrows: true,
//     nextArrow: <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronDownIcon style={{ height: 20, width: 20 }} /></div>,
//     prevArrow: <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronDownIcon style={{ height: 20, width: 20, transform: "rotate(180deg)" }} /></div>,
//     responsive: [ // Add responsiveness
//       {
//         breakpoint: 768, // Adjust breakpoint as needed
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480, // Adjust breakpoint as needed
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

// const inputRef = useRef<HTMLInputElement>(null);


//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSkillsChange = (selectedOptions: any) => {
//     const skills = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
//     setFormData((prev) => ({ ...prev, skills }));
//   };

//   const handleHobbiesChange = (selectedOptions: any) => {
//     const hobbies = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
//     setFormData((prev) => ({ ...prev, hobbies }));
//   };


//   const handleLanguageChange = (selectedOptions: any) => {
//     const language = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
//     setFormData((prev) => ({ ...prev, language }));

//   }
//   const handleExperienceChange = (index: number, field: string, value: string) => {
//     setFormData((prev) => {
//       const updatedExperience = [...prev.experience];
//       updatedExperience[index] = { ...updatedExperience[index], [field]: value };
//       return { ...prev, experience: updatedExperience };
//     });
//   };


//   const handleEducationChange = (index: number, field: string, value: string) => {
//     setFormData((prev) => {
//       const updatedEducation = [...prev.education];
//       updatedEducation[index] = { ...updatedEducation[index], [field]: value };
//       return { ...prev, education: updatedEducation };
//     });
//   };

//   const handleProjectChange = (index: number, field: string, value: any ) => {
//     setFormData((prev) => {
//       const updatedProjects = [...prev.projects];
//       updatedProjects[index] = { ...updatedProjects[index], [field]: value };
//       return { ...prev, projects: updatedProjects };
      
//     })
//   };



//   const addEducation = () =>{

//     setFormData((prev) => ({
//       ...prev,
//       education: [
//         ...prev.education,
//         {
//           degree: "",
//           university: "",
//           from_date: "",
//           to_date: "",
//         },
//       ],
//     }));
//   };

//   const addExperience = () => {
//     setFormData((prev) => ({
//       ...prev,
//       experience: [
//         ...prev.experience,
//         {
//           company: "",
//           from_date: "",
//           to_date: "",
//           description: "",
//         }
//       ]
//     }))
//   }

//   const removeExperience = (index: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       experience: prev.experience.filter((_: any, i: number) => i !== index),
//     }));
//   };



//   const removeEducation = (index: number) => setEducations(educations.filter((_, i) => i !== index));

//   const addProject = () => setProjects([
//     ...projects,
//   ]);
//   const removeProject = (index: number) => setProjects(projects.filter((_, i) => i !== index));

// console.log(formData);




//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen  space-y-4 md:space-y-0">
//       {/* Form Section */}

//       <div className="w-full md:w-1/2 p-6 bg-white shadow-md overflow-y-scroll" style={{ height: "calc(200vh - 12rem)" }} id="resume-form">
//         <div className="flex flex-col md:flex-row justify-center md:justify-start p-6 mb-4 bg-white shadow-md rounded-lg gap-4 md:gap-6">
//           <div className="flex flex-col md:flex-row gap-4 md:gap-6">
//             <label htmlFor="Import Linkedin" className="text-lg flex justify-center items-center px-4 py-3 rounded border cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
//               <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-blue-500 text-4xl md:text-6xl" />
//               <h1 className="text-blue-500 text-base">Import Linkedin</h1>
//             </label>
//             <label htmlFor="UploadResume" className="text-lg flex justify-center items-center px-4 py-3 rounded border cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
//               <FontAwesomeIcon icon={faUpload} className="mr-3 text-4xl md:text-6xl" />
//               <h1 className="text-base">Upload Resume</h1>
//             </label>
//           </div>
//         </div>
//         <details className="bg-white shadow-md p-4 rounded" open>
//           <summary className="text-xl font-semibold mb-3 border-b pb-2 flex items-center cursor-pointer">
//             Personal Information
//             <span className="ml-auto">
//               <ChevronDownIcon className="h-6 w-6" />
//             </span>
//           </summary>
//           <div className="w-full gap-4 mt-4 mb-">
//             <div className="w-full">
//             <div className="relative ">
//               <select className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue="Select an option" onChange={(e) => {
//                 const value = e.target.value;
//                 if (value === "1") {
//                   setFields([
//                     { label: "Title", name: "title", type: "text", placeholder: "e.g. John Doe" },
//                     { label: "Field", name: "field", type: "text", placeholder: "e.g. Software Engineer" },
//                   ]);
//                 } else if (value === "2") {
//                   setFields([
//                     { label: "Title", name: "title", type: "text", placeholder: "e.g. John Doe" },
//                     { label: "Description", name: "description", type: "text", placeholder: "e.g. Software Engineer" },
//                   ]);
//                 } else if (value === "3") {
//                   setFields([
//                     { label: "Multi-Select", name: "multiSelect", type: "text", placeholder: "e.g. Software Engineer" },
//                   ]);
//                 } else if (value === "4") {
//                   setFields([
//                     { label: "Title", name: "title", type: "text", placeholder: "e.g. John Doe" },
//                     { label: "Field 1", name: "field1", type: "text", placeholder: "e.g. Software Engineer" },
//                     { label: "Field 2", name: "field2", type: "text", placeholder: "e.g. Software Engineer" },
//                   ]);
//                 }
//               }}>
//                 <option value="">Create Custom Field</option>
//                 <option value="1">Title and Field</option>
//                 <option value="2">Title and Description</option>
//                 <option value="3">Multi-Select</option>
//                 <option value="4">Title with Multi-Fields</option>
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//               </div>
//             </div>
//             {fields.map((field: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; type: string | (string & {}) | undefined; name: string | undefined; placeholder: string | undefined; }, index: React.Key | null | undefined) => (
//               <div className="w-full" key={index}>
//                 <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//                 <input type={field.type} name={field.name} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder={field.placeholder} />
//               </div>
//             ))}
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-gray-700">Image</label>
//               <div className="flex items-center">
//                 <div className="mr-4">
//                   <button
//                     type="button"
//                     className="flex items-center justify-center w-24 h-24 rounded-full border bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onClick={() => inputRef.current?.click()}
//                   >
//                     <FontAwesomeIcon icon={faCamera} className="text-gray-600 text-3xl" />
//                   </button>
//                   <input
//                     ref={inputRef}
//                     type="file"
//                     accept=".jpg, .jpeg, .png"
//                     onChange={(e) => {
//                       const file = (e.target as HTMLInputElement).files?.[0];
//                       const reader = new FileReader();
//                       reader.onload = (ev) => {
//                         setFormData((prev) => ({ ...prev, image: ev.target?.result as string }));
//                       };
//                       reader.readAsDataURL(file as Blob);
//                     }}
//                     className="hidden"
//                   />
//                 </div>
//                 {formData.image && (
//                   <div className="ml-4 ">
//                     <img src={formData.image} className="w-24 h-24 rounded object-cover" alt="Preview" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {[
//               { label: "HeadTitle", name: "headline", type: "text", placeholder: "e.g.Personal Information" },
//               { label: "Full Name", name: "fullname", type: "text", placeholder: "e.g. John Doe" },
//               { label: "Job Position", name: "position", type: "text", placeholder: "e.g. Software Engineer" },
//               { label: "Email", name: "email", type: "email", placeholder: "e.g. johndoe@example.com" },
//               { label: "Phone", name: "phone", type: "tel", placeholder: "e.g. 123-456-7890" },
//               { label: "Address", name: "address", type: "text", placeholder: "e.g. 123 Main St, Anytown, USA" },
//               { label: "Website", name: "website", type: "url", placeholder: "e.g. https://example.com" },
//             ].map((field) => (
//               <div className="mb-4" key={field.name}>
//                 <label className="block text-sm font-medium mb-1 text-gray-700">{field.label}</label>
//                 <input
//                   value={formData[field.name as FormFields] as string}
//                   name={field.name}
//                   onChange={handleInputChange}
//                   className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type={field.type}
//                   placeholder={field.placeholder}
//                 />
//               </div>
//             ))}
         
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1 text-gray-700">Summary</label>
//               <textarea
//                 name="summary"
//                 value={formData.summary as string}
//                 onChange={handleInputChange}
//                 className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows={4}
//               />
//             </div>
//           </div>
//         </details>
//         <details className="bg-white shadow-md p-4 rounded mt-4">
//           <summary className="flex items-center justify-between text-lg font-semibold border-b pb-2 cursor-pointer">
//             Education
//             <div className="ml-auto flex space-x-2">
//               <button onClick={() => addEducation()} className="p-1 rounded hover:bg-gray-200 border">
//                 <PlusIcon className="h-6 w-6" />
//               </button>
//               <span className="p-1 rounded hover:bg-gray-200 border">
//                 <ChevronDownIcon className="h-6 w-6" />
//               </span>
//             </div>
//           </summary>
//           <div className="mt-4 mb-4 ">
//             {formData.education.map((education: any, index: any) => (
//               <div key={index} className="mb-2 flex flex-col border-2 bg-gray-100 rounded-lg p-4">
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Institution</label>
//                   <input
//                     value={education.university}
//                     onChange={(e) => handleEducationChange(index, "university", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     name="university"
//                     placeholder="e.g. University of California, Berkeley"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Degree</label>
//                   <input
//                     value={education.degree}
//                     onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     name="degree"
//                     placeholder="e.g. Bachelor of Science in Computer Science"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Start Date</label>
//                   <input
//                     value={education.from_date}
//                     onChange={(e) => handleEducationChange(index, "from_date", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="date"
//                     name="from_date"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
//                   <input
//                     value={education.to_date}
//                     onChange={(e) => handleEducationChange(index, "to_date", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="date"
//                     name="to_date"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
//                   <textarea
//                     value={education.description}
//                     onChange={(e) => handleEducationChange(index, "description", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows={2}
//                     name="description"
//                   />
//                 </div>
//                 <div className="flex flex-row gap-2">
//                   <button
//                     type="button"
//                     className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
//                     onClick={() => removeEducation(index)}
//                   >
//                     <TrashIcon className="h-5 w-5 mr-1" />
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </details>
//         <details className="bg-white shadow-md p-4 rounded mt-4 " open>
//           <summary className="text-lg font-bold border-b pb-2 flex items-center">Skills
//             <div className="ml-auto flex space-x-2">
//               <button className="p-1 rounded hover:bg-gray-200 border">
//                 <PlusIcon className="h-6 w-6" />
//               </button>
//               <span className="p-1 rounded hover:bg-gray-200 border">
//                 <ChevronDownIcon className="h-6 w-6" />
//               </span>
//             </div>
//           </summary>
//           <div className="mt-4">
//             <Select
//               name="skills"
//               isMulti
//               value={(formData.skills as string[]).map(skill => ({ value: skill, label: skill }))}
//               onChange={handleSkillsChange}
//               options={[
//                 { value: "JavaScript", label: "JavaScript" },
//                 { value: "React", label: "React" },
//                 { value: "TypeScript", label: "TypeScript" },
//                 { value: "Node.js", label: "Node.js" },
//                 { value: "CSS", label: "CSS" },
//                 { value: "HTML", label: "HTML" },
//               ]}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </details>
//         <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
//           <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
//             Experience
//             <div className="ml-auto flex space-x-2">
//               <button onClick={addExperience} className="p-1 rounded hover:bg-gray-200 border">
//                 <PlusIcon className="h-6 w-6" />
//               </button>
//               <span className="p-1 rounded hover:bg-gray-200 border">
//                 <ChevronDownIcon className="h-6 w-6" />
//               </span>
//             </div>
//           </summary>
//           <div className="mt-4">
//             {formData.experience.map((experience:any, index:any) => (
//               <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-50 shadow-sm animate-fade-in">
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Company</label>
//                   <input
//                     value={experience.company}
//                     onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     placeholder="e.g. Google"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Position</label>
//                   <input
//                     value={experience.position}
//                     onChange={(e) => handleExperienceChange(index, "position", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     placeholder="e.g. Software Engineer"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Start Date</label>
//                   <input
//                     value={experience.startDate}
//                     onChange={(e) => handleExperienceChange(index, "from_date", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="date"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">End Date</label>
//                   <input
//                     value={experience.endDate}
//                     onChange={(e) => handleExperienceChange(index, "to_date", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="date"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
//                   <textarea
//                     value={experience.description}
//                     onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows={2}
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
//                   onClick={() => removeExperience(index)}
//                 >
//                   <TrashIcon className="h-5 w-5 mr-1" />
//                 </button>
//               </div>
//             ))}

//           </div>
//         </details>
//         <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
//           <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
//             Projects
//             <div className="ml-auto flex space-x-2">
//               <button onClick={addProject} className="p-1 rounded hover:bg-gray-200 border">
//                 <PlusIcon className="h-6 w-6" />
//               </button>
//               <span className="p-1 rounded hover:bg-gray-200 border">
//                 <ChevronDownIcon className="h-6 w-6" />
//               </span>
//             </div>
//           </summary>
//           <div className="mt-4">
//             {formData.projects.map((project:any, index:any) => (
//               <div
//                 key={index}
//                 className="mb-4 p-4 border rounded-lg bg-gray-50 shadow-sm animate-fade-in"
//               >
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">
//                     Project Name
//                   </label>
//                   <input
//                     value={project.name}
//                     onChange={(e) =>
//                       handleProjectChange(index,"name", e.target.value)
//                     }
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     placeholder="e.g. Build a Personal Website"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">
//                     Description
//                   </label>
//                   <textarea
//                     value={project.description}
//                     onChange={(e) =>
//                       handleProjectChange(index, "description", e.target.value)
//                     }
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows={2}
//                     placeholder="Brief project description"
//                   />
//                 </div>
//                 <div className="mb-2">
//                   <label className="block text-sm font-medium mb-1 text-gray-700">
//                     Link
//                   </label>
//                   <input
//                     value={project.link}
//                     onChange={(e) =>
//                       handleProjectChange(index, "link", e.target.value)
//                     }
//                     className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text"
//                     placeholder="e.g. https://example.com"
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="flex items-center justify-center text-red-500 border-2 border-red-500 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 px-3 py-1 rounded transition duration-150 ease-in-out"
//                   onClick={() => removeProject(index)}
//                 >
//                   <TrashIcon className="h-5 w-5 mr-1" />
//                   Remove
//                 </button>
//               </div>
//             ))}

//           </div>
//         </details>

//         <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
//           <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
//             Languages
//             <span className="ml-2 text-gray-500">
//               <ChevronDownIcon className="h-6 w-6" />
//             </span>
//           </summary>
//           <div className="mt-4">
//             <Select
//               name="language"
//               isMulti
//               value={(formData.language as string[]).map((hobby) => ({ value: hobby, label: hobby }))}
//               onChange={handleLanguageChange}
//               options={[
//                 { value: "English", label: "English" },
//                 { value: "Spanish", label: "Spanish" },
//                 { value: "French", label: "French" },
//                 { value: "German", label: "German" },
//                 { value: "Chinese", label: "Chinese" },
//                 { value: "Japanese", label: "Japanese" },
//                 { value: "Nepal", label: "Nepal" },
//               ]}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </details>
//         <details className="bg-white shadow-md p-4 rounded mt-4 animate-fade-in" open>
//           <summary className="text-lg font-bold border-b pb-2 flex items-center justify-between">
//             Hobbies
//             <span className="ml-2 text-gray-500">
//               <ChevronDownIcon className="h-6 w-6" />
//             </span>
//           </summary>
//           <div className="mt-4">
//             <Select
//               name="hobbies"
//               isMulti
//               value={(formData.hobbies as string[]).map((hobby) => ({ value: hobby, label: hobby }))}
//               onChange={handleHobbiesChange}
//               options={[
//                 { value: "Reading", label: "Reading" },
//                 { value: "Writing", label: "Writing" },
//                 { value: "Photography", label: "Photography" },
//                 { value: "Traveling", label: "Traveling" },
//                 { value: "Cooking", label: "Cooking" },
//                 { value: "Gaming", label: "Gaming" },
//               ]}
//               className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </details>


//         {/* Resume Download Button */}
//         <button
//           type="button"
//           className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//           onClick={handleResumeDownload}
//         >
//           Download Resume
//         </button>

//       </div>

//       {/* Preview Section */}
//       <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded mt-6 md:mt-0 md:ml-6  ">
//         <div className="overflow-y-scroll h-screen">
//           <div className="zoom-controls flex justify-end mb-4">
//             <button
//               type="button"
//               className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 px-2 py-1 rounded mr-2"
//               onClick={handleZoomOut}
//             >
//               -
//             </button>
//             <button
//               type="button"
//               className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 px-2 py-1 rounded"
//               onClick={handleZoomIn}
//             >
//               +
//             </button>
//           </div>

//           {selectedTemplate && (
//             <div id="resume-preview"
//               className={`resume-preview ${selectedTemplate}`}
//               style={{
//                 transform: `scale(${zoomLevel / 100})`,
//                 transformOrigin: "center center",
//                 transition: "transform 0.2s ease-in-out",
//                 cursor: "zoom-in",
//                 overflow: "auto",

//               }}
//             >
//               {/* Zoom Controls */}

//               {/* Render Selected Template */}
//               <div className="overflow-auto">
//   {selectedTemplate === "template1" && (
//     <>
//       <CoverLetterTemplate1 {...formData} />
//       {/* <ResumeTemplate1 {...formData} /> */}
//     </>
//   )}
//   {selectedTemplate === "template2" && <CoverLetterTemplate1 {...formData} />}
//   {selectedTemplate === "template3" && <CoverLetterTemplate2 {...formData} />}
//   {selectedTemplate === "template4" && <CoverLetterTemplate3 {...formData} />}
//   {selectedTemplate === "template5" && <CoverLetterTemplate4 {...formData} />}
// </div>

//             </div>
//           )}
//         </div>


//         {/* Template Selection */}
//         <div className="templateview overflow-x-scroll">
//           <h1 className=" text-xl font-sans text-gray-800   text-center mb-2 justify-center mt-2">Select a Template</h1>
//           <Slider {...settings} className="w-full h-full p-10 overflow-hidden">
//             {templates.map((template) => (
//               <div
//                 key={template.id}
//                 className={`items-center cursor-pointer p-4 shadow-md rounded-md border ${selectedTemplate === template.id ? "" : "border"
//                   }`}
//                 onClick={() => setSelectedTemplate(template.id)}
//               >
//                 <div
//                   className="shadow-md bg-white rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                   style={{
//                     aspectRatio: "8.5 / 11",
//                   }}
//                 >
//                   <div className="mb-4">
//                     <h3 className="text-xl font-sans text-gray-800 text-center mb-2 mt-2">
//                       {template.name}
//                     </h3>
//                   </div>
//                   {image.map((image: any) => (
//                     <img
//                       key={image.id}
//                       src={image.image}
//                       alt={image.name}
//                       className="w-full h-auto mb-4"
//                     />
//                   ))}

//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         <div className="w-full justify-items-center  p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
//           <div className="flex space-x-4">
//             <button
//               className="flex items-center border-2 hover:border-blue-800 rounded-md px-4 py-2"
//               onClick={showTemplates}
//             >
//               <FontAwesomeIcon icon={faBookReader} className="h-4 w-4 mr-2" />
//               Templates

//             </button>
//             <div className="relative">
//               <select
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={selectFonts}

//               >
//                 Select Font
//                 <option value="Arial">Arial</option>
//                 <option value="Calibri">Calibri</option>
//                 <option value="Courier New">Courier New</option>
//                 <option value="Helvetica">Helvetica</option>
//                 <option value="Times New Roman">Times New Roman</option>
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                 <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
//               </div>
//             </div>
//             <button
//               className="flex items-center border-2 hover:border-green-800 rounded-md px-4 py-2"
//             >
//               <select
//                 className="w-full "
//                 onChange={fontSize}
//               >

//                 <option value="10px">10px</option>
//                 <option value="12px">12px</option>
//                 <option value="14px">14px</option>
//                 <option value="16px">16px</option>
//                 <option value="18px">18px</option>
//                 <option value="20px">20px</option>
//               </select>

//             </button>
//             <button
//               className="flex items-center border-2 hover:border-red-800 rounded-md px-4 py-2"
//               onClick={colorScheme}
//             >
//               <FontAwesomeIcon icon={faPalette} className="h-6 w-6 mr-2" />

//             </button>
//             <div className="relative">
//               <button
//                 className="flex items-center border-2 hover:border-yellow-800 rounded-md px-4 py-2"
//                 onClick={() => {
//                   const lineSpaceDropdown = document.querySelector('.line-space-dropdown');
//                   if (lineSpaceDropdown) {
//                     lineSpaceDropdown.classList.toggle('hidden');
//                   }
//                 }}
//               >
//                 <FontAwesomeIcon icon={faAlignCenter} className="h-6 w-6 mr-2" />
//               </button>
//               <div className="line-space-dropdown hidden absolute left-0 mb-2 bg-white rounded-md shadow-lg">
//                 <ul className="m-0 p-0">
//                   <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("single")}>1</li>
//                   <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("half")}>1.5</li>
//                   <li className="px-4 py-2 hover:bg-gray-200" onClick={() => addLineSpace("double")}>2</li>
//                 </ul>
//               </div>

//             </div>

//           </div>


//         </div>

//       </div>

//     </div>
//   );
// };

// export default BuildForm;

// const selectFonts = () => {
//   alert("Select Font")
// }

// const addLineSpace = (_lineSpace: string) => {
//   alert("Add Line Space")
// }
// const fontSize = () => {

//   alert("Font Size")
// }
// const showTemplates = () => {
//   const templateView = document.querySelector('.templateview');
//   if (templateView) {
//     templateView.classList.toggle('hidden');
//     if (templateView.classList.contains('hidden')) {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     } else {
//       templateView.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }

// const colorScheme = () => {
//   alert("Color Scheme is coming soon")
// }


