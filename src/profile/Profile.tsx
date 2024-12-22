import axios from "axios";
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

const Profile = () => {
  const [user, setUser] = useState<any>({
    name: "Mohamed Bouzaiene",
    bio: "Software Engineer & Full Stack Developer",
    html_url: "https://github.com/MohamedBouzaiene",
    avatar_url: "https://avatars.githubusercontent.com/u/44322446?v=4",
    cover: "https://github.com/MohamedBouzaiene/MohamedBouzaiene/blob/main/cover.jpg",
    details: {
      workExperience: "5 years",
      education: "Computer Science",
      skills: ["JavaScript", "React", "NodeJS"],
    },
  });

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/MohamedBouzaiene");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="bg-[#0b1320] p-4 rounded-lg shadow-lg w-full">
      <div className="flex space-x-4 mb-4 justify-center">
        <img className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4" src={user.avatar_url} alt={user.name} />
        <div>
          <h2 className="text-xl font-bold text-gray-800  ">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.bio}</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 justify-center ">
        <h3 className="text-lg font-semibold mb-2">Details</h3>
        <ul className="list-none space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Work Experience:</span> {user.details.workExperience}
          </li>
          <li>
            <span className="font-medium">Education:</span> {user.details.education}
          </li>
          <li>
            <span className="font-medium">Skills:</span>
            <ul className="list-none space-y-1 ml-4">
              {user.details.skills.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Generated Resumes</h3>
        <ul className="divide-y divide-gray-200 text-gray-700">
          <li className="py-2">
            <p className="text-base font-medium">Resume Title 1</p>
            <p className="text-xs text-gray-500">Last Generated: 2024-12-20</p>
          </li>
          <li className="py-2">
            <p className="text-base font-medium">Resume Title 2</p>
            <p className="text-xs text-gray-500">Last Generated: 2024-12-19</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile


