import { useState } from 'react'

const ContactForm = () => {

    const [formDetails, setFormDetails] = useState({
        fname: "", lname: "", email: "", message: ""
    })

    const [disableBtn, setDisableBtn] = useState(false);

    const formInputChangeHandler = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    }

    const formSubmitHandler = (e) => {
        setDisableBtn(true);
        const { fname, lname, email, message } = formDetails;

        if (fname === "" || lname === "" || email === "" || message === "") {
            alert("All fields required!")
            setDisableBtn(false);
        } else {
            // semperblinds@gmail.com
            fetch("https://formsubmit.co/ajax/semperblinds@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "Full Name": fname + " " + lname,
                    "Email ID": email,
                    Message: message
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data);

                    if (data.success) {
                        alert(data.message)
                    } else {
                        alert("Error occured : " + data.message)
                    }

                    setFormDetails({
                        fname: "", lname: "", email: "", message: ""
                    })
                    setDisableBtn(false);
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <form className="w-full">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name='fname'
                        value={formDetails.fname}
                        onChange={formInputChangeHandler}
                        placeholder="Jane"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        name='lname'
                        value={formDetails.lname}
                        onChange={formInputChangeHandler}
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        name='email'
                        value={formDetails.email}
                        onChange={formInputChangeHandler}
                        placeholder="jhondoe11@gmail.com"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Your Message
                    </label>
                    <textarea
                        rows="5"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name='message'
                        value={formDetails.message}
                        onChange={formInputChangeHandler}
                    />
                </div>
                <div className="flex justify-between w-full px-3">
                    <button
                        className="disabled:cursor-not-allowed button-box-shadow shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-6 rounded"
                        type="button"
                        disabled={disableBtn}
                        onClick={formSubmitHandler}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm