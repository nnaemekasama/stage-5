import React, { useState } from "react"

function EmailForm() {
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can handle sending the email here
    console.log("Email sent: ", email)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {" "}
      <form
        className="flex w-full gap-3 border-[0.5px] border-[#E7E7ED] px-4 py-2 rounded-xl bg-form-bg"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          id="email"
          name="email"
          className="px-2 py-2 outline-none focus:bg-inherit bg-form-bg border-none w-full font-worksans font-normal text-lg"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="bg-form-btn text-white font-semibold p-2 rounded-lg"
        >
          Send
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-4 rounded-lg shadow-md z-50">
            <h2 className="text-2xl mb-4">Modal Content</h2>
            <p>Your email is: {email}</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailForm
