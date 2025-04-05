WebGL Learning Projects
This repository contains a series of WebGL projects based on the MDN WebGL tutorial. The goal of this project is to learn the fundamentals of WebGL by building out examples and experimenting with 3D graphics in the browser.

🚀 What is WebGL?
WebGL (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 2D and 3D graphics within any compatible web browser—without the use of plug-ins. It provides a bridge between the HTML5 <canvas> element and GPU-accelerated graphics rendering.

📚 Tutorial Reference
All projects are inspired by or directly based on the content found in:

Getting started with WebGL — MDN Web Docs

📁 Project Structure
Each subfolder contains a self-contained WebGL example from the MDN tutorial, including:

index.html – the HTML scaffold

main.js or webgl-demo.js – JavaScript code for the demo

Any associated assets or shaders

✅ Goals
Understand how WebGL integrates with HTML and JavaScript.

Learn how to set up and work with a WebGL rendering context.

Explore shaders, buffers, and rendering pipelines.

Build foundational skills to later explore frameworks like Three.js.

🔧 How to Run
To run any of the examples locally:

Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/webgl-learning-projects.git
cd webgl-learning-projects
Start a local server (e.g., using Python):

bash
Copy
Edit
python -m http.server
Open your browser and go to http://localhost:8000/

⚠️ Some WebGL features require being served over HTTP/HTTPS and may not work when opened directly from the file system.

📦 Dependencies
No external dependencies are required—these examples use pure WebGL and vanilla JavaScript.

🧠 Future Plans
Add interactive controls to manipulate the scene.

Expand examples beyond the MDN tutorial.

Explore integration with libraries like Three.js or regl.

📜 License
This repository is open source under the MIT License.