export function ContactSection() {
  return (
    <div
      id="contact"
      className="scroll-mb-20  min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-12"
    >
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels.
        </p>
      </div>

      {/* Contact Card */}
      <div className="overflow-hidden rounded-xl shadow-lg mx-auto max-w-[980px] w-full">
        {/* Header */}
        <div
          className="p-10 text-center text-white"
          style={{
            background: "linear-gradient(to right, rgb(47, 128, 237), rgb(28, 73, 217))",
          }}
        >
          <h3 className="text-3xl font-semibold mb-2">Adir Zadok</h3>
          <p className="text-gray-300 text-base">
            Software Engineering / Software Developer 
          </p>
        </div>

        {/* Contact Grid - stacked vertically */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200 w-full">
          {/* Email */}
          <div className="p-6 flex items-center cursor-pointer relative border-b border-gray-200 w-full">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="text-gray-900">adirzadok16@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 flex items-center cursor-pointer relative border-b border-gray-200 w-full">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="text-gray-900">+972-52-7463257</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adir-zadok-8a28a5230/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 flex items-center border-b border-gray-200 w-full"
          >
            <div className="mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">LinkedIn</p>
              <p className="text-gray-900">Adir Zadok</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adirzadok16"  
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 flex items-center w-full"
          >
            <div className="mr-4">
              <svg
                className="w-6 h-6 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.19c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.107-.776.418-1.305.762-1.605-2.665-.303-5.467-1.331-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.006-.404c1.02.004 2.047.137 3.005.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.922.43.373.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">GitHub</p>
              <p className="text-gray-900">adirzadok16</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
