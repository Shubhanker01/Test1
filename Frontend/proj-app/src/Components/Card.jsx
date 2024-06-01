import { useState } from "react"
export default function Card(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [message, setMessage] = useState("")
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const sendData = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "name": "Shub",
            "email": "shub@gmail.com",
            "city": "shimla",
            "message": "hey"
        });

        let response = await fetch("http://localhost:3000/user", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        console.log(data);


        setModal(false)
        setName("")
        setEmail("")
        setCity("")
        setMessage("")
    }
    return (
        <>
            {
                modal == false ?
                    <div className="bg-zinc-100 h-[315px] w-[250px] rounded-lg mt-[30px] mb-[5px]">
                        <div className="h-[315px]">
                            <img src={props.image} className="rounded-t-lg h-[200px] w-full"></img>
                            <h1 className="text-base h-[30px]">{props.title.length > 20 ? props.title.substr(0, 20) : props.title}</h1>
                            <p className="h-[20px]">{props.price}</p>
                            <button className="w-[150px] bg-zinc-500 text-base text-zinc-50 rounded-lg p-2 mt-[5px] mb-[5px]" onClick={openModal}>Click Here</button>
                        </div>
                    </div> :
                    <div>
                        <div className="bg-zinc-100 h-[315px] w-[250px] rounded-lg mt-[30px] mb-[5px]">
                            <div className="h-[315px]">
                                <img src={props.image} className="rounded-t-lg h-[200px] w-full"></img>
                                <h1 className="text-base h-[30px]">{props.title.length > 20 ? props.title.substr(0, 20) : props.title}</h1>
                                <p className="h-[20px]">{props.price}</p>
                                <button className="w-[150px] bg-zinc-500 text-base text-zinc-50 rounded-lg p-2 mt-[5px] mb-[5px]" onClick={openModal}>Click Here</button>
                            </div>
                        </div>
                        <div className="fixed w-full h-full z-1 left-0 top-0 bg-[rgba(0,0,0,0.4)]">
                            <div className="bg-zinc-50 m-auto mt-[50px] rounded-lg border-black w-[550px]">
                                <button className="relative right-[-234px] top-[14px]" onClick={() => { setModal(false) }}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVR4nO2XS07DQAyGswEuwiqrcbJoj8C+cY7Q63XFsUBA1+6PplKLiCaMHyMVCSxlaX9fIvmRrvuPHwI93yNx785P3OcavuRxfyc0HSTxG4Z5a84feBSaXoWmZzw+PbjgJ2LkxypxgV/zLRJYwK0SS7hJAitwrcQaXCWBCrwmUYNXJZC4z8VrBa4S427zJb/bmHLXOgvjPAjxi7rQMG+1b14Sj0sQH4X4oxncI9Ec3lrCBW8lEYJHJZrAv0tM71o4iI/N4Dlyq4FYLZC7w7PAimHp89Kc6G4BP7WQQBAekkAjuEsCltl+HsW67lBJwLFYPAusDE83XsewHCSFIaP9EqGrSCrjtSYRugtFOdvXJEKXsRgXy1Ii9G8gzq12kXDBf8WvWfdX4hOkmpOs7XEBnwAAAABJRU5ErkJggg==" />
                                </button>
                                <h1 className="text-left ml-[26px] text-3xl mt-[-4px]">Send your Information</h1>
                                <form className="w-full">
                                    <div className="mt-[5px]">
                                        <label for="Name" id="name" className="ml-[-452px]">Name</label>
                                        <br />
                                        <input type="text" placeholder="Enter your name" className="bg-zinc-200 h-[40px] w-[500px] rounded-lg" value={name} onChange={e => setName(e.target.value)}></input>
                                    </div>
                                    <div className="mt-[5px]">
                                        <label for="email" id="email" className="ml-[-452px]">Email</label>
                                        <br />
                                        <input type="email" placeholder="Enter your email" className="bg-zinc-200 h-[40px] w-[500px] rounded-lg" value={email} onChange={e => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className="mt-[5px]">
                                        <label for="email" id="city" className="ml-[-452px]">City</label>
                                        <br />
                                        <input type="text" placeholder="Enter your place" className="bg-zinc-200 h-[40px] w-[500px] rounded-lg" value={city} onChange={e => setCity(e.target.value)}></input>
                                    </div>
                                    <div className="mt-[5px]">
                                        <label for="message" id="message" className="ml-[-440px]">Message</label>
                                        <br />
                                        <textarea name="message" id="message" placeholder="Enter your message" rows="5" cols="30" className="bg-zinc-200 w-[500px] rounded-lg" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                    </div>

                                </form>
                                <button className="w-[500px] bg-zinc-500 text-base text-zinc-50 rounded-lg p-2 mt-[5px] mb-[5px]" onClick={() => { sendData() }}>Send</button>
                            </div>
                        </div>
                    </div>

            }

        </>
    )
}