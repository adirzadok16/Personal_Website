import { links, profileText } from "../consts";
import profilePhoto from "../assets/linkedin_picture.jpg"

export function ProfileSection() {
  return (
    <div
      id="home"
      className="scroll-mt-20 pt-24 min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
    >
      {/* Profile Text Section */}
      <div id="profile" className="max-w-lg mr-0 md:mr-30 pt-5">
        <h1 className="font-bold text-5xl text-black">Adir Zadok</h1>
        <p className="text-gray-700 text-xl font-bold mt-5">Software Engineer</p>

        <div className="w-150">
          <p className="text-gray-600 text-lg mt-5">{profileText}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5 mt-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-white rounded-full ${link.bgColor} ${link.hoverColor} transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Profile Picture Section */}
      <div id="profile_picture" className="w-72 h-72 mt-5 md:mt-0">
        <img
          src={profilePhoto}
          alt="profile_picture"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  )
}


