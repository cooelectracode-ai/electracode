"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/contact.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function Contact() {
  return (
    <>
      

    <Navbar />

    <section className="contact-hero">
        <div className="container">
            <h1>Partner with <span>ElectraCode</span></h1>
            <h2>Building Industry-Ready Electronics Talent Together</h2>
            <p>ElectraCode collaborates with institutions, industry partners, recruiters, and organizations to strengthen electronics talent development and workforce readiness.</p>
        </div>
    </section>

    <div className="contact-container">
        <div id="formStatus" className="form-status"></div>
        
        <form id="contactForm">
            <div className="form-grid">
                
                {/*  Left Column: Organization Details  */}
                <div className="form-card">
                    <div className="card-header">
                        <i className="fa-regular fa-building"></i>
                        <h3>Organization Details</h3>
                    </div>
                    
                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-regular fa-building"></i>
                            <label htmlFor="orgName">Organization Name</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="orgName" className="input-field" placeholder="Enter organization name" />
                            <div id="orgNameError" className="error-msg"></div>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-solid fa-shield-halved"></i>
                            <label htmlFor="orgType">Organization Type</label>
                        </div>
                        <div className="input-wrapper">
                            <select id="orgType" className="input-field">
                                <option value="" disabled selected>Select type</option>
                                <option value="Academic Institution">Academic Institution</option>
                                <option value="Training Organization">Training Organization</option>
                                <option value="Recruiter">Recruiter</option>
                                <option value="Electronics Company">Electronics Company</option>
                                <option value="Startup">Startup</option>
                                <option value="Industry Partner">Industry Partner</option>
                                <option value="Other">Other</option>
                            </select>
                            <div id="orgTypeError" className="error-msg"></div>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-regular fa-user"></i>
                            <label htmlFor="contactPerson">Contact Person</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="contactPerson" className="input-field" placeholder="Enter contact person name" />
                            <div id="contactPersonError" className="error-msg"></div>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-solid fa-briefcase"></i>
                            <label htmlFor="designation">Designation</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="designation" className="input-field" placeholder="Enter designation" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-regular fa-envelope"></i>
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="email" id="email" className="input-field" placeholder="Enter email address" />
                            <div id="emailError" className="error-msg"></div>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-solid fa-phone"></i>
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="tel" id="phone" className="input-field" placeholder="Enter phone number" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-solid fa-globe"></i>
                            <label htmlFor="website">Website</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="url" id="website" className="input-field" placeholder="Enter website URL" />
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-label-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <label htmlFor="location">Location</label>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="location" className="input-field" placeholder="Enter location" />
                        </div>
                    </div>

                </div>

                {/*  Right Column: Partnership Interest  */}
                <div className="form-card">
                    <div className="card-header">
                        <i className="fa-regular fa-handshake"></i>
                        <h3>Partnership Interest</h3>
                    </div>
                    
                    <p className="checkbox-subtitle">Select all areas of interest (you can choose multiple)</p>
                    
                    <div className="checkbox-grid">
                        
                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Industry Tool Training" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-screwdriver-wrench"></i> Industry Tool Training</span>
                        </label>
                        
                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Assessments & Skill Intelligence" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-chart-column"></i> Assessments & Skill Intelligence</span>
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Internship Programs" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-graduation-cap"></i> Internship Programs</span>
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Hiring & Talent Access" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-users-viewfinder"></i> Hiring & Talent Access</span>
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Workshops & Expert Sessions" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-users"></i> Workshops & Expert Sessions</span>
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Innovation Challenges" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-regular fa-lightbulb"></i> Innovation Challenges</span>
                        </label>
                        
                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Research Collaboration" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-flask"></i> Research Collaboration</span>
                        </label>

                        <label className="checkbox-label">
                            <input type="checkbox" name="interest" value="Other" />
                            <div className="checkbox-custom"></div>
                            <span className="checkbox-text"><i className="fa-solid fa-ellipsis"></i> Other</span>
                        </label>

                    </div>

                    <div className="textarea-wrapper">
                        <label className="textarea-label" htmlFor="requirements">Describe Your Requirements</label>
                        <textarea id="requirements" className="input-field" placeholder="Tell us more about your goals, expected outcomes, and how we can collaborate..."></textarea>
                    </div>

                </div>

            </div>

            <div className="submit-section">
                <button type="submit" id="submitBtn" className="submit-btn">
                    <i className="fa-regular fa-paper-plane"></i> Submit Enquiry
                </button>
            </div>
        </form>

        {/*  Company Contact Information Strip  */}
        <div className="contact-info-card">
            <div className="contact-info-header">
                <i className="fa-regular fa-address-card"></i>
                <span>Company Contact Information</span>
            </div>
            
            <div className="contact-info-grid">
                
                <div className="info-item">
                    <div className="info-icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="info-text">
                        <h4>Email</h4>
                        <a href="mailto:partnerships@electracode.in">partnerships@electracode.in</a>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                    <div className="info-text">
                        <h4>Phone</h4>
                        <a href="tel:+919876543210">+91 98765 43210</a>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon"><i className="fa-solid fa-globe"></i></div>
                    <div className="info-text">
                        <h4>Website</h4>
                        <a href="https://www.electracode.in">www.electracode.in</a>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="info-text">
                        <h4>Location</h4>
                        <p>Bengaluru, Karnataka, India</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                    <div className="info-text">
                        <h4>LinkedIn</h4>
                        <a href="#" target="_blank">ElectraCode</a>
                    </div>
                </div>

            </div>
        </div>

    </div>

    {/*  Footer  */}
    <Footer />


    </>
  );
}
