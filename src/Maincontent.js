import React from 'react'
import { useState, useEffect } from 'react'
import stubs from './stubs'
import axios from 'axios'

const Maincontent = () => {
    const [code ,setCode] = useState("")
    const [output,setOutput] = useState("")
    const [language,setLanguage] = useState("cpp")

    useEffect(()=>{
        setCode(stubs[language])
    },[language])

    const handleSubmit = async ()=>{
        setOutput("")
        const payload = {
            language,
            code
        }
        const { data } = await axios.post("http://localhost:5000/run",payload)
        console.log(data)
        setOutput(data.output)
        
    }

    return (
        <div>
            <h1>在线编译器</h1>
            <div>
                <label>当前语言：</label>
                <select
                    value={language}
                    onChange={(e)=>{
                        setLanguage(e.target.value)
                    }}
                >
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                </select>
            </div>
            <br/>
            <textarea
                rows="20"
                cols="75"
                value={code}
                onChange={(e)=>{
                    setCode(e.target.value)
                }}
            >

            </textarea>
            <br/>
            <button onClick={handleSubmit}>提交代码</button>
            <br/>
            <label>结果输出</label>
            <p>{output}</p>

        </div>
    )
}

export default Maincontent