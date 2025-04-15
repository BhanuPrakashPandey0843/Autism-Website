import React from 'react'

const Abouthero = () => {
  return (
    <>
      <section className="w-full h-120 bg-gradient-to-br from-purple-100 via-white to-pink-100 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About Autism
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We are dedicated to raising awareness and providing support for individuals with autism. Learn more about the condition, its challenges, and the journey toward a more inclusive world.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Learn More
          </button>
        </div>
      </section>
    </>
  )
}

export default Abouthero
