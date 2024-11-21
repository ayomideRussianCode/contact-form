import React from "react";

function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-200 px-4 sm:px-6 overflow-hidden sm:overflow-visible">
      <div className=" w-full max-w-md sm:max-w-lg bg-white rounded-lg p-6 sm:p-8 shadow-lg">
        <h2 className="text-xl md:text-2l font-bold text-gray-500  mb-6 ">Contact Form</h2>
        <form>
          <div>
            <label>First Name *</label>
            <input/>
          </div>
          <div>
            <label>Last Name *</label>
            <input/>
          </div>
          <div>
            <label>Email Address *</label>
            <input/>
          </div>
          <div>
            <label>Query type *</label>
            <input/>
          </div>
          <div>
            <label>Message *</label>
            <input/>
          </div>
          <div>
            <input/>
            <label>I consent to being contacted by the team *</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

// max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-96
