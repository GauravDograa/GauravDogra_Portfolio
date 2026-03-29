import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> involvement
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - CSE</h4>
                <h5>Punjab Engineering College, Chandigarh</h5>
              </div>
              <h3>2023-Present</h3>
            </div>
            <p>
              Pursuing Computer Science and Engineering with a CGPA of 8.24
              while building full stack projects and strengthening software
              engineering fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>St. Paul's Senior Secondary School, Palampur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Class 12 with 96%, building a strong academic base
              before starting engineering studies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Event Leadership</h4>
                <h5>PECFEST 2024 and E-Summit 2025</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Served as Discipline Subhead for PECFEST 2024 and Joint Head of
              the Event Committee for E-Summit 2025, helping manage planning,
              coordination, and smooth event execution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Communities</h4>
                <h5>Student Counselling Cell and ACM</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed as an IB Member in the Student Counselling Cell and as
              an ACM community member, supporting student engagement, peer
              learning, and technical growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
