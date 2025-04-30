import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);  // TS understands e.target.value is valid
    };

    // Event handler for email input
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);  // TS understands e.target.value is valid
    };

    // Event handler for textarea
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);  // TS understands e.target.value is valid
    };

    const form = useRef<HTMLFormElement | null>(null); // Ensure the ref can be null

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form reference is null");
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
                form.current,
                {
                    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!,
                }
            )
            .then(
                () => {
                    setEmail("");
                    setName("");
                    setMessage("");
                    setSuccess("Message Sent Successfully");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div>
            <p className="text-cyan">{success}</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-white">
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-lg bg-lightBrown px-2"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-lg bg-lightBrown px-2"
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    name="message"
                    rows={9}
                    cols={50}
                    placeholder="Message"
                    required
                    className=" rounded-lg bg-lightBrown p-2"
                    value={message}
                    onChange={handleMessage}
                />
                <button
                    type="submit"
                    className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;