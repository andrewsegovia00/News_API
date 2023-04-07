import React from 'react'

const Contact = () => {
  return (
    <div className="text-left bg-secondary py-12 px-2">
        <div className="grid grid-cols-2 gap-10" style={{padding: '25px'}}>
            <div className="text-white leading-5 py-5">
                <h1 className="lowercase text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Let's connect</h1>
                <div className="pt-0 sm:pt-1 text-base sm:text-base md:text-xl mt-4">
                    <p>GitHub</p>
                    <p>Email</p>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className="block lg:flex py-4">
                <div className="md:flex flex-col flex-1 ">
                    <label className="text-base" htmlFor="name">Name:</label>
                    <input className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full" type="text" id="name" name="name" placeholder="John Doe" />
                    <label className="text-base" htmlFor="email">Email:</label >
                    <input className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full"  type="email" id="email" name="email" placeholder="johndoe123@gmail.com" />
                    <label className="text-base"  htmlFor="subject">Subject:</label>
                    <input className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full"  type="text" id="subject" name="subject" placeholder="Website Creation Request!" />
                </div>
                <div className="flex flex-col flex-1 pt-6 lg:pt-0 lg:ml-5 ">
                    <label className="text-base" htmlFor="body">Body:</label>
                    <textarea className="bg-blue-900 border-b-2 border-gray-400 border-r-0 border-t-0 border-l-0 w-full md:w-full lg:w-700 h-16 md:h-20" id="body" name="body" placeholder="How can I help you?"></textarea>
                    <button className="my-4 px-5 py-1 border-none rounded-md bg-green-500 text-white text-base cursor-pointer hover:bg-green-700" type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Contact