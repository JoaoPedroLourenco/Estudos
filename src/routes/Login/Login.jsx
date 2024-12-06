import React from "react";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <main className="w-full flex overflow-hidden">
      {/* ------ Form aside ------- */}
      <div className="w-full md:max-w-96 h-screen flex flex-col items-center justify-between px-10 md:px-12 py-6 bg-formBg z-10">
        <div className="w-full flex gap-3 ">
          <img src={logo} alt="Directus logo" className="w-12 rounded-sm" />
          <div>
            <h3 className="text-md text-white font-semibold">Directus</h3>
            <p className="text-sm text-white text-opacity-30">Application</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl text-white font-semibold">Sign In</h1>
          <form className="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 bg-transparent border border-borderInput rounded-md px-3 focus:outline-8 focus:border-roxo outline-none placeholder:text-sm text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-transparent border border-borderInput rounded-md px-3 focus:outline-8 focus:border-roxo outline-none placeholder:text-sm text-white mb-2"
            />
            <div className="w-full flex justify-between items-center">
              <button className="bg-roxo px-10 py-3 md:px-10 md:py-2 rounded-md font-semibold hover:bg-roxoHover duration-200">
                Sign In
              </button>
              <a
                href="#"
                className="text-textoCinza hover:text-white duration-200 text-sm"
              >
                Forgot Password
              </a>
            </div>
          </form>
        </div>
        <p className="text-opacity-30 text-white self-start text-sm">
          Not Authenticated
        </p>
      </div>
      {/* ------ fim do form aside ------- */}
      <section className="w-full bg-ladoDirBg hidden md:flex">
        <div className="w-full h-screen relative">
          <div className="w-[800px] h-[600px] rounded-full blur-3xl bg-indigo-700 absolute -bottom-52 -left-52 -z-0"></div>
          <div className="w-[1000px] h-[600px] rounded-full blur-3xl bg-[#A36B9C] absolute -bottom-96 left-52 z-10"></div>
          <div className="w-[500px] h-[400px] rounded-full blur-3xl bg-indigo-700 absolute -bottom-80 -right-10 -z-0"></div>
        </div>
      </section>
    </main>
  );
};

export default Login;
