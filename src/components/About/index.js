import React from 'react';
import photo from '../../assets/cover/profilePhoto.jpeg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
        <img className="profile-img" src={photo}></img>
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>
        Full Stack Web Developer with an ability to learn quickly and adapt from working collaboratively
        and self-starting. I’m eager to start a challenging position in web development and to be able to
        use my skills in communication, critical thinking, and leadership to collaborate on a high performing, 
        positive, and creative team.</p>
      </div>
    </section>
  );
}

export default About;
