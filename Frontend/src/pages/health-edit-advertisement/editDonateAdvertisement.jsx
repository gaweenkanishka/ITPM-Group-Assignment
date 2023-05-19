import { useState, useEffect } from "react";
import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import makeToast from "../../components/toast";
import DonateAdvertisementAPI from "../../api/DonateAdvertisementAPI";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";


const EditDonateAdvertisement = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    // To clear the form after submitting
    const clearForm = () => {
        setPhotos("");
    };

    // Submit form
    const handleUpdate = (event) => {
        event.preventDefault();

        const data = {
            type: type,
            title: title,
            description: description,
            photos: photos,
            phone: phone,
            location: location,
            name: name,
            
        };

        DonateAdvertisementAPI.updateDonateAdvertisement(id,data)
            .then((response) => {
                makeToast({
                    type: "success",
                    message: "Donate Advertisement Added",
                });
                navigate("/donate-Advertisements");
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
                    setPhotos(downloadURL);
                });
            }
        );
    };

    // Get Advertisement by ID
    useEffect(() => {
        DonateAdvertisementAPI.getDonateAdvertisementById(id)
            .then((res) => {
                setType(res.data.type);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPhotos(res.data.photos);
                setPhone(res.data.phone);
                setLocation(res.data.location);
                setName(res.data.name);
            })
            .catch((err) => {	
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900">Edit Advertisement</h3>
                            <form onSubmit={handleUpdate} className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

                                    <div className="sm:col-span-2">
                                        <label htmlFor="type" className="text-base font-medium text-gray-900"> Type </label>
                                        <div className="mt-2.5 relative">
                                            {/* <select required className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" placeholder="Type">
                                                <option value={type.valueOf("wanted")} onChange={(event) => setType(event.target.value)}>Wanted</option>
                                                <option value={type} onChange={(event) => setType(event.target.value)}>Donate</option>
                                            </select> */}
                                            <div className="mt-2.5 relative">
                                            <input required type="text" name="type" id="type" placeholder="Enter Type" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={type} onChange={(event)=> setType(event.target.value)}/>
                                        </div>
                                        </div>
                                    </div>

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
                                        <label htmlFor="location" className="text-base font-medium text-gray-900"> Location </label>
                                        <div className="mt-2.5 relative">
                                            <input required type="text" name="location" id="location" placeholder="Enter location" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={location} onChange={(event) => setLocation(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className=" sm:col-span-2">
                                        <label htmlFor="photos" className="text-base font-medium text-gray-900"> Photos </label>
                                        <div className="mt-2.5 relative">
                                            <input type="file" name="photos" id="photos" placeholder="Enter img url" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
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
                                            <input required type="tel" name="phone" id="phone" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" 
                                            value={phone} onChange={(event) => setPhone(event.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Update
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

export default EditDonateAdvertisement;


