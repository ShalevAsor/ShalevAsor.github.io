import React from 'react';

const Expertise = () => (
  <section className="section" id="section--2">
    <div className="section__title">
      <h2 className="section__description">My Expertise</h2>
      <h3 className="section__header">My Journey in Education, Courses, and Skills.</h3>
    </div>

    <div className="operations">
      <div className="operations__tab-container">
        <button className="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">
          <i className="fas fa-graduation-cap"></i>
          <span>01</span>Education
        </button>
        <button className="btn operations__tab operations__tab--2" data-tab="2">
          <i className="fas fa-book"></i>
          <span>02</span>Courses
        </button>
        <button className="btn operations__tab operations__tab--3" data-tab="3">
          <i className="fas fa-tools"></i>
          <span>03</span>Skills
        </button>
      </div>

      <div className="operations__content operations__content--1 operations__content--active">
        <div className="operations__icon operations__icon--1">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h5 className="operations__header">B.Sc. in Computer Science and Mathematics</h5>
        <p>
          During my B.Sc. in Computer Science and Mathematics at Ariel University, I engaged in a comprehensive study of both core and advanced topics. My coursework included Algorithms 1 and 2, Private Computing, Problem Solving with Search, Boolean Satisfiability, Object-Oriented Programming (OOP), and Economic Algorithms, among others. I graduated with a GPA of 85, reflecting my strong academic performance and dedication to mastering these subjects. My studies provided me with a solid foundation in both theoretical and applied computer science, preparing me for a successful career in the field.
        </p>
      </div>

      <div className="operations__content operations__content--2">
        <div className="operations__icon operations__icon--2">
          <i className="fas fa-book"></i>
        </div>
        <h5 className="operations__header">Courses and Certifications</h5>
        <p>I have completed several courses on platforms like Udemy that have significantly enhanced my skills:</p>
        <p><strong>Data Structures & Algorithms:</strong> Solved over 150 problems on various topics, including strings, arrays, data structures, and dynamic programming, using C++.</p>
        <p><strong>The Complete JavaScript Course 2024:</strong> Gained advanced knowledge of JavaScript, including modern ES6+ features, asynchronous programming, and real-world project development. Developed a deep understanding of JavaScript fundamentals and modern tools like NPM and Babel.</p>
        <p><strong>Master the Coding Interview: Data Structures + Algorithms:</strong> Prepared for coding interviews by mastering different data structures and algorithms. Enhanced interview skills and learned to handle offers and negotiate raises effectively.</p>
        <p><strong>The Complete Git Guide:</strong> Achieved a comprehensive understanding of Git and GitHub, essential for version control and collaboration.</p>
      </div>

      <div className="operations__content operations__content--3">
        <div className="operations__icon operations__icon--3">
          <i className="fas fa-tools"></i>
        </div>
        <h5 className="operations__header">Skills and Tools</h5>
        <p>I am proficient in a variety of programming languages and tools, including:</p>
        <div className="skills-container">
          <div className="image-container">
            <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
            <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React" />
          </div>
        </div>
        <div className="leetcode-container">
          <p>Check out my LeetCode profile:</p>
          <a href="https://leetcode.com/u/shalevasor/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="LeetCode" className="leetcode-icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Expertise;