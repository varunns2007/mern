import { useState } from 'react'

function Contact() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <section className="contact-page">
            <h2>Welcome to Contact</h2>
            <p>Get in touch with us.</p>
            <form
                className="contact-form"
                onSubmit={(event) => {
                    event.preventDefault()
                    setSubmitted(true)
                }}
                onChange={() => setSubmitted(false)}
            >
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Enter your name"
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label>
                    Mobile number
                    <input
                        type="tel"
                        name="mobile"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        title="Enter a 10-digit mobile number"
                        required
                    />
                </label>
                <button type="submit">Submit</button>
                {submitted && (
                    <p className="contact-success" role="status">
                        Your contact details passed validation.
                    </p>
                )}
            </form>
        </section>
    )
}

export default Contact
