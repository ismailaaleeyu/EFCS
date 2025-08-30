<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>EFCS – Electrical | Fire Alarm | CCTV | Solar</title>
	    <style>
		    /* Reset */
			    * {
				      margin: 0; padding: 0; box-sizing: border-box;
					        font-family: Arial, sans-serif;
							    }

								    body {
									      line-height: 1.6;
										        color: #333;
												      background: #f9f9f9;
													      }

														      a { text-decoration: none; color: inherit; }

															      .container {
																        width: 90%;
																		      max-width: 1100px;
																			        margin: auto;
																					      padding: 20px 0;
																						      }

																							      /* Header */
																								      header {
																									        background: #111;
																											      color: #fff;
																												        padding: 15px 0;
																														      position: sticky;
																															        top: 0;
																																	      z-index: 1000;
																																		      }
																																			      .nav {
																																				        display: flex;
																																						      justify-content: space-between;
																																							        align-items: center;
																																									    }
																																										    .logo { font-size: 1.5rem; font-weight: bold; }
																																											    nav a {
																																												      margin: 0 10px;
																																													        font-weight: bold;
																																															      color: #fff;
																																																      }
																																																	      nav a:hover { color: #ffd700; }
																																																		      .menu-toggle {
																																																			        display: none;
																																																					      font-size: 1.5rem;
																																																						        cursor: pointer;
																																																								    }

																																																									    /* Hero */
																																																										    .hero {
																																																											      background: url('https://images.unsplash.com/photo-1581091014534-4c79a3cba9ad?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat;
																																																												        color: #000000;
																																																														      text-align: center;
																																																															        padding: 100px 20px;
																																																																	    }
																																																																		    .hero h1 { font-size: 2.5rem; margin-bottom: 20px; }
																																																																			    .hero p {font-size: 1.2rem; margin-bottom: 20px; }
																																																																				    .btn {
																																																																					      display: inline-block;
																																																																						        background: #ffd700;
																																																																								      color: #111;
																																																																									        padding: 10px 20px;
																																																																											      border-radius: 5px;
																																																																												        font-weight: bold;
																																																																														    }
																																																																															    .btn:hover { background: #ffae00; }

																																																																																    /* Sections */
																																																																																	    .section { padding: 60px 20px; }
																																																																																		    .section h2 { text-align: center; margin-bottom: 20px; font-size: 2rem; }
																																																																																			    .dark { background: #222; color: #fff; }

																																																																																				    /* Grid */
																																																																																					    .grid {
																																																																																						      display: grid;
																																																																																							        gap: 20px;
																																																																																									      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
																																																																																										      }
																																																																																											      .card {
																																																																																												        background: #fff;
																																																																																														      padding: 20px;
																																																																																															        border-radius: 8px;
																																																																																																	      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
																																																																																																		        text-align: center;
																																																																																																				    }
																																																																																																					    .dark .card { background: #333; }
																																																																																																						    .card img {
																																																																																																							      max-width: 100%;
																																																																																																								        border-radius: 8px;
																																																																																																										      margin-bottom: 10px;
																																																																																																											      }

																																																																																																												      /* Contact */
																																																																																																													      form {
																																																																																																														        display: flex;
																																																																																																																      flex-direction: column;
																																																																																																																	        gap: 10px;
																																																																																																																			      margin-bottom: 20px;
																																																																																																																				      }
																																																																																																																					      input, textarea {
																																																																																																																						        padding: 10px;
																																																																																																																								      border: none;
																																																																																																																									        border-radius: 5px;
																																																																																																																											      width: 100%;
																																																																																																																												      }
																																																																																																																													      button {
																																																																																																																														        background: #ffd700;
																																																																																																																																      color: #111;
																																																																																																																																	        border: none;
																																																																																																																																			      padding: 10px;
																																																																																																																																				        border-radius: 5px;
																																																																																																																																						      cursor: pointer;
																																																																																																																																							        font-weight: bold;
																																																																																																																																									    }
																																																																																																																																										    button:hover { background: #ffae00; }

																																																																																																																																											    /* Footer */
																																																																																																																																												    footer {
																																																																																																																																													      background: #111;
																																																																																																																																														        color: #fff;
																																																																																																																																																      text-align: center;
																																																																																																																																																	        padding: 15px;
																																																																																																																																																			    }

																																																																																																																																																				    /* Responsive */
																																																																																																																																																					    @media (max-width: 768px) {
																																																																																																																																																						      nav { display: none; flex-direction: column; background: #111; }
																																																																																																																																																							        nav a { margin: 10px 0; }
																																																																																																																																																									      nav.show { display: flex; }
																																																																																																																																																										        .menu-toggle { display: block; }
																																																																																																																																																												    }
																																																																																																																																																													  </style>
																																																																																																																																																													  </head>
																																																																																																																																																													  <body>
																																																																																																																																																													    <!-- Header -->
																																																																																																																																																														  <header>
																																																																																																																																																														      <div class="container nav">
																																																																																																																																																															        <div class="logo">⚡ EFCS</div>
																																																																																																																																																																	      <nav id="menu">
																																																																																																																																																																		          <a href="#home">Home</a>
																																																																																																																																																																				          <a href="#about">About</a>
																																																																																																																																																																						          <a href="#services">Services</a>
																																																																																																																																																																								          <a href="#projects">Projects</a>
																																																																																																																																																																										          <a href="#contact">Contact</a>
																																																																																																																																																																												        </nav>
																																																																																																																																																																														      <div class="menu-toggle" onclick="toggleMenu()">☰</div>
																																																																																																																																																																															      </div>
																																																																																																																																																																																    </header>

																																																																																																																																																																																	  <!-- Hero -->
																																																																																																																																																																																	    <section id="home" class="hero">
																																																																																																																																																																																		    <div class="hero-text">
																																																																																																																																																																																			      <h1>Powering Solutions, Securing Spaces, Harnessing the Sun</h1>
																																																																																																																																																																																				        <p>Professional Electrical, Fire Alarm, CCTV, and Solar Installations</p>
																																																																																																																																																																																						      <a href="#contact" class="btn">Get in Touch</a>
																																																																																																																																																																																							      </div>
																																																																																																																																																																																								    </section>

																																																																																																																																																																																									  <!-- About -->
																																																																																																																																																																																									    <section id="about" class="section">
																																																																																																																																																																																										    <div class="container">
																																																																																																																																																																																											      <h2>About Us</h2>
																																																																																																																																																																																												        <p>EFCS is a trusted provider of electrical installations, fire alarm systems,
																																																																																																																																																																																														         CCTV solutions, and solar power systems. We are committed to safety,
																																																																																																																																																																																																          reliability, and innovation, delivering engineering solutions for homes,
																																																																																																																																																																																																		           businesses, and industries.</p>
																																																																																																																																																																																																				       </div>
																																																																																																																																																																																																					     </section>

																																																																																																																																																																																																						   <!-- Services -->
																																																																																																																																																																																																						     <section id="services" class="section dark">
																																																																																																																																																																																																							     <div class="container">
																																																																																																																																																																																																								       <h2>Our Services</h2>
																																																																																																																																																																																																									         <div class="grid">
																																																																																																																																																																																																											         <div class="card">
																																																																																																																																																																																																													           <h3>⚡ Electrical Installations</h3>
																																																																																																																																																																																																															             <p>Residential, Commercial & Industrial wiring and maintenance.</p>
																																																																																																																																																																																																																		         </div>
																																																																																																																																																																																																																				         <div class="card">
																																																																																																																																																																																																																						           <h3>🔥 Fire Alarm Systems</h3>
																																																																																																																																																																																																																								             <p>Installation, inspection, and maintenance of fire safety systems.</p>
																																																																																																																																																																																																																											         </div>
																																																																																																																																																																																																																													         <div class="card">
																																																																																																																																																																																																																															           <h3>📹 CCTV Security</h3>
																																																																																																																																																																																																																																	             <p>Installation and monitoring of surveillance solutions.</p>
																																																																																																																																																																																																																																				         </div>
																																																																																																																																																																																																																																						         <div class="card">
																																																																																																																																																																																																																																								           <h3>☀️ Solar Power Systems</h3>
																																																																																																																																																																																																																																										             <p>Design and installation of solar & inverter solutions.</p>
																																																																																																																																																																																																																																													         </div>
																																																																																																																																																																																																																																															       </div>
																																																																																																																																																																																																																																																       </div>
																																																																																																																																																																																																																																																	     </section>

																																																																																																																																																																																																																																																		   <!-- Projects -->
																																																																																																																																																																																																																																																		     <section id="projects" class="section">
																																																																																																																																																																																																																																																			     <div class="container">
																																																																																																																																																																																																																																																				       <h2>Our Projects</h2>
																																																																																																																																																																																																																																																					         <div class="grid">
																																																																																																																																																																																																																																																							         <div class="card">
																																																																																																																																																																																																																																																									           <img src="https://images.unsplash.com/photo-1581091014534-4c79a3cba9ad?auto=format&fit=crop&w=600&q=80" alt="Solar Installation">
																																																																																																																																																																																																																																																											             <p>5KW Solar System Installation for a family home.</p>
																																																																																																																																																																																																																																																														         </div>
																																																																																																																																																																																																																																																																         <div class="card">
																																																																																																																																																																																																																																																																		           <img src="https://images.unsplash.com/photo-1581093588401-cc5d8e4bcf9e?auto=format&fit=crop&w=600&q=80" alt="CCTV Setup">
																																																																																																																																																																																																																																																																				             <p>Full CCTV coverage for a commercial property.</p>
																																																																																																																																																																																																																																																																							         </div>
																																																																																																																																																																																																																																																																									         <div class="card">
																																																																																																																																																																																																																																																																											           <img src="https://images.unsplash.com/photo-1606326608697-3a32eeb6184a?auto=format&fit=crop&w=600&q=80" alt="Fire Alarm">
																																																																																																																																																																																																																																																																													             <p>Fire Alarm System in a residential complex.</p>
																																																																																																																																																																																																																																																																																         </div>
																																																																																																																																																																																																																																																																																		       </div>
																																																																																																																																																																																																																																																																																			       </div>
																																																																																																																																																																																																																																																																																				     </section>

																																																																																																																																																																																																																																																																																					   <!-- Contact -->
																																																																																																																																																																																																																																																																																					     <section id="contact" class="section dark">
																																																																																																																																																																																																																																																																																						     <div class="container">
																																																																																																																																																																																																																																																																																							       <h2>Contact Us</h2>
																																																																																																																																																																																																																																																																																								         <p>Have a project in mind? Let’s work together.</p>
																																																																																																																																																																																																																																																																																										       <form>
																																																																																																																																																																																																																																																																																											           <input type="text" placeholder="Your Name" required>
																																																																																																																																																																																																																																																																																													           <input type="email" placeholder="Your Email" required>
																																																																																																																																																																																																																																																																																															           <textarea placeholder="Your Message" required></textarea>
																																																																																																																																																																																																																																																																																																	           <button type="submit" class="btn">Send Message</button>
																																																																																																																																																																																																																																																																																																			         </form>
																																																																																																																																																																																																																																																																																																					       <p>
																																																																																																																																																																																																																																																																																																						           📞 +234 8060229630 <br>
																																																																																																																																																																																																																																																																																																								           📧 info@efcs.com <br>
																																																																																																																																																																																																																																																																																																										           📍 Yola, Nigeria
																																																																																																																																																																																																																																																																																																												         </p>
																																																																																																																																																																																																																																																																																																														       <a href="https://wa.me/2348012345678" class="btn">Chat on WhatsApp</a>
																																																																																																																																																																																																																																																																																																															       </div>
																																																																																																																																																																																																																																																																																																																     </section>

																																																																																																																																																																																																																																																																																																																	   <!-- Footer -->
																																																																																																																																																																																																																																																																																																																	     <footer>
																																																																																																																																																																																																																																																																																																																		     <div class="container">
																																																																																																																																																																																																																																																																																																																			       <p>© <span id="year"></span> EFCS. All Rights Reserved.</p>
																																																																																																																																																																																																																																																																																																																				       </div>
																																																																																																																																																																																																																																																																																																																					     </footer>

																																																																																																																																																																																																																																																																																																																						   <script>
																																																																																																																																																																																																																																																																																																																						       function toggleMenu() {
																																																																																																																																																																																																																																																																																																																							         document.getElementById("menu").classList.toggle("show");
																																																																																																																																																																																																																																																																																																																									     }
																																																																																																																																																																																																																																																																																																																										     document.getElementById("year").innerText = new Date().getFullYear();
																																																																																																																																																																																																																																																																																																																											   </script>
																																																																																																																																																																																																																																																																																																																											   </body>
																																																																																																																																																																																																																																																																																																																											   </html>