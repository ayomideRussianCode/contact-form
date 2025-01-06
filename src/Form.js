import React from "react";

function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green1 px-4 sm:px-6 overflow-hidden sm:overflow-visible">
      <div className=" w-full max-w-md sm:max-w-lg bg-white rounded-lg p-6 sm:p-8 shadow-lg overflow-y-auto sm:overflow-visible max-h-screen sm:max-h-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray mb-6 ">
          Contact Us
        </h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium text-gray1 mb-1"
                for="first-name"
              >
                First Name<span className="text-green">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full h-10 border border-gray1 rounded-md shadow-sm focus:ring-green"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray1 mb-1 "
                for="last-name"
              >
                Last Name <span className="text-green">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full h-10 border border-gray1 rounded-md shadow-sm focus:ring-green"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray1 mb-2"
              for="email"
            >
              Email Address<span className="text-green">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 border border-gray1 rounded-md shadow-sm focus:ring-green"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray1 mb-2">
              Query type<span className="text-green">*</span>
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="flex items-center text-sm font-medium text-gray1 mb-2">
                <div className=" w-full h-10 border border-gray1 rounded-md shadow-sm focus:ring-green">
                <input
                  type="radio"
                  name="general-enquiry"
                  className=" mt-2  text-gray1 focus:ring-green"
                />
                <span className="ml-2 mt-4 text-sm">General Enquiry</span>
                </div>
              </label>
              <label className="flex items-center text-sm font-medium text-gray1 mb-2">
                <input
                  type="radio"
                  name="support-request"
                  className="text-gray1 focus:ring-green"
                />
                <span className="ml-2 text-sm">Support Request</span>
              </label>
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray1 mb-1 " for="message">
              Message<span className="text-green">*</span>
              <textarea id="message" rows="8" className="w-full border border-gray1 rounded-md shadow-sm focus:ring-green"></textarea>
            </label>
          </div>
          <div className="flex items-start space-x-2 mb-6">
            <input type="checkbox" id="consent" className="text-gray1 focus:ring-green border-green rounded" />
            <label for="consent" className="text-sm text-gray1">
              I consent to being contacted by the team{"."}
              <span className="text-green">*</span>
            </label>
          </div>
          <button type="submit" className="flex items-center justify-center border  bg-green rounded-md shadow-sm w-full h-10 font-medium text-sm text-white">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
