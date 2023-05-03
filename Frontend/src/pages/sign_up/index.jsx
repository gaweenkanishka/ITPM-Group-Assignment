import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [familySize, setFamilySize] = useState("");
  const [dependents, setDependents] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [languageProficiency, setLanguageProficiency] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [jobSkills, setJobSkills] = useState("");
  const [immigrationStatus, setImmigrationStatus] = useState("");
  const [disabilityStatus, setDisabilityStatus] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      phone: phone,
      email: email,
      address: address,
      nationality: nationality,
      dependents: dependents,
      maritalStatus: maritalStatus,
      educationLevel: educationLevel,
      employmentStatus: employmentStatus,
      incomeLevel: salary,
      familySize: familySize,
      healthStatus: healthStatus,
      languageProficiency: languageProficiency,
      emergencyContact: emergencyContact,
      jobSkills: jobSkills,
      immigrationStatus: immigrationStatus,
      disabilityStatus: disabilityStatus,
      bloodGroup: bloodGroup,
      note: note,
    };

    axios
      .post("http://localhost:8000/api/users", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-gray-200 mt-15">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-1/3 h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover  rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://engage.gov.bc.ca/app/uploads/sites/827/2022/11/9131_Poverty-Reduction-Banner_v4.png')",
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none mt-5 mb-5">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <h2 className="text-x mt-4 font-bold text-left text-cyan-700">
                Personal Details
              </h2>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 text-left"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 text-left"
                    htmlFor="Address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Address"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Phone"
                      type="number"
                      placeholder="Phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="MaritalStatus"
                    >
                      Marital Status
                    </label>
                    {/* <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="MaritalStatus"
                      type="text"
                      placeholder="MaritalStatus"
                    /> */}
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="MaritalStatus"
                      name="MaritalStatus"
                      onChange={(event) => setMaritalStatus(event.target.value)}
                      value={maritalStatus}
                    >
                      <option value="">Select Marital Status </option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </div>

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Nationality"
                  >
                    Nationality
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Nationality"
                    name="Nationality"
                    onChange={(event) => setNationality(event.target.value)}
                    value={nationality}
                  >
                    <option value="">Select Nationality</option>
                    <option value="Sinhala">Sinhala</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Malay">Malay</option>
                    <option value="Burgher">Burgher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-4 md:flex md:justify-between mt-5">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Dependents"
                    >
                      Dependents
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Dependents"
                      type="number"
                      placeholder="Dependents"
                      value={dependents}
                      onChange={(event) => setDependents(event.target.value)}
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="immigrationStatus"
                    >
                      Immigration Status
                    </label>
                    {/* <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="immigrationStatus"
                      type="text"
                      placeholder="immigrationStatus"
                    /> */}
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="immigrationStatus"
                      name="immigrationStatus"
                      value={immigrationStatus}
                      onChange={(event) =>
                        setImmigrationStatus(event.target.value)
                      }
                    >
                      <option value="">Select </option>
                      <option value="citizen">Citizen</option>
                      <option value="permanent-resident">
                        Permanent Resident
                      </option>
                      <option value="work-visa">Work Visa</option>
                      <option value="student-visa">Student Visa</option>
                      <option value="visitor-visa">Visitor Visa</option>
                      <option value="undocumented">Undocumented</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="familySize"
                    >
                      familySize
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="familySize"
                      type="number"
                      placeholder="familySize"
                      value={familySize}
                      onChange={(event) => setFamilySize(event.target.value)}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="emergencyContact"
                    >
                      Emergency Contact
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="emergencyContact"
                      type="number"
                      placeholder="EmergencyContact"
                      value={emergencyContact}
                      onChange={(event) =>
                        setEmergencyContact(event.target.value)
                      }
                    />
                  </div>
                </div>

                <h2 className="text-x mt-8 mb-7 font-bold text-left text-cyan-700">
                  Educational Details
                </h2>

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="educationLevel"
                  >
                    Education Level
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="educationLevel"
                    name="educationLevel"
                    value={educationLevel}
                    onChange={(event) => setEducationLevel(event.target.value)}
                  >
                    <option value="">Select EducationLevel</option>
                    <option value="Primary">Primary [Grades1–5]</option>
                    <option value="Junior">Junior Secondary [Grades6–9]</option>
                    <option value="Senior">
                      Senior Secondary [Grades10–11]{" "}
                    </option>
                    <option value="Certificate">
                      General Certificate of Education Advanced Level
                      [Grades12–13]
                    </option>
                    <option value="Vocational">Vocational Diploma</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                </div>

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 mt-3"
                    htmlFor="LanguageProficiency"
                  >
                    Language Proficiency
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="LanguageProficiency"
                    name="LanguageProficiency"
                    value={languageProficiency}
                    onChange={(event) =>
                      setLanguageProficiency(event.target.value)
                    }
                  >
                    <option value="">Select Proficiency</option>
                    <option value="0">0 – No Proficiency</option>
                    <option value="1">1 – Elementary Proficiency</option>
                    <option value="2">2 – Limited Working Proficiency. </option>
                    <option value="3">
                      3 – Professional Working Proficiency.
                    </option>
                    <option value="4">
                      4 – Full Professional Proficiency.
                    </option>
                    <option value="5">
                      5 – Native / Bilingual Proficiency.
                    </option>
                  </select>
                </div>

                {/* </div> */}

                <h2 className="text-x mt-8 mb-7 font-bold text-left text-cyan-700">
                  Professional Details
                </h2>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="incomeLevel"
                    >
                      IncomeLevel
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="salary"
                      value={salary}
                      onChange={(event) => setSalary(event.target.value)}
                    >
                      <option value="">Select Salary</option>
                      <option value="under_20k">Under 20,000</option>
                      <option value="20k-40k">20,000 - 40,000</option>
                    </select>
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="jobSkills"
                    >
                      Job Skills
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="jobSkills"
                      type="text"
                      placeholder="Job Skills"
                      value={jobSkills}
                      onChange={(event) => setJobSkills(event.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 text-left"
                    htmlFor="EmploymentStatus"
                  >
                    EmploymentStatus
                  </label>
                  {/* <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="EmploymentStatus"
                    type="text"
                    placeholder="EmploymentStatus"
                  /> */}
                  <select
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="EmploymentStatus"
                    name="EmploymentStatus"
                    value={employmentStatus}
                    onChange={(event) =>
                      setEmploymentStatus(event.target.value)
                    }
                  >
                    <option value="">Select Employment Status</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <h2 className="text-x mt-8 mb-7 font-bold text-left text-cyan-700">
                  Medical Details
                </h2>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Health Status"
                    >
                      HealthStatus
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="healthStatus"
                      type="text"
                      placeholder="HealthStatus"
                      value={healthStatus}
                      onChange={(event) => setHealthStatus(event.target.value)}
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="disabilityStatus"
                    >
                      Disability Status
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="disabilityStatus"
                      type="text"
                      placeholder="DisabilityStatus"
                      value={disabilityStatus}
                      onChange={(event) =>
                        setDisabilityStatus(event.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 "
                    htmlFor="blood"
                  >
                    Blood Group
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-5"
                    id="bloodGroup"
                    value={bloodGroup}
                    onChange={(event) => setBloodGroup(event.target.value)}
                  >
                    <option value="">Select Blood Group</option>A RhD positive
                    <option value="A+">A RhD positive (A+)</option>
                    <option value="A-">A RhD negative (A-)</option>
                    <option value="B+">B RhD positive (B+)</option>
                    <option value="B-">B RhD negative (B-)</option>
                    <option value="O+">O RhD positive (O+)</option>
                    <option value="O-">O RhD negative (O-)</option>
                    <option value="AB+">AB RhD positive (AB+)</option>
                    <option value="AB-">AB RhD negative (AB-)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 text-left"
                    htmlFor="note"
                  >
                    Add Note
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="note"
                    type="text"
                    placeholder="Add note if needed"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <div className="text-xs italic text-red-500">
                      Please choose a password.
                    </div>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/signIn"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
