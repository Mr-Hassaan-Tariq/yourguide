const nodemailer = require("nodemailer");
const companyData = require("../helper/companyDetail");
require("dotenv").config();

class otpEmail {
  sendOTP = (email, otp) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${email}`,
        subject: `Welcome to ${companyData.name}- Verify Your Email 👋`,
        html: `<div
                style="
                  align-items: center;
                  text-align: center;
                  border: 3px solid #062757;
                  padding: 20px;
                "
              >
                <img src="./uploads/asserts/logo.jpg" width="200" alt="logo" />
                <br />
                <img
                  style="max-width: 80%"
                  src="./uploads/asserts/envelope.png"
                  height="300"
                />
          
                <div style="margin-left: 20%; margin-right: 20%; padding: 20px">
                  <p
                    style="
                      font-family: sans-serif;
                      font-size: 18px;
                      font-weight: 800;
                      color: #333;
                      text-align: center;
                      padding: 20px;
                    "
                  >
                    Verify your Email
                  </p>
                  <p>
                    Thank you for signing up with ${companyData.name}! We're excited to
                    have you as part of our community. To complete your registration,
                    please verify your email address by entering the OTP provided below:
                  </p>
          
                  <p>OTP:<strong> ${otp}</strong></p>
          
                  <p>
                    If you did not initiate this sign-up process, please ignore this
                    email.
                  </p>
                  <p>
                    If you have any questions or need assistance, feel free to contact our
                    support team at
                  </p>
                  <p>UAN: ${companyData.number}</p>
                  <p>OR</p>
                  <p>You can write us at <strong>${companyData.email}</strong></p>
                </div>
                <img
                  style="max-width: 80%"
                  src="./uploads/asserts/footer.jpg"
                  height="300"
                />
                <div
                  style="
                    margin-left: 20%;
                    margin-right: 20%;
                    background-color: #eff2f7;
                    padding: 20px;
                    margin-top: 50px;
                  "
                >
                  <h1>${companyData.name}</h1>
                  <p>${companyData.address}</p>
                  <p>This email was sent to ${email}</p>
                  <p>
                    You've received it because you've singed-up at ${companyData.name}.
                  </p>
                  <p>
                    At ${companyData.name}, 'responsible tourism' isn't just a marketing
                    catch phrase. It's at the heart of everything we do, from how we
                    design our tours, to who we employ, to where we grow our business.
                    💚🌱
                  </p>
                </div>
              </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  login = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `${companyData.name} - Recent Login Notification  👋`,
        html: `
                <div
                  style="
                    align-items: center;
                    text-align: center;
                    border: 3px solid #062757;
                    padding: 20px;
                  "
                >
                  <img
                    src="${process.env.FILE_PATH}/asserts/logo.jpg"
                    width="200"
                    alt="logo"
                  />
                  <h2>welcome 👋</h2>
                  <p style="margin-top: -20px">We're so glad to see you here 😍</p>
                  <img
                    style="max-width: 80%"
                    src="${process.env.FILE_PATH}/asserts/people.png"
                    height="300"
                  />
                  <div style="margin-left: 20%; margin-right: 20%;text-align: left; ">
                    <div >
                        <p>
                          We wanted to let you know that a login was detected on your
                          <strong>${companyData.name}</strong> account. We take the security of
                          your account seriously and want to ensure that you are aware of any
                          activity.
                        </p>
                        <p><strong>Login Details:</strong></p>
                        <ul>
                          <li>
                            Date and Time: <strong> ${obj.date}</strong>
                          </li>
                          <li>IP Address: <strong> ${obj.ip}</strong></li>
                          <li>Location: <strong> ${obj.location}</strong></li>
                        </ul>
            
                    </div>
            
                    <p>
                      If you have any questions or need assistance, feel free to contact our
                      support team at
                    </p>
                    <p>UAN: ${companyData.number}</p>
                    <p>OR</p>
                    <p>You can write us at <strong>${companyData.email}</strong></p>
                  </div>
                  <img
                    style="max-width: 80%"
                    src="http://backend.yourguide.pk/footer.jpg"
                    height="300"
                  />
                  <br />
                  <button style="background-color: #062757; padding: 20px; border: none">
                    <a
                      style="text-decoration: none; color: white"
                      target="_blank"
                      href="https://yourguide.pk/"
                      >Read the Whole Story</a
                    >
                  </button>
                  <div
                    style="
                      margin-left: 20%;
                      margin-right: 20%;
                      background-color: #eff2f7;
                      padding: 20px;
                      margin-top: 50px;
                    "
                  >
                    <h1>${companyData.name}</h1>
                    <p>${companyData.address}</p>
                    <p>This email was sent to ${obj.email}</p>
                    <p>
                      You've received it because you've singed-up at ${companyData.name}.
                    </p>
                    <p>
                      At ${companyData.name}, 'responsible tourism' isn't just a marketing
                      catch phrase. It's at the heart of everything we do, from how we
                      design our tours, to who we employ, to where we grow our business.
                      💚🌱
                    </p>
                  </div>
                </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  becomaHost = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `${companyData.name} - Request to Become a Tour Host Received  `,
        html: `
                <div
                  style="
                    align-items: center;
                    text-align: center;
                    border: 3px solid #062757;
                    padding: 20px;
                  "
                >
                  <img
                    src="${process.env.FILE_PATH}/asserts/logo.jpg"
                    width="200"
                    alt="logo"
                  />
                  <h2 >We're so glad to see you here 😍</h2>
                  <img
                    style="max-width: 80%"
                    src="${process.env.FILE_PATH}/asserts/people.png"
                    height="300"
                  />
                  <div style="margin-left: 20%; margin-right: 20%; ">
                    <div style="text-align: left;">
                        <p><strong>Dear ${obj.name},</strong></p>
                        <p>
                            Thank you for expressing your interest in becoming a tour host with [Your Company Name]. We appreciate your enthusiasm and passion for sharing unique experiences with others. We are excited to review your request and provide you with an update shortly.
                        </p>
                        <p><strong>Request Details:</strong></p>
                        <ul>
                          <li>
                            Name :  <strong> ${obj.name}</strong>
                          </li>
                          <li>Email : <strong>${obj.email}</strong></li>
                          <li>CNIC : <strong> ${obj.cnic}</strong></li>
                          <li>Mobile Number : <strong> ${obj.mobile}</strong></li>
                        </ul>
            
                        <p>Please note that your request is currently in the review process. Our team will carefully evaluate your information  to determine its suitability for our platform. We strive to maintain a high level of quality and ensure that our tour hosts offer exceptional experiences to our visitors.</p>
            
                        <p>Once the review is complete, we will notify you via email regarding the status of your request. If approved, we will provide you with further instructions on how to proceed with the onboarding process as a tour host.</p>
            
                    </div>
            
                    <p>
                      If you have any questions or need assistance, feel free to contact our
                      support team at
                    </p>
                    <p>UAN: ${companyData.number}</p>
                    <p>OR</p>
                    <p>You can write us at <strong>${companyData.email}</strong></p>
                  </div>
                  <img
                    style="max-width: 80%"
                    src="http://backend.yourguide.pk/footer.jpg"
                    height="300"
                  />
                  <br />
                  <button style="background-color: #062757; padding: 20px; border: none">
                    <a
                      style="text-decoration: none; color: white"
                      target="_blank"
                      href="https://yourguide.pk/"
                      >Read the Whole Story</a
                    >
                  </button>
                  <div
                    style="
                      margin-left: 20%;
                      margin-right: 20%;
                      background-color: #eff2f7;
                      padding: 20px;
                      margin-top: 50px;
                    "
                  >
                    <h1>${companyData.name}</h1>
                    <p>${companyData.address}</p>
                    <p>This email was sent to ${obj.email}</p>
                    <p>
                      You've received it because you've singed-up at ${companyData.name}.
                    </p>
                    <p>
                      At ${companyData.name}, 'responsible tourism' isn't just a marketing
                      catch phrase. It's at the heart of everything we do, from how we
                      design our tours, to who we employ, to where we grow our business.
                      💚🌱
                    </p>
                  </div>
                </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  rejectAsHost = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `${companyData.name} - Request to Become a Tour Host - Rejected `,
        html: `
              <div
                style="
                  align-items: center;
                  text-align: center;
                  border: 3px solid #062757;
                  padding: 20px;
                "
              >
                <img
                  src="./uploads/asserts/logo.jpg"
                  width="200"
                  alt="logo"
                />
                <div style="margin-left: 20%; margin-right: 20%; ">
                  <div style="text-align: left;">
                      <p><strong>Dear ${obj.name},</strong></p>
                      <p>
                          We hope this email finds you well. We want to thank you for expressing your interest in becoming a tour host with <strong> ${companyData.name}</strong>. We appreciate your enthusiasm and the effort you put into your tour proposal.
                      </p>
          
                      <p>After careful consideration, we regret to inform you that we are unable to proceed with your request to become a tour host at this time. Our team has thoroughly reviewed your request and tour proposal, and although we recognize your passion and dedication, we have determined that it does not align with our current requirements or objectives.</p>
          
                      <p>Please do not be discouraged by this decision, as it does not reflect your abilities or potential as a tour host. We receive numerous requests and have specific criteria that must be met to ensure the highest quality and consistency of experiences for our visitors.</p>
          
                      <p>We encourage you to continue exploring your passion for hosting tours and consider other avenues to share your unique experiences with travelers. We appreciate your understanding and hope that you will keep an eye out for future opportunities with ${companyData.name}.</p>
          
                      <p>If you have any questions or would like further feedback regarding our decision, please feel free to reach out to our support team at <strong>${companyData.email} / ${companyData.number}</strong>. We would be happy to provide you with any additional information that might be helpful.</p>
          
                      <p>Thank you once again for your interest in becoming a tour host with ${companyData.name}. We appreciate your time and effort, and we wish you all the best in your future endeavors.</p>
          
                  </div>
          
                  <p>
                    If you have any questions or need assistance, feel free to contact our
                    support team at
                  </p>
                  <p>UAN: ${companyData.number}</p>
                  <p>OR</p>
                  <p>You can write us at <strong>${companyData.email}</strong></p>
                </div>
                <img
                  style="max-width: 80%"
                  src="http://backend.yourguide.pk/footer.jpg"
                  height="300"
                />
                <br />
                <button style="background-color: #062757; padding: 20px; border: none">
                  <a
                    style="text-decoration: none; color: white"
                    target="_blank"
                    href="https://yourguide.pk/"
                    >Read the Whole Story</a
                  >
                </button>
                <div
                  style="
                    margin-left: 20%;
                    margin-right: 20%;
                    background-color: #eff2f7;
                    padding: 20px;
                    margin-top: 50px;
                  "
                >
                  <h1>${companyData.name}</h1>
                  <p>${companyData.address}</p>
                  <p>This email was sent to ${obj.email}</p>
                  <p>
                    You've received it because you've singed-up at ${companyData.name}.
                  </p>
                  <p>
                    At ${companyData.name}, 'responsible tourism' isn't just a marketing
                    catch phrase. It's at the heart of everything we do, from how we
                    design our tours, to who we employ, to where we grow our business.
                    💚🌱
                  </p>
                </div>
              </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };
  approveAsHost = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `${companyData.name} - Congratulations! Your Tour Host Request is Approved 😍`,
        html: `
        <div
          style="
            align-items: center;
            text-align: center;
            border: 3px solid #062757;
            padding: 20px;
          "
        >
          <img src="./uploads/asserts/logo.jpg" width="200" alt="logo" />
          <div style="margin-left: 20%; margin-right: 20%">
            <div style="text-align: left">
              <p><strong>Dear ${obj.name},</strong></p>
              <p>
                Congratulations! We are thrilled to inform you that your request to
                become a tour host with ${companyData.name} has been approved. We
                appreciate your enthusiasm and commitment to providing exceptional
                experiences for travelers.
              </p>
    
              <p>
                We believe that your unique tour offering aligns perfectly with our
                mission to provide unforgettable experiences to our visitors. We are
                excited to have you join our team of esteemed tour hosts.
              </p>
    
              <p><strong>Next Steps:</strong></p>
              <ol>
                <li><p>Onboarding Session: We will schedule an onboarding session with you to provide all the necessary information and guidelines to successfully organize and manage your tours.</p></li>
                <li><p>Tour Listing Creation: Our team will work closely with you to create an engaging tour listing on our website, highlighting the unique features and attractions of your tour.
                </p></li>
                <li><p>Booking Management: You will gain access to our tour management platform, where you can manage bookings, availability, and communicate with your guests..</p></li>
              </ol>
    
              <p>
                We are confident that you will excel in your role as a tour host and create unforgettable experiences for travelers from around the world. Your passion and expertise will contribute to the success of our platform.
              </p>
    
              <p>
                If you have any questions or would like further feedback regarding
                our decision, please feel free to reach out to our support team at
                <strong>${companyData.email} / ${companyData.number}</strong>. We
                would be happy to provide you with any additional information that
                might be helpful.
              </p>
    
              <p>
                Once again, congratulations on becoming a tour host with [Your Company Name]. We can't wait to see the incredible tours you will organize and the memories you will create for our visitors.
              </p>
            </div>
    
            <p>
              If you have any questions or need assistance, feel free to contact our
              support team at
            </p>
            <p>UAN: ${companyData.number}</p>
            <p>OR</p>
            <p>You can write us at <strong>${companyData.email}</strong></p>
          </div>
          <img
            style="max-width: 80%"
            src="http://backend.yourguide.pk/footer.jpg"
            height="300"
          />
          <br />
          <div
            style="
              margin-left: 20%;
              margin-right: 20%;
              background-color: #eff2f7;
              padding: 20px;
              margin-top: 50px;
            "
          >
            <h1>${companyData.name}</h1>
            <p>${companyData.address}</p>
            <p>This email was sent to ${obj.email}</p>
            <p>
              You've received it because you've singed-up at ${companyData.name}.
            </p>
            <p>
              At ${companyData.name}, 'responsible tourism' isn't just a marketing
              catch phrase. It's at the heart of everything we do, from how we
              design our tours, to who we employ, to where we grow our business.
              💚🌱
            </p>
          </div>
        </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };
  addArticle = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `${companyData.name} - Article Added Successfully 😍`,
        html: `
        <div
          style="
            align-items: center;
            text-align: center;
            border: 3px solid #062757;
            padding: 20px;
          "
        >
          <img src="./uploads/asserts/logo.jpg" width="200" alt="logo" />
          <div style="margin-left: 20%; margin-right: 20%">
            <div style="text-align: left">
              <p><strong>Dear ${obj.name},</strong></p>
              <p>
                We are delighted to inform you that your article has been
                successfully added to [Your Company Name]. Congratulations on
                sharing your insights and knowledge with our community!
              </p>
    
              <div
                style="
                  width: 300px;
                  padding: 10px;
                  text-align: center;
                  margin: 0px auto;
                  background: #ffffff;
                  box-shadow: 0px 4px 45px -15px rgba(0, 0, 0, 0.15);
                  border-radius: 25px;
                "
              >
                <img
                  style="
                    display: block;
                    margin: 0 auto;
                    width: 250px;
                    height: 200px;
                    border-radius: 20px;
                  "
                  src={"${obj.img}"}
                  alt="Post Image"
                />
                <p
                  style="
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 25px;
                    /* identical to box height */
    
                    /* Black main */
    
                    color: #313131;
                  "
                >
                  ${obj.title}
                </p>
              </div>
              <p>
                Your article will now be accessible to readers who visit our
                website, allowing them to benefit from your expertise and valuable
                content. We appreciate your contribution and dedication to creating
                meaningful articles.
              </p>
              <p>
                We encourage you to continue sharing your thoughts and ideas with
                our audience. By doing so, you help inspire and educate others who
                share an interest in ${obj.catagory}.
              </p>
    
              <p>
                If you have any questions or would like further feedback regarding
                our decision, please feel free to reach out to our support team at
                <strong>${companyData.email} / ${companyData.number}</strong>. We
                would be happy to provide you with any additional information that
                might be helpful.
              </p>
    
              <p>
                Once again, congratulations on becoming a tour host with [Your
                Company Name]. We can't wait to see the incredible tours you will
                organize and the memories you will create for our visitors.
              </p>
            </div>
    
            <p>
              If you have any questions or need assistance, feel free to contact our
              support team at
            </p>
            <p>UAN: ${companyData.number}</p>
            <p>OR</p>
            <p>You can write us at <strong>${companyData.email}</strong></p>
          </div>
          <img
            style="max-width: 80%"
            src="http://backend.yourguide.pk/footer.jpg"
            height="300"
          />
          <br />
          <div
            style="
              margin-left: 20%;
              margin-right: 20%;
              background-color: #eff2f7;
              padding: 20px;
              margin-top: 50px;
            "
          >
            <h1>${companyData.name}</h1>
            <p>${companyData.address}</p>
            <p>This email was sent to ${obj.email}</p>
            <p>
              You've received it because you've singed-up at ${companyData.name}.
            </p>
            <p>
              At ${companyData.name}, 'responsible tourism' isn't just a marketing
              catch phrase. It's at the heart of everything we do, from how we
              design our tours, to who we employ, to where we grow our business.
              💚🌱
            </p>
          </div>
        </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };

  
  addContact = (obj) => {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,

      // host: 'smtp.aol.com', // Replace with your SMTP server address
      // port: 587, // Replace with the appropriate port number for your SMTP server
      // secure: false, // Set to true if your SMTP server requires a secure connection (e.g., SSL/TLS)

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: `${obj.email}`,
        subject: `Your Query has been Submitted`,
        html: `
        <div
          style="
            align-items: center;
            border: 3px solid #062757;
            padding: 20px;
          "
        >
      <div style="text-align: center;">
        <img src="./uploads/asserts/logo.jpg" width="200" alt="logo" />
    
      </div>
          <br />
    
          <div style="margin-left: 20%; margin-right: 20%; padding: 20px">
            <p>Dear ${obj.name},</p>
            <p>
          Thank you for reaching out to us with your question/description. We have received your query and it has been forwarded to our admin team for review.
            </p>
    
            <p>
          Please allow us some time to carefully assess your query and provide you with a comprehensive response. We value your patience and understanding.
            </p>
            <p>
          If you have any additional information or need to follow up on your query, please feel free to reply to this email, and our team will assist you further.
            </p>
            <p>Once again, we appreciate your interest and look forward to addressing your query as soon as possible.</p>
            <p>Thank you for contacting us.</p>
            <p>${companyData.name}</p>
          </div>
        </div>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("some error appears: " + error);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      });
    } catch (error) {
      console.log("error is", error);
    }
  };
}

module.exports = new otpEmail();
