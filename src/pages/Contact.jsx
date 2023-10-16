import React, { useState } from "react";
import axios from "axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import InputText from "../components/InputText";
import InputMessages from "../components/InputMessages";
import { SendButton } from "../components/Button";
import toast from "react-hot-toast";

const Contact = () => {
    const [input, setInput] = useState({
        nama: "",
        email: "",
        pesan: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const dbUrl = "https://sheetdb.io/api/v1/xyvj53qu1g2xc";

    const handleOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value});
    }; 

    const handleSubmit = async () => {
        setIsLoading(true);
        toast.promise(
            axios.post(dbUrl, input), {
                loading: "Sending...",
                success: "Success",
                error: "Can't send messages, try again"
            }, 
            {
                style: {
                    minWidth: "200px"
                }
            }
        ).then(() => {
            setInput({
                nama: "",
                email: "",
                pesan: ""
            });
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="content">
            <Header title={"Contact Me"} desc={(<p>See who send messages to me <a href="https://docs.google.com/spreadsheets/d/1u02bguoH5m-Mwq2y7l5lYXVvtBZJNjKjbtUAXDHrVOg/edit?usp=sharing" rel="noreferrer" target="_blank">here</a>.</p>)} />
            <main>
                <div id="form" className="form-container">
                    <InputText type={"text"} name={"nama"} id={"nama"} placeholder={"Nama Lengkap"} onChange={handleOnChange} value={input.nama} />
                    <InputText type={"email"} name={"email"} id={"email"} placeholder={"Email"} onChange={handleOnChange} value={input.email} />
                    <InputMessages name={"pesan"} id={"pesan"} onChange={handleOnChange} placeholder={"Tulis pesan..."} value={input.pesan} />
                    <SendButton text={"Kirim"} actions={handleSubmit} conditions={isLoading} styles={isLoading ? "disabled" : "send"}/>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;