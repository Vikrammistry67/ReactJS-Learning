import { useState } from "react"

const Register = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    );


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const RegisterHandler = (e) => {
        e.preventDefault();
        setFormData({
            username: '',
            email: '',
            password: ''
        });
        console.log(formData);
    };


    return (
        <div>
            <form onSubmit={RegisterHandler}>
                <input
                    type="text"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}
                /> <br /> <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register