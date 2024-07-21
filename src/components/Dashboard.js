import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:4000/resumes', {
          headers: {
            'x-auth-token': token,
          },
        });
        setResumes(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch resumes!');
      }
    };

    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {resumes.map((resume) => (
          <li key={resume._id}>
            <p>{resume.name}</p>
            <p>{resume.email}</p>
            <p>{resume.phone}</p>
            <p>{resume.education}</p>
            <p>{resume.experience}</p>
            <p>{resume.skills}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
