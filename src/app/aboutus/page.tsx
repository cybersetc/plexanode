import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-slate-950 text-white ">
  <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl">About Us</h2>
      <p className="mt-2 text-lg leading-6 text-gray-400">Learn more about our company and our mission.</p>
    </div>

    <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0 lg:mt-16 ">
      {/* <!-- Company Overview --> */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg m-2 ">
        <h3 className="text-xl font-bold mb-4">Company Overview</h3>
        <p className="text-gray-400 leading-relaxed">At Plexa Node, we specialize in providing high-quality hosting solutions for bots, VPS, and Minecraft servers. Our mission is to empower individuals and businesses with reliable and flexible hosting services tailored to their needs.</p>
      </div>

      {/* <!-- Our Services --> */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg m-2">
        <h3 className="text-xl font-bold mb-4">Our Services</h3>
        <p className="text-gray-400 leading-relaxed">We offer a range of hosting solutions including bot hosting for Discord, Virtual Private Servers (VPS) for versatile computing needs, and dedicated Minecraft server hosting for gaming enthusiasts. Our services are designed to provide stability, security, and scalability for all your hosting requirements.</p>
      </div>

      {/* <!-- Our Mission --> */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-lg m-2">
        <h3 className="text-xl font-bold mb-4">Our Mission</h3>
        <p className="text-gray-400 leading-relaxed">At Plexa Node, our mission is to simplify hosting for our clients. Whether you're running a bot, managing a VPS, or hosting a Minecraft server, we strive to make the process seamless and hassle-free. We are dedicated to delivering exceptional service and support to help you succeed in your online ventures.</p>
      </div>
    </div>

    {/* <!-- Testimonials --> */}
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Testimonial 1 --> */}
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
          <p className="text-gray-400 leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vitae nisi aliquam pharetra."</p>
          <p className="mt-4 text-gray-500 font-bold">- John Doe, CEO of Example Corp</p>
        </div>
        {/* <!-- Testimonial 2 --> */}
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
          <p className="text-gray-400 leading-relaxed">"Sed et ante sed justo convallis fermentum. Integer ut urna vel ligula fermentum auctor id nec dui."</p>
          <p className="mt-4 text-gray-500 font-bold">- Jane Smith, Founder of ABC Company</p>
        </div>
        {/* <!-- Testimonial 3 --> */}
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
          <p className="text-gray-400 leading-relaxed">"Fusce quis vehicula ligula. Nulla facilisi. Proin nec commodo magna. Cras molestie, ipsum vitae pharetra vehicula."</p>
          <p className="mt-4 text-gray-500 font-bold">- Michael Johnson, Director of XYZ Inc</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default page