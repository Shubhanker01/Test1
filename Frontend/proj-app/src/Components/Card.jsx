import { useState } from "react"
export default function Card(props) {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
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
                            <div className="bg-[#fefefe] m-auto mt-[50px] rounded-lg border-black w-[750px]">
                                <button className="relative right-[10px] top-[10px]" onClick={()=>{setModal(false)}}> 
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVR4nO2XS07DQAyGswEuwiqrcbJoj8C+cY7Q63XFsUBA1+6PplKLiCaMHyMVCSxlaX9fIvmRrvuPHwI93yNx785P3OcavuRxfyc0HSTxG4Z5a84feBSaXoWmZzw+PbjgJ2LkxypxgV/zLRJYwK0SS7hJAitwrcQaXCWBCrwmUYNXJZC4z8VrBa4S427zJb/bmHLXOgvjPAjxi7rQMG+1b14Sj0sQH4X4oxncI9Ec3lrCBW8lEYJHJZrAv0tM71o4iI/N4Dlyq4FYLZC7w7PAimHp89Kc6G4BP7WQQBAekkAjuEsCltl+HsW67lBJwLFYPAusDE83XsewHCSFIaP9EqGrSCrjtSYRugtFOdvXJEKXsRgXy1Ii9G8gzq12kXDBf8WvWfdX4hOkmpOs7XEBnwAAAABJRU5ErkJggg=="/>
                                </button>
                                <h1>Send your Information</h1>
                                <form>
                                    <div>
                                        <label for="Name" id="name">Name</label>
                                        <br />
                                        <input type="text" placeholder="Enter your name"></input>
                                    </div>
                                    <div>
                                        <label for="email" id="email">Email</label>
                                        <br />
                                        <input type="email" placeholder="Enter your email"></input>
                                    </div>
                                    <div>
                                        <label for="email" id="city">City</label>
                                        <br />
                                        <input type="text" placeholder="Enter your place"></input>
                                    </div>
                                    <div>
                                        <label for="message" id="message">Message</label>
                                        <br />
                                        <textarea name="message" id="message" placeholder="Enter your message"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

            }

        </>
    )
}