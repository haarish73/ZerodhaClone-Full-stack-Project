import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Keep your custom styles if needed
import account_open from "../../assets/img/images/account_open.svg"
import stocksIcon from "../../assets/img/images/stocks-acop.svg"
import mutualIcon from "../../assets/img/images/mf-acop.svg"
import ipoIcon from "../../assets/img/images/ipo-acop.svg"
import futuresIcon from "../../assets/img/images/fo-acop.svg"


const faqData = [
  {
    question: "What is a Zerodha account?",
    answer:
      "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
  },
  {
    question: "What documents are required to open a demat account?",
    answer: "You need a PAN card, Aadhaar card, and a cancelled cheque or bank proof.",
  },
  {
    question: "Is Zerodha account opening free?",
    answer: "No, account opening charges apply. Check the pricing section for current fees.",
  },
  {
    question: "Are there any maintenance charges for a demat account?",
    answer: "Yes, an annual maintenance charge (AMC) is applicable for demat accounts.",
  },
  {
    question: "Can I open a demat account without a bank account?",
    answer: "No, linking a bank account is mandatory to open a demat account.",
  },
];

const Faqs = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      {faqData.map((item, index) => (
        <div
          className={`faq-item ${openIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className="arrow">{openIndex === index ? "▴" : "▾"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", formData, {
        withCredentials: true
      });

      setMessage(res.data.message);

      // Redirect to login page after success
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <>
      <h1>Open a free demat and trading account online</h1>

      <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>

      <div className="signup-container">

        <div className="left">
          <img
            src={account_open}
            alt="Platform Dashboard Preview"
            className="illustration"
          />
        </div>
        <div className="right">
          <h1 className="signup-title">Signup now</h1>
          <p className="signup-desc">Create your account to get started</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit" className="signup-btn">Signup</button>
          </form>

          {message && <p className="message">{message}</p>}

          <p className="terms">
            By proceeding, you agree to the <a href="#">terms</a> & <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>

      <section className="investments">
        <h2>Investment options with Zerodha demat account</h2>

        <div className="options">
          <div className="option">
            <img src={stocksIcon} alt="Stocks" />
            <h3>Stocks</h3>
            <p>Invest in all exchange-listed securities</p>
          </div>

          <div className="option">
            <img src={mutualIcon} alt="Mutual Funds" />
            <h3>Mutual funds</h3>
            <p>Invest in commission-free direct mutual funds</p>
          </div>

          <div className="option">
            <img src={ipoIcon} alt="IPO" />
            <h3>IPO</h3>
            <p>Apply to the latest IPOs instantly via UPI</p>
          </div>

          <div className="option">
            <img src={futuresIcon} alt="Futures & Options" />
            <h3>Futures & options</h3>
            <p>Hedge and mitigate market risk through simplified F&O trading</p>
          </div>
        </div>

        <button className="explore-btn">Explore Investments</button>
      </section>

      <Faqs faqData={faqData} />
    </>
  );
};

export default Signup;
