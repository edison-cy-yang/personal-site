import React, { Component } from "react";

export default function About(props) {
   let name, profilepic, bio, street, city, province, zip, phone, email, resumeDownload;
   if (props.data) {
      name = props.data.name;
      profilepic = "images/" + props.data.image;
      bio = props.data.bio;
      street = props.data.address.street;
      city = props.data.address.city;
      province = props.data.address.province;
      zip = props.data.address.zip;
      phone = props.data.phone;
      email = props.data.email;
      resumeDownload = props.data.resumedownload;
   }

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img
               className="profile-pic"
               src={profilepic}
               alt="Edison Profile Pic"
               />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>{bio}</p>
               <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span>
                     <br />
                     <span>
                        {city}, {province}
                     </span>
                     <br />
                     <span>{email}</span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button">
                     <i className="fa fa-download"></i>Download Resume
                     </a>
                  </p>
               </div>
               </div>
            </div>
         </div>
      </section>
   );
}
