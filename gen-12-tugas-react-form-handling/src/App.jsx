import "./App.css";
import useForm from "./useForm";

function App() {
  const { formData, handleInput, handleCheckBox } = useForm({
    username: "",
    email: "",
    noHP: "",
    dob: "",
    occupation: "",
    gender: "",
    skills: [],
  });

  const formSubmit = (evt) => {
    evt.preventDefault();
    alert("Data Berhasil Tersimpan!");
    console.log(formData);
  };

  return (
    <>
      <div className="RegistrationForm">
        <form onSubmit={formSubmit}>
          <h1>Register</h1>
          <div className="formItem">
            <label>
              Username
              <input className="formInput" type="text" value={formData.username} onChange={(evt) => handleInput("username", evt.target.value)} required />
            </label>
          </div>
          <div className="formItem">
            <label>
              Email
              <input className="formInput" type="text" value={formData.email} onChange={(evt) => handleInput("email", evt.target.value)} required />
            </label>
          </div>
          <div className="formItem">
            <label>
              No Handphone
              <input className="formInput" type="text" value={formData.noHP} onChange={(evt) => handleInput("noHP", evt.target.value)} required />
            </label>
          </div>
          <div className="formItem">
            <label>
              Date of Birth
              <input className="formInput" type="date" value={formData.dob} onChange={(evt) => handleInput("dob", evt.target.value)} required />
            </label>
          </div>
          <div className="formItem">
            <label>
              Occupation
              <select className="formSelect" name="occupation" value={formData.occupation} onChange={(evt) => handleInput("occupation", evt.target.value)}>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="formItem">
            <label>Gender </label>
            <div className="radioItem">
              <label className="itemLabel">
                <input type="radio" value="male" checked={formData.gender === "male"} onChange={() => handleInput("gender", "male")} />
                Male
              </label>
              <label className="itemLabel">
                <input type="radio" value="female" checked={formData.gender === "female"} onChange={() => handleInput("gender", "female")} />
                Female
              </label>
            </div>
          </div>
          <div className="formItem">
            <label>Skill</label>
            <div className="checkboxItem">
              <label className="itemLabel">
                <input type="checkbox" value="java" checked={formData.skills.includes("java")} onChange={(evt) => handleCheckBox("skills", "java", evt.target.checked)} />
                Java
              </label>
              <label className="itemLabel">
                <input type="checkbox" value="c++" checked={formData.skills.includes("c++")} onChange={(evt) => handleCheckBox("skills", "c++", evt.target.checked)} />
                C++
              </label>
              <label className="itemLabel">
                <input type="checkbox" value="php" checked={formData.skills.includes("php")} onChange={(evt) => handleCheckBox("skills", "php", evt.target.checked)} />
                PHP
              </label>
              <label className="itemLabel">
                <input type="checkbox" value="react" checked={formData.skills.includes("react")} onChange={(evt) => handleCheckBox("skills", "react", evt.target.checked)} />
                React
              </label>
            </div>
          </div>
          <div className="formItem">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
