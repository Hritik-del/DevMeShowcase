/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hritik Agrahari",
  title: "Hi all, I'm Hritik",
  subTitle: emoji(
    "🚀 Passionate Full Stack Sorcerer 🧙‍♂️, weaving Cloud-based spells with Spring, JavaScript, Java, Kotlin, and a sprinkle of enchanting libraries. ✨"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZGKw8BHRPFdGK5TzBefjTWNGtoN4mjmH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hritik-del",
  linkedin: "https://www.linkedin.com/in/hritik-agrahari-6903281b5/",
  gmail: "hritikagrahari786@gmail.com",
  //leetcode: "https://leetcode.com/rumplestiltskin1/",
  stackoverflow: "https://stackoverflow.com/users/14990333/hritik-agrahari",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Oracle Cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology Silchar",
      logo: require("./assets/images/nitSilcharLogo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "July 2019 - April 2023",
      desc: "Participated in the research of Ultra Wide Band Antennas and published 1 paper.",
      descBullets: [
        emoji(
          "🌟 NCC Commissioned Officer: Led with valor in the 3rd Assam Battalion."
        ),
        emoji(
          "🌠 Society Maestro: Orchestrated college events with finesse."
        ),
        emoji(
          "🎙️ Toastmasters Virtuoso: Mastered eloquence and confidence."
        )
        
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Microservices based web apps",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Oracle",
      companylogo: require("./assets/images/oraclelogo.png"),
      date: "Jan 2023 – Present",
      desc: "Enhanced Oracle Primavera Cloud, architected a lightning-fast tender marketplace app, and engineered robust microservices. Leveraged SQL, PL/SQL, JavaScript, HTML, and CSS to create an intuitive bidding platform.",
      descBullets: [
        "Oracle Primavera Cloud Enhancement: Boosted performance by 83%.",
        "Tender Marketplace App: Oracle APEX magic—20x speed, 100x code reduction."
      ]
    },
    {
      role: "Android Developer",
      company: "Upjao",
      companylogo: require("./assets/images/upjaoLogo.png"),
      date: "Dec 2021 – July 2022",
      desc: "Built a blazing-fast, crash-resistant app used by computer vision that saved developers 10,000 hours (thanks to automated data fetching and a rock-solid Room database). Even ninjas would struggle to reverse engineer it (thanks to native C++ integration).",
      descBullets: [
        "Automated data fetching saved a staggering 10,000 hours of developer time.",
        "Built an app with a near-perfect 99% crash-free rate using Room Database."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/splitIsFunLogo1.png"),
      projectName: "Split is Fun",
      projectDesc: "Split is Fun app helps roommates, travelers and friends organize their shared expenses so everyone knows who owes who.",
      footerLink: [
        {
          name: "Code Link",
          url: "https://github.com/Hritik-del/Split-is-Fun"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/covidTrackerLogo.png"),
      projectName: "Covid Tracker Application",
      projectDesc: "Developed an android application to track Covid-19 cases using Android Studio (JAVA).",
      footerLink: [
        {
          name: "Code Link",
          url: "https://github.com/Hritik-del/Covid-Tracker-Application"
        }
      ]
    },
    {
      image: require("./assets/images/wikipediaSearchEngine.png"),
      projectName: "Wikipedia Search Engine",
      projectDesc: "A simple search engine built in JAVA capable of building optimised positional index for the Wikipedia dump & perform field queries. The search returns a ranked list of articles in real time.",
      footerLink: [
        {
          name: "Code Link",
          url: "https://github.com/Hritik-del/Wikipedia-Search-Engine/tree/master"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Spring Framework Master Class",
      subtitle:
        "This certification proves my hands on knowledge in Spring AOP, Spring JDBC and JPA, Maven, JUnit, Mockito, Spring MVC, Spring Boot and Eclipse.",
      image: require("./assets/images/springLogo.png"),
      imageAlt: "OCI Certificate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/1692cf2f-57ca-4a15-a571-f050b6ac2695/public_url"
        }
      ]
    },
    {
      title: "Android App Development[Basic and Advanced]",
      subtitle:
        "This certification proves my hands on knowledge in  Android foundations, Android UI, implementing navigation, Android testing, tackling databases, notifications, Firebase, Java and Kotlin, understanding of XML, Android SDK, Android Studio, and working with APIs.",
      image: require("./assets/images/androidLogo.png"),
      imageAlt: "OCI Certificate Logo",
      footerLink: [
        {
          name: "Certification[Basic]",
          url: "https://www.credly.com/badges/695fd834-18e3-40f4-9d8a-e54c5dfc686c/linked_in_profile"
        }, 
        {
          name: "Certification[Advanced]",
          url: "https://www.credly.com/badges/a456efd2-801d-4fdf-97b1-467099091af5/linked_in_profile"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      subtitle:
        "The OCI Foundations certification helps me gain fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). ",
      image: require("./assets/images/ociLogo.png"),
      imageAlt: "OCI Certificate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6329DF89D7F6C142CC55CADED13809220F7079459D7A8DD57C89B8CE24A2C282"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      subtitle:
        "This certification helped me gain AI concepts and Workloads, ML and Deep Learning, Generative AI and LLMs and OCI AI services.",
      image: require("./assets/images/oraclelogo.png"),
      imageAlt: "OCI AI Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=08E92FAABE802C2190527751080CEB921D90EF95A6CDDBBB6F1AB6E4A292353F"
        }
      ]
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      subtitle:
        "I deepened my understanding of Java SE 8’s features, focusing on object-oriented concepts, Java language essentials, and the Java platform. I also embraced functional programming with lambda expressions, enhancing my ability to write efficient and maintainable code.",
      image: require("./assets/images/oraclelogo.png"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=524AE766E44F12A75E0ED48B31C030ABD200757FD1CED4CF714883DBC5219D38"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      subtitle:
        "This certification helped me with a strong understanding of Large Language Models (LLMs) and proficiency in using OCI Generative AI Service. It equips me with advanced techniques like Retrieval-Augmented Generation, Semantic Search, Vector databases, and LangChain. I learned how to build, trace, evaluate, and deploy LLM applications effectively.",
      image: require("./assets/images/oraclelogo.png"),
      imageAlt: "OCI AI Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=062BBBEFB06A7C8A95DE55CA300FB768F7807A1E6DA5EC2E77B6BC9B027137FD"
        }
      ]
    }, 
    {
      title: "Certified SAFe® 6 Agile Practitioner",
      subtitle:
        "The Certified SAFe® 6 Practitioner certification equipped me with skills in customer engagement, task planning, value delivery, feedback collection, and continuous process improvement.",
      image: require("./assets/images/SAFe-logo.png"),
      imageAlt: "OCI AI Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/915abff1-5dd0-47ad-b620-f336efff5ae1/print"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about an opportunity or just want to say hi? My Inbox is open for all.",
  number: "+91-7086357447",
  email_address: "hritikagrahari786@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
