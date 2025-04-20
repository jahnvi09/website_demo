// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import FlipCard from './FlipCard';
// import './Homej.css';

// // 10 announcements
// const announcementData = [
//   {
//     id: 1,
//     title: "Welcome to Student Planner!",
//     message: "Discover how you can organize your academic life with ease. Sign up today to unlock personalized planning features, reminders, and more.",
//     image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 2,
//     title: "New Features Released!",
//     message: "Enjoy improved note-taking tools, a refreshed interface, and more ways to stay on top of your assignments.",
//     image: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 3,
//     title: "Exam Season Tips",
//     message: "Check out our latest blog for study strategies and stress relief.",
//     image: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 4,
//     title: "Mobile App Launch",
//     message: "Student Planner is now available on iOS and Android. Download now!",
//     image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=400",
//     date: "March 2025"
//   },
//   {
//     id: 5,
//     title: "Maintenance Notice",
//     message: "Scheduled maintenance on May 3rd, 2am–4am UTC. Service may be temporarily unavailable.",
//     image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 6,
//     title: "Weekly Webinar",
//     message: "Join our productivity webinar every Friday at 5pm. Register on our events page.",
//     image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 7,
//     title: "Student Stories",
//     message: "Read how students are succeeding with Student Planner in our new blog series.",
//     image: "https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 8,
//     title: "Feature Request",
//     message: "Suggest new features! We value your feedback—visit our feedback page.",
//     image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 9,
//     title: "Scholarship Alerts",
//     message: "Get notified about new scholarships. Opt in via your profile page.",
//     image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   },
//   {
//     id: 10,
//     title: "Refer & Earn",
//     message: "Invite friends and earn premium features for free!",
//     image: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&w=400",
//     date: "April 2025"
//   }
// ];

// function AnnouncementQueue() {
//     const totalAnnouncements = announcementData.length;
//     const [startIndex, setStartIndex] = useState(0);
  
//     useEffect(() => {
//       const timer = setInterval(() => {
//         setStartIndex(prev => (prev + 1) % totalAnnouncements);
//       }, 3000);
//       return () => clearInterval(timer);
//     }, [totalAnnouncements]);
  
//     return (
//       <div className="announcements-queue-container">
//         <AnimatePresence mode="popLayout" initial={false}>
//           <motion.div
//             key={startIndex}
//             className="carousel-row"
//             initial={{ x: 400 }}
//             animate={{ x: 0 }}
//             exit={{ x: -400 }}
//             transition={{ 
//               duration: 0.7, 
//               ease: [0.32, 0.72, 0, 1],
//               opacity: { duration: 0.35 } // Separate opacity timing
//             }}
//           >
//             {[...Array(5)].map((_, i) => {
//               const index = (startIndex + i) % totalAnnouncements;
//               return (
//                 <motion.div
//                   key={`card-${index}`}
//                   className="announcement-card-queue"
//                   layout="position"
//                   transition={{ duration: 0.7 }}
//                 >
//                   <img 
//                     src={announcementData[index].image} 
//                     alt="Announcement" 
//                     className="announcement-img-queue" 
//                   />
//                   <div className="announcement-text-content">
//                     <div className="announcement-date-queue">
//                       {announcementData[index].date}
//                     </div>
//                     <div className="announcement-title-queue">
//                       {announcementData[index].title}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     );
//   }
  
// // AnimatedSection helper
// function AnimatedSection({ children, delay = 0 }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   useEffect(() => {
//     if (inView) controls.start('visible');
//   }, [controls, inView]);

//   return (
//     <motion.section
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={{
//         visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
//         hidden: { opacity: 0, y: 80 }
//       }}
//     >
//       {children}
//     </motion.section>
//   );
// }

// // Apple-style horizontal announcement carousel
// function HorizontalAnnouncementCarousel() {
//   const cardsToShow = 3;
//   const [startIndex, setStartIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setStartIndex((prev) => (prev + 1) % announcementData.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   // Compute the indices of the visible cards
//   const visible = [];
//   for (let i = 0; i < cardsToShow; i++) {
//     visible.push((startIndex + i) % announcementData.length);
//   }

//   return (
//     <div className="horiz-carousel-outer">
//       <div className="horiz-carousel-inner">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={startIndex}
//             className="horiz-carousel-row"
//             initial={{ x: 400 }}
//             animate={{ x: 0 }}
//             exit={{ x: -400 }}
//             transition={{ duration: 0.7, ease: "easeInOut" }}
//           >
//             {visible.map((idx) => (
//               <div
//                 className="horiz-carousel-card"
//                 key={announcementData[idx].id}
//               >
//                 <img
//                   src={announcementData[idx].image}
//                   alt={announcementData[idx].title}
//                   className="horiz-carousel-img"
//                 />
//                 <div className="horiz-carousel-content">
//                   <div className="horiz-carousel-title">{announcementData[idx].title}</div>
//                   <div className="horiz-carousel-date">{announcementData[idx].date}</div>
//                   <div className="horiz-carousel-message">{announcementData[idx].message}</div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// function HomePage() {
//   const navigate = useNavigate();
//   const images = [
//     'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     'https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=1600'
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const features = [
//     { icon: '📚', title: 'Add Courses', content: 'Track subjects in a term-wise layout to stay organized.' },
//     { icon: '📝', title: 'Manage Tasks', content: 'Add, edit, and delete assignments and tasks with ease.' },
//     { icon: '⏰', title: 'Manage Deadlines', content: 'View upcoming tasks and reminders to stay on top of your schedule.' },
//     { icon: '📊', title: 'Assignment Tracker', content: 'Keep track of progress and due dates for all your assignments.' },
//     { icon: '🖋️', title: 'Take Notes', content: 'Save and download study notes for easy access anytime.' },
//     { icon: '📂', title: 'Upload Files', content: 'Upload assignment files, study notes, or course materials for preview or editing.' }
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="home-page">
//       <header className="header">
//         <h1>Student Planner</h1>
//         <nav className="navigation">
//           <a href="#" className="contact-us-button" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
//             Contact Us
//           </a>
//           <button onClick={() => navigate('/resources')}>Student Resources</button>
//           <button className="login-button" onClick={() => navigate('/login')}>Login</button>
//           <button className="registeration-container" onClick={() => navigate('/register')}>Register</button>
//         </nav>
//       </header>

//       {/* Image Carousel Section */}
//       <AnimatedSection delay={0.1}>
//         <section className="main-content">
//           <div className="image-carousel">
//             <button className="arrow left" onClick={handlePrev}>&lt;</button>
//             <img
//               src={images[currentIndex]}
//               alt="carousel"
//               className="carousel-image"
//             />
//             <button className="arrow right" onClick={handleNext}>&gt;</button>
//           </div>
//         </section>
//       </AnimatedSection>

//       {/* About Us Section */}
//       <AnimatedSection delay={0.2}>
//         <section className="about-us section-card">
//           <h2>ABOUT US</h2>
//           <p>
//             Welcome to Student Planner! We are dedicated to empowering students with tools and resources to organize their academic journey effectively.
//             Our mission is to simplify planning and enhance productivity for learners worldwide.
//           </p>
//         </section>
//       </AnimatedSection>

//       {/* Gallery Section */}
//       <AnimatedSection delay={0.3}>
//         <section className="gallery section-card">
//           <h2>GALLERY</h2>
//           <div className="gallery-grid">
//             {images.map((image, index) => (
//               <div key={index} className="gallery-item" style={{ backgroundImage: `url(${image})` }}>
//               </div>
//             ))}
//           </div>
//         </section>
//       </AnimatedSection>

//       {/* Features Section */}
//       <AnimatedSection delay={0.4}>
//         <section className="features section-card">
//           <h2>FEATURES</h2>
//           <div className="features-grid">
//             {features.map((feature, idx) => (
//               <FlipCard key={idx} {...feature} />
//             ))}
//           </div>
//         </section>
//       </AnimatedSection>

//       {/* Announcements Horizontal Carousel */}
//       <AnimatedSection delay={0.5}>
//         <section className="announcements section-card">
//           <h2>ANNOUNCEMENTS</h2>
//           <HorizontalAnnouncementCarousel />
//         </section>
//       </AnimatedSection>

//       {/* Testimonials Section */}
//       <AnimatedSection delay={0.7}>
//         <section className="testimonials section-card">
//           <h2>WHAT OUR USERS SAY</h2>
//           <div className="testimonials-cards-pro">
//             {[
//               {
//                 quote: "The onboarding takes literally 5 minutes, maybe 10. That matters. It’s kind of like a baton race when you’re growing quickly — the handover needs to be seamless.",
//                 avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//                 name: "Emmanuel Quartey",
//                 role: "Head of Growth"
//               },
//               {
//                 quote: "Student Planner keeps me organized and motivated every week!",
//                 avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//                 name: "Maria L.",
//                 role: "Student"
//               },
//               {
//                 quote: "The reminders and easy-to-use dashboard make planning my week a breeze.",
//                 avatar: "https://randomuser.me/api/portraits/men/55.jpg",
//                 name: "Samir K.",
//                 role: "Student"
//               },
//               {
//                 quote: "I recommend this to every student who wants to be more organized.",
//                 avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//                 name: "Jia Chen",
//                 role: "Student"
//               },
//               {
//                 quote: "The interface is so intuitive, I started using it daily from day one.",
//                 avatar: "https://randomuser.me/api/portraits/men/71.jpg",
//                 name: "Lucas R.",
//                 role: "Student"
//               },
//               {
//                 quote: "Assignment tracking and deadline reminders have saved me countless times.",
//                 avatar: "https://randomuser.me/api/portraits/women/85.jpg",
//                 name: "Priya S.",
//                 role: "Student"
//               }
//             ].map((t, idx) => (
//               <motion.div
//                 key={t.name}
//                 className="testimonial-card-pro"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 * idx }}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <div className="testimonial-quote-pro">
//                   <span className="quote-mark-pro">“</span>
//                   {t.quote}
                  
//                 </div>
//                 <div className="testimonial-profile-pro">
//                   <img src={t.avatar} alt={t.name} className="testimonial-avatar-pro" />
//                   <div>
//                     <div className="testimonial-name-pro">{t.name}</div>
                    
//                     <div className="testimonial-role-pro">{t.role}</div>
                    
//                   </div>
                  
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </AnimatedSection>

//       {/* Copyright Footer */}
//       <footer className="footer-copyright">
//         © {currentYear} Student Planner. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FlipCard from './FlipCard';
import './Homej.css';

// 10 announcements
const announcementData = [
  {
    id: 1,
    title: "Welcome to Student Planner!",
    message: "Discover how you can organize your academic life with ease. Sign up today to unlock personalized planning features, reminders, and more.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 2,
    title: "New Features Released!",
    message: "Enjoy improved note-taking tools, a refreshed interface, and more ways to stay on top of your assignments.",
    image: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 3,
    title: "Exam Season Tips",
    message: "Check out our latest blog for study strategies and stress relief.",
    image: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 4,
    title: "Mobile App Launch",
    message: "Student Planner is now available on iOS and Android. Download now!",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=400",
    date: "March 2025"
  },
  {
    id: 5,
    title: "Maintenance Notice",
    message: "Scheduled maintenance on May 3rd, 2am–4am UTC. Service may be temporarily unavailable.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 6,
    title: "Weekly Webinar",
    message: "Join our productivity webinar every Friday at 5pm. Register on our events page.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 7,
    title: "Student Stories",
    message: "Read how students are succeeding with Student Planner in our new blog series.",
    image: "https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 8,
    title: "Feature Request",
    message: "Suggest new features! We value your feedback—visit our feedback page.",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 9,
    title: "Scholarship Alerts",
    message: "Get notified about new scholarships. Opt in via your profile page.",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&w=400",
    date: "April 2025"
  },
  {
    id: 10,
    title: "Refer & Earn",
    message: "Invite friends and earn premium features for free!",
    image: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&w=400",
    date: "April 2025"
  }
];

function AnnouncementQueue() {
    const totalAnnouncements = announcementData.length;
    const [startIndex, setStartIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setStartIndex(prev => (prev + 1) % totalAnnouncements);
      }, 3000);
      return () => clearInterval(timer);
    }, [totalAnnouncements]);
  
    return (
      <div className="announcements-queue-container">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={startIndex}
            className="carousel-row"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.32, 0.72, 0, 1],
              opacity: { duration: 0.35 } // Separate opacity timing
            }}
          >
            {[...Array(5)].map((_, i) => {
              const index = (startIndex + i) % totalAnnouncements;
              return (
                <motion.div
                  key={`card-${index}`}
                  className="announcement-card-queue"
                  layout="position"
                  transition={{ duration: 0.7 }}
                >
                  <img 
                    src={announcementData[index].image} 
                    alt="Announcement" 
                    className="announcement-img-queue" 
                  />
                  <div className="announcement-text-content">
                    <div className="announcement-date-queue">
                      {announcementData[index].date}
                    </div>
                    <div className="announcement-title-queue">
                      {announcementData[index].title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
  
// AnimatedSection helper
function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
        hidden: { opacity: 0, y: 80 }
      }}
    >
      {children}
    </motion.section>
  );
}

// Apple-style horizontal announcement carousel
function HorizontalAnnouncementCarousel() {
  const cardsToShow = 3;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % announcementData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Compute the indices of the visible cards
  const visible = [];
  for (let i = 0; i < cardsToShow; i++) {
    visible.push((startIndex + i) % announcementData.length);
  }

  return (
    <div className="horiz-carousel-outer">
      <div className="horiz-carousel-inner">
        <AnimatePresence initial={false}>
          <motion.div
            key={startIndex}
            className="horiz-carousel-row"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {visible.map((idx) => (
              <div
                className="horiz-carousel-card"
                key={announcementData[idx].id}
              >
                <img
                  src={announcementData[idx].image}
                  alt={announcementData[idx].title}
                  className="horiz-carousel-img"
                />
                <div className="horiz-carousel-content">
                  <div className="horiz-carousel-title">{announcementData[idx].title}</div>
                  <div className="horiz-carousel-date">{announcementData[idx].date}</div>
                  <div className="horiz-carousel-message">{announcementData[idx].message}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const images = [
    'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=1600'
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const features = [
    { icon: '📚', title: 'Add Courses', content: 'Track subjects in a term-wise layout to stay organized.' },
    { icon: '📝', title: 'Manage Tasks', content: 'Add, edit, and delete assignments and tasks with ease.' },
    { icon: '⏰', title: 'Manage Deadlines', content: 'View upcoming tasks and reminders to stay on top of your schedule.' },
    { icon: '📊', title: 'Assignment Tracker', content: 'Keep track of progress and due dates for all your assignments.' },
    { icon: '🖋️', title: 'Take Notes', content: 'Save and download study notes for easy access anytime.' },
    { icon: '📂', title: 'Upload Files', content: 'Upload assignment files, study notes, or course materials for preview or editing.' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="home-page">
      <header className="header">
        <h1>Student Planner</h1>
        <nav className="navigation">
          <a href="#" className="contact-us-button" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
            Contact Us
          </a>
          <button onClick={() => navigate('/resources')}>Student Resources</button>
          <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          <button className="registeration-container" onClick={() => navigate('/register')}>Register</button>
        </nav>
      </header>

      {/* Image Carousel Section */}
      <AnimatedSection delay={0.1}>
        <section className="main-content">
          <div className="image-carousel">
            <button className="arrow left" onClick={handlePrev}>&lt;</button>
            <img
              src={images[currentIndex]}
              alt="carousel"
              className="carousel-image"
            />
            <button className="arrow right" onClick={handleNext}>&gt;</button>
          </div>
        </section>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection delay={0.2}>
        <section className="about-us section-card">
          {/* <h2>ABOUT US</h2> */}
          <h2 className="section-banner">ABOUT US</h2>

          <p>
            Welcome to Student Planner! We are dedicated to empowering students with tools and resources to organize their academic journey effectively.
            Our mission is to simplify planning and enhance productivity for learners worldwide.
          </p>
        </section>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection delay={0.3}>
        <section className="gallery section-card">
          {/* <h2>GALLERY</h2> */}
          <h2 className="section-banner">GALLERY</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item" style={{ backgroundImage: `url(${image})` }}>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection delay={0.4}>
        <section className="features section-card">
          {/* <h2>FEATURES</h2> */}
          <h2 className="section-banner">FEATURES</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <FlipCard key={idx} {...feature} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Announcements Horizontal Carousel */}
      <AnimatedSection delay={0.5}>
        <section className="announcements section-card">
          {/* <h2>ANNOUNCEMENTS</h2> */}
          <h2 className="section-banner">ANNOUNCEMENTS</h2>
          <HorizontalAnnouncementCarousel />
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={0.7}>
        <section className="testimonials section-card">
          {/* <h2>WHAT OUR USERS SAY</h2> */}
          <h2 className="section-banner">WHAT OUR USERS SAY</h2>
          <div className="testimonials-cards-pro">
            {[
              {
                quote: "The onboarding takes literally 5 minutes, maybe 10. That matters. It’s kind of like a baton race when you’re growing quickly — the handover needs to be seamless.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "Emmanuel Quartey",
                role: "Head of Growth"
              },
              {
                quote: "Student Planner keeps me organized and motivated every week!",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Maria L.",
                role: "Student"
              },
              {
                quote: "The reminders and easy-to-use dashboard make planning my week a breeze.",
                avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                name: "Samir K.",
                role: "Student"
              },
              {
                quote: "I recommend this to every student who wants to be more organized.",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                name: "Jia Chen",
                role: "Student"
              },
              {
                quote: "The interface is so intuitive, I started using it daily from day one.",
                avatar: "https://randomuser.me/api/portraits/men/71.jpg",
                name: "Lucas R.",
                role: "Student"
              },
              {
                quote: "Assignment tracking and deadline reminders have saved me countless times.",
                avatar: "https://randomuser.me/api/portraits/women/85.jpg",
                name: "Priya S.",
                role: "Student"
              }
            ].map((t, idx) => (
              <motion.div
                key={t.name}
                className="testimonial-card-pro"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="testimonial-quote-pro">
                  <span className="quote-mark-pro">“</span>
                  {t.quote}
                  
                </div>
                <div className="testimonial-profile-pro">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar-pro" />
                  <div>
                    <div className="testimonial-name-pro">{t.name}</div>
                    
                    <div className="testimonial-role-pro">{t.role}</div>
                    
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Copyright Footer */}
      <footer className="footer-copyright">
        © {currentYear} Student Planner. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
