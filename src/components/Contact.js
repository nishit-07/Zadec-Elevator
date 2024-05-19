import React,{useState} from 'react'
import { FaFacebook, FaInstagram, FaYoutube,FaEnvelope,FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can use formData to send data
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:zadecelevator@gmail.com.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

    }}
  return (
    <div className='contact-container'>
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="PHONE"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary send-button" type="submit" value="SEND">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
        <ul className="contact-list">
  <li className="list-item">
    <FaMapMarkerAlt className="fa-2x" /><span></span><span className="contact-text place" style={{ fontSize: '11px', }}>10-302, ISHWAR ESTATE OPP. PUSHPRAJ
RECIDENCY, B/H ISHWAR SAW MILL
UNDER VISHWAKARMA RAILWAY BRIDGE,
HDFC BANK LANE, GOTA, AHMEDABAD,
GUJARAT - 382481</span>
  </li>
  <li className="list-item">
    <FaPhoneAlt className="fa-2x" /><span className="contact-text phone1" ><a href="tel:+91 70969 63666" title="Give me a call">+91 70969 63666</a></span>
  </li>
  <li className="list-item">
    <FaPhoneAlt className="fa-2x" /><span className="contact-text phone2" ><a href="tel:+91 92655 87916" title="Give me a call">+91 92655 87916</a></span>
  </li>
  <li className="list-item">
    <FaEnvelope className="fa-2x" /><span className="contact-text gmail" ><a href="mailto:zadecelevator@gmail.com" title="Send me an email">zadecelevator@gmail.com</a></span>
  </li>
</ul> 

          <hr />
          <ul className="social-media-list">
            <li><a href="#" target="_blank" className="contact-icon"><FaYoutube /></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><FaInstagram /></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><FaFacebook /></a></li>
          </ul>
          {/* <hr /> */}

          {/* <div className="contact-copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}
        </div>
      </div>
    </section>
  </div>
  )
}
