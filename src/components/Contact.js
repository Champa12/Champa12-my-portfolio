import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/*-Name input*/}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="Name"
                        />
                        {/*-Phone input*/}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            phone="Phone Number"
                        />
                        {/*-Email input*/}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            email="Email"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/*Description*/}
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Plese describe shortly your project"
                            email="email"
                        ></textarea>
                        <button className="sub-button contact-btn" type="submit">contact me</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact