import { useState } from 'react'
import './Formva.css'


/*all your input should appear in your initialstate vaiable */ 
const initialState = {
    username: '',
    email: '',
    password: '',
    comfirmPassword: '',
    fathersName: '',
    mothersName: '',
    nextKin: '',
    date: '',
    time: '',
    gender: ''
}

const Gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
]

const Formvalidation = () => {

const[formData, setFormDate] = useState(initialState);


/*de-structuring the initialstate*/ 
const{username, email,password,comfirmPassword, fathersName,mothersName,nextKin,time,date,gender} = formData

const [errors, setErrors] = useState({});


const validateForm = () => {
    let newErrors = {};

    if(!username){
        newErrors.username = 'username is required'
    }
    if(!date){
        newErrors.date = 'date is required'
    }
    if(!time){
        newErrors.time = 'time is required'
    }
    if(!gender){
        newErrors.gender = 'gender is required'
    }
   


    if(!fathersName){
        newErrors.fathersName = "Father's name is required"
    }

    if(!mothersName){
        newErrors.mothersName = "mother's name is required"
    }


    if(!nextKin){
        newErrors.nextKin = "Next of kin name is required"
    }


        //VALIDATE EMAIL
    if (!email){
        newErrors.email = 'Email is required'
    }else if (!/\S+@\S+\.\S+/.test(email)){
        newErrors.email = 'Email is required'
    }

    if (!password) {
        newErrors.password = 'password is required'
    }else if (password.length < 6){
        newErrors.password = 'password must be at least 6 characters long'
    }

    if (!comfirmPassword){
        newErrors.comfirmPassword ='Comfirmpassword is required'
    }else if(comfirmPassword !== password){
        newErrors.comfirmPassword = 'passwords do not match'
    }
        setErrors(newErrors);

        //Returs true if there are no errors
        return Object.keys(newErrors).length == 0;


       
        };
        const handleSubmit = (e) =>{
            e.preventDefault();
        
            if (validateForm()){
                console.log('form submited:', formData);
                setFormDate(initialState);
            }
        }







const handleChange = (e) =>{
    setFormDate({...formData, [e.target.name]: e.target.value})
}





  return (
      
    <form   className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label >Username</label>
            <input
              type="text" 
              name='username'
              value={username} 
              onChange={handleChange}
              />
            {errors.username && <span className='error'>{errors.username}</span>}


        </div>

        <div className='form-group'>
            <label >Email</label>
            <input type="email"  name='email' value={email} onChange={handleChange}/>
            {errors.email && <span className='error'>{errors.email}</span>}

        </div>
        <div className='form-group'>
            <label htmlFor="">Password</label>
            <input type="password"  name='password' value={password} onChange={handleChange}/>
            {errors.password && <span className='error'>{errors.password}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Comfirm Password</label>
            <input type="password" name='comfirmPassword' value={comfirmPassword} onChange={handleChange}/>
            {errors.comfirmPassword && <span className='error'>{errors.comfirmPassword}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Father's Name</label>
            <input type="text" name='fathersName' value={fathersName} onChange={handleChange}/>
            {errors.fathersName && <span className='error'>{errors.fathersName}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Mother's Name</label>
            <input type="text" name='mothersName' value={mothersName} onChange={handleChange}/>
            {errors.mothersName && <span className='error'>{errors.mothersName}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Next of Kin</label>
            <input type="text" name='nextKin' value={nextKin} onChange={handleChange}/> 
            {errors.nextKin && <span className='error'>{errors.nextKin}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Date of Birth</label>
            <input type="date" name='date' value={date} onChange={handleChange} />
            {errors.date && <span className='error'>{errors.date}</span>}
        </div>

        <div className='form-group'>
            <label htmlFor="">Sign up Date</label>
            <input type="time" name='time' value={time} onChange={handleChange}/>
            {errors.time && <span className='error'>{errors.time}</span>}
        </div>

        <div className='form-group'>
            <select value={gender} name='gender' onChange={handleChange}>
                <option value="" disabled>-- chose your gender</option>
                {Gender.map((e)=>{
                    return(
                        <option key={e.id} value={e.name}>
                            {e.name}
                        </option>
                    )
                })}
            </select>
            {errors.gender && <span className='error'>{errors.gender}</span>}
        </div>



        <button type='submit'>Submit</button>
    </form>
    
  )
}

export default Formvalidation
