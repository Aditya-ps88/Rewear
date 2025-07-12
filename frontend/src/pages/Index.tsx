import { useState } from "react";
import { Package } from "lucide-react";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/assets/3ef00927ee7d42ee9b777f7e70c8a367/login-a7b0de?format=webp&width=800')`,
        }}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/10"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F3ef00927ee7d42ee9b777f7e70c8a367%2F667d59904c854703bc8ef762bff09276)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Login Title */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-amber-100 tracking-wide text-center drop-shadow-lg">
            Login
          </h1>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto">
          <div className="backdrop-blur-xl bg-white/25 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40">
            {/* Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-50/95 rounded-full flex items-center justify-center shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F3ef00927ee7d42ee9b777f7e70c8a367%2Fbbc10561f6d045e1b6f93fda6ab02e26)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            {/* Form */}
            <div className="space-y-4 sm:space-y-6">
              {/* Username Input */}
              <div>
                <input
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/95 rounded-full text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-amber-400/60 text-center font-medium text-sm sm:text-base shadow-inner"
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/95 rounded-full text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-amber-400/60 text-center font-medium text-sm sm:text-base shadow-inner"
                />
              </div>

              {/* Create Account Link */}
              <div className="text-center py-2">
                <a
                  href="#"
                  className="text-gray-700 text-xs sm:text-sm font-medium underline underline-offset-4 hover:text-gray-900 transition-colors"
                >
                  Create an account
                </a>
              </div>

              {/* Login Button */}
              <div className="pt-2 sm:pt-4">
                <button className="w-full bg-white/95 hover:bg-white text-gray-800 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
