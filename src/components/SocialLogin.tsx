import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <div className="flex gap-6 mt-6 self-center">
      <div className="flex w-16 h-10 rounded-lg items-center justify-center shadow-lg text-2xl cursor-pointer">
        <FcGoogle />
      </div>
      <div className="flex w-16 h-10 rounded-lg items-center justify-center shadow-lg text-2xl cursor-pointer">
        <FaGithub />
      </div>
      <div className="flex w-16 h-10 rounded-lg items-center justify-center shadow-lg text-2xl text-blue-600 cursor-pointer">
        <FaLinkedin />
      </div>
    </div>
  );
}
