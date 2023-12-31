import React from "react"
import psuImg from "../psuImg.png";
import wildRydesImg from "../wildRydesImg.png"
import moonBaseImg from "../moonBaseImg.jpg";
import objectDetImg from "../objectDetImg.jpg";

const Project = () => {
    return (
        <div id="project" className="project">
            <h1 className="py-5"> Project </h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <img className="img" src={psuImg} alt="PSU image.." />
                            <h3>PSU University database creation</h3>
                            <ul>
                                <li>Created University database using sql command.</li>
                                <li>Frontend develop using MySQL-Apache_PHP to insert data into Student table using a form.</li>
                                <li>Backend development using MySQL-Apache_PHP to insert, update, delete, and print data.</li>
                                
                             </ul>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <img className="img" src={wildRydesImg} alt="Wild Rydes image.." />
                            <h3>Wild Rydes</h3>
                            <ul>
                                <li>Created university webpage where user can insert, update, and delete data from database.</li>
                                <li>Using Lambda, User Authentication, Amazon Cognito, Amazon S3, Amazon API Gateway, Node.js, Python, NoSQL
                                database, Amazon DynamoDB function and features.</li>
                                
                            </ul>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <img className="img" src={moonBaseImg} alt="Moon Base image.." />
                            <h3>Moon Base Operation Ignition</h3>
                            <ul>
                               <li>Implemented SLDC project of Lighting, Fire, and water distribution system.</li>
                                <li>Use of the M5 stack, different sensors, and a way to share this information with the Operation Center.</li>
                         </ul>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <img className="img" src={objectDetImg} alt="Object Detection image.." />
                            <h3>Object detection game</h3>
                            <ul>
                                <li>Implement object detection using a hidden Markov model with a rotating camera to recreate the squid game called “Red
                                Light, Green Light”.</li>
                                <li>Set up the camera to connect with the servo motor, and using either a laptop or separate Raspberry Pi to control its
                                movement and teach the program to identify each moving players.</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Project