import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import makeToast from "../../components/toast";
import EventAdvertisementAPI from "../../api/EventAdvertisementAPI";
import { useNavigate } from "react-router-dom";


const CreateEventAdvertisement = () => {

    const navigate = useNavigate();

    const organization=localStorage.getItem("user_id");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [venue, setVenue] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [email, setEmail] = useState("");

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    // To clear the form after submitting
    const clearForm = () => {
        setImage("");
    };

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            organization: organization,
            title: title,
            description: description,
            image: image,
            venue: venue,
            phone: phone,
            location: location,
            name: name,
            date: date,
            time: time,
            email: email,
            
        };

        EventAdvertisementAPI.createEventAdvertisement(data)
            .then((response) => {
                makeToast({
                    type: "success",
                    message: "Event Advertisement Added",
                });
                navigate("/event-Advertisements");
            })
            .catch((err) => {
                makeToast({ type: "error", message: "Error" });
            });

        clearForm();
    };
    
    // Firebase Image Upload
    const handleUpload = () => {
        if (!file) {
            alert("Please choose a file to upload!");
        }

        const storageRef = ref(storage, `/itpm_images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPercent(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImage(downloadURL);
                });
            }
        );
    };


    return (
        <>
        <Header/>
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Create Event Advertisement</h3>
                            <form onSubmit={handleSubmit} className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

                                    <div className="sm:col-span-2">
                                        <label htmlFor="title" className="text-base font-medium text-gray-900"> Title </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="title" id="title" placeholder="Enter Title" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={title} onChange={(event)=> setTitle(event.target.value)}/>
                                        </div>
                                    </div>
                                    
                                    <div className="sm:col-span-2">
                                        <label htmlFor="description" className="text-base font-medium text-gray-900"> Description </label>
                                        <div className="mt-2.5 relative">
                                            <textarea required name="description" id="description" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4" 
                                            value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                                        </div>
                                    </div>

                                    <div className=" sm:col-span-2">
                                        <label htmlFor="image" className="text-base font-medium text-gray-900"> Photos </label>
                                        <div className="mt-2.5 relative">
                                            <input type="file" name="image" id="image" placeholder="Enter img url" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            onChange={(event) => setFile(event.target.files[0])}/>
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-1 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-2"
                                            onClick={handleUpload}
                                            >
                                            Upload
                                            </button>

                                            {percent > 0 && (
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div
                                                className="bg-blue-600 h-2.5 rounded-full my-2"
                                                style={{ width: `${percent}%` }}
                                                ></div>
                                            </div>
                                            )}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <hr className="my-6 border-black" />
                                    </div>

                                    <div className=" sm:col-span-2">
                                        <label htmlFor="venue" className="text-base font-medium text-gray-900"> Venue </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="venue" id="venue" placeholder="Enter Venue" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={venue} onChange={(event) => setVenue(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className=" sm:col-span-2">
                                        <label htmlFor="location" className="text-base font-medium text-gray-900"> Location </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="location" id="location" placeholder="Enter location" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={location} onChange={(event) => setLocation(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="date" className="text-base font-medium text-gray-900 "> Date </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="date" name="date" id="date" placeholder="YYYY-MM-DD" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={date} onChange={(event) => setDate(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="time" className="text-base font-medium text-gray-900"> Time </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="time" id="time" placeholder="Enter time to be held" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={time} onChange={(event) => setTime(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <hr className="my-6 border-black" />
                                    </div>

                                    <div className="sm:col-span-2 ">
                                        <h4 className="text-xl font-semibold text-gray-900"> Contact Information </h4>
                                    </div>

                                    <div className=" mt-3">
                                        <label htmlFor="name" className="text-base font-medium text-gray-900 "> Name </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="name" id="name" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={name} onChange={(event) => setName(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className=" mt-3">
                                        <label htmlFor="phone" className="text-base font-medium text-gray-900"> Phone number </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="tel" name="phone" id="phone" placeholder="Enter your contact Number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={phone} onChange={(event) => setPhone(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className=" sm:col-span-2">
                                        <label htmlFor="email" className="text-base font-medium text-gray-900"> Email </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="email" name="email" id="email" placeholder="Enter Email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={email} onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </> 
    );
};

export default CreateEventAdvertisement;


