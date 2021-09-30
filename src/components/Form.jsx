import React,{useState} from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Joi from "joi";



function Form(props){

    const [err, seterr] = useState(false)

    let history = useHistory()

    const schema = Joi.object().keys({

        Inputname:Joi.string().min(3).max(30).required(),

        Designation:Joi.number().min(1).max(30).required(),
    })

    const formik = useFormik({
        initialValues:{
            Inputname:'',
            Designation:'',
        },
        onSubmit:values =>{

            const result = schema.validate({Inputname:values.Inputname,Designation:values.Designation})

            if(result.error){
                alert(result.error.message)
                seterr(true)
            }else if(formik.isSubmitting){
                console.log("routing!")
                seterr(false)
                props.state({name:formik.values.Inputname,des:formik.values.Designation})
                history.push("/success")
            }
            
        }
    })
    return (
        <div className="sm:32 lg:64">
            <form onSubmit={formik.handleSubmit}>
                <div className="py-4">
                    <label className="text-blue-400 font-bold pb-10 " htmlFor = "Inputname">Name<span className = "text-red-600">*</span></label><br/>
                    {err?<div className="text-red-500 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 relative top-3 left-52" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h6 className = "relative -top-0.5 left-56">Enter name</h6>
                    </div>:null}
                    <input className= "py-2 px-7 rounded-full border-2 border-red-300" placeholder="Enter Full Name" onChange={formik.handleChange} name="Inputname" id="Inputname" value={formik.values.Inputname} required/>
                </div>
                
                <div className="py-4">
                    <label className="text-blue-400 font-bold pb-10" htmlFor = "Designation">Designation<span className = "text-red-600">*</span></label><br/>
                    {err?<div className="text-red-500 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 relative top-3 left-40" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h6 className = "relative -top-0.5 left-44">Enter Valid number</h6>
                    </div>:null}
                    <input className= "py-2 px-7 rounded-full border-2 border-red-300" placeholder="Enter Position" onChange={formik.handleChange} name="Designation" id="Designation" value={formik.values.Designation} required/>
                </div>

                <div className="py-4 text-left">
                    <label className="text-blue-400 font-bold" htmlFor = "Language">Language</label><br/>
                    <select className= "py-2 px-24 rounded-full border-2 border-red-300">
                        <option name = "English">English</option>
                        <option name = "Hindi">Hindi</option>
                        <option name = "Marathi">Marathi</option>
                        <option name = "Bengali">Bengali</option>
                    </select><br/>
                </div>
                <div className="login px-20 py-5 relative right-6">
                    <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-12 rounded-full" type="submit">Login &gt;</button>
                </div>
            </form>
        </div>
    )

}

export default Form;