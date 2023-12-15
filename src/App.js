import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="box">
      <div className="container">
        <p className="date">March 17, 2021 12:00</p>
        <p className="title2">The help of Augmented Reality and Holograms.</p>
        <p className="txt">Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material. In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, 
          for a fully immersive learning experience</p>
        </div>
        <div className="sidebar">
          <div className="form">
          <form>
            <label className="label">First Name</label>
            <input type="text" name="firstname" placeholder="name" />
            <label className="label">Last Name</label>
            <input type="text" name="firstname" placeholder="name" />
            <div className="info">
              <div>
              <input type="checkbox" name="firstname" placeholder="name" />
            <label className="label">Remeber Me</label>
              </div>
              <div>
              <a className="link">Forgot Password</a>
              </div>
            
           
            </div>


          </form>
          </div>
         
        </div>
      
    </div>
  );
}

export default App;
