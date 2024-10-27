const CallToAction = () => {
  return (
    <>
      <div
        className="w-full  bg-primaryClr"
        // style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">
            Trial Start First 30 Days.
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">
            Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-slate-900 text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
