import React from 'react';

const Project = () => {
  return (
    <div className="w-full h-auto bg-black overflow-x-hidden py-10">
      <h1 className="text-4xl font-semibold text-blue-600 text-center">PROJECTS </h1>
      <div className="w-screen top-10 my-10 border-10 gap-5 grid grid-cols-3 justify-center align-middle">

        <div className="w-[10vw] h-[10vw] relative mx-20 my-20 grid grid-cols-1">
          <h2 className="text-1xl font-semibold text-white">Project One</h2>
          <p className="text-1xl text-white">Completed Project will be displayed here</p>
        </div>

        <div className="w-[10vw] h-[10vw] relative mx-20 my-20 grid grid-cols-1">
          <h2 className="text-1xl font-semibold text-white">Project Two</h2>
          <p className="text-1xl text-white">Completed Project will be displayed here</p>
        </div>

        <div className="w-[10vw] h-[10vw] relative mx-20 my-20 grid grid-cols-1">
          <h2 className="text-1xl font-semibold text-white">Project Three</h2>
          <p className="text-1xl text-white">Completed Project will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default Project;