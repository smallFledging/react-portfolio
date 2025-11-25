import React, { useState } from 'react';
import Nav from './Nav';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleErrorChecking();
    }

    const handleErrorChecking = () => {
        if(!name || !email || !phone || !message) {
            setError('Please make sure to enter name, email, phone and password');
        }
        else {
            setError('');
        }
    }

    

    return (
        <div>
            <Nav/>
            <form onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={(e) => setName(e.target.value)} 
                />
                
                <label for="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label for="tel">Phone number</label>
                <input 
                    type="tel"
                    name="tel"
                    id="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                
                <label for="msg">Message:</label>
                <textarea
                    id="msg"
                    name="user_message"
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" class="bg-blue-400 rounded-xl text-lg p-3">Submit</button>
                <p class="text-red-500 mt-5">{error}</p>
            </form>
        </div>
    )
}
export default Form;