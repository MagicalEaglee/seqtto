import React from 'react'
import "./HeroS.css"
import { NavLink } from 'react-router-dom'
import php from "../../Assets/php.jpeg"
import digital from "../../Assets/digital.jpeg"
import cyber from "../../Assets/cyber.jpeg"
import java from "../../Assets/java.jpeg"
import devops from "../../Assets/devops.jpeg"
import mobile from "../../Assets/mobile.jpeg"
import web from "../../Assets/web.jpeg"
import test from "../../Assets/testing.jpeg"

let data=[
    {
        pre:"Web",
        pos:"Development",
        image:web,
        p1:"Elevate your digital footprint with our premier web development services. We go beyond creating websites; we architect online experiences that captivate and engage. Using cutting-edge technologies.",
        p2:"Our skilled team transforms your vision into a dynamic and responsive platform. From intuitive user interfaces to robust backend solutions, we ensure your website stands out in the competitive digital realm.",
        p3:"Whether you're a startup aiming for a strong debut or an enterprise seeking a digital overhaul, our commitment to innovation guarantees a website that not only meets but exceeds your expectations, leaving a lasting impression on your audience.",
        link:"../../Services/WebDevelopment"
    },
    {
        pre:"Mobile",
        pos:"Development",
        image:mobile,
        p1:"Power your business forward with our expert mobile app development. We specialize in crafting cutting-edge, user-friendly apps that enhance your digital presence. From concept to deployment",
        p2:"Our skilled team ensures a seamless and engaging mobile experience. We prioritize user-centric design, creating applications that not only look stunning but also deliver intuitive interactions. ",
        p3:"With a focus on innovation and functionality, our mobile app development services propel your brand into the forefront of the ever-evolving landscape of mobile technology.",
        link:"../../Services/MobileDevelopment"
    },
    {
        pre:"Java App",
        pos:"Development",
        image:java,
        p1:"The landscape of enterprise Java development has witnessed a shift from complex Enterprise JavaBeans (EJB) specifications and implementations. Presently, lighter-weight frameworks such as Struts and Spring have emerged as viable alternatives, providing essential support for distributed components, message queuing, transactions, and the creation of web service endpoints. This evolution reflects a dynamic response to the changing needs of modern web application development.",
        p2:"This article delves into the dynamic intersection of innovation, research, and enterprise challenges, shedding light on the crucial aspects that drive success in the ever-expanding world of software development.",
        p3:"",
        link:"../../Services/JavaDevelopment"
    },
    {
        pre:"Node Js",
        pos:"Development",
        image:web,
        p1:"In the dynamic landscape of modern software development, the demand for real-time, high-performance applications is ever-growing. At Seqto, we specialize in harnessing the full potential of Node.js to propel your projects to new heights.",
        p2:"In a digital era where speed and responsiveness are paramount, our Node.js development team at Seqto is committed to crafting applications that operate in real-time without compromising on performance.",
        p3:"Node.js, known for its event-driven architecture, empowers us to build applications that seamlessly handle concurrent connections, ensuring a smooth and responsive user experience.",
        link:"../../Services/NodeDevelopment"
    },
    {
        pre:"Digital",
        pos:"Marketing",
        image:digital,
        p1:"Propel your brand's online presence with our comprehensive digital marketing solutions. We leverage data-driven strategies to optimize visibility, drive targeted traffic, and maximize conversion rates.",
        p2:"Our holistic approach encompasses SEO, social media management, and compelling content creation, tailored to resonate with your audience. In an ever-evolving digital landscape, we focus on staying ahead, ensuring that your business not only adapts but excels.",
        p3:"From strategic planning to impactful execution, our digital marketing services are designed to elevate your brand, fostering sustained growth and success in the competitive online arena.",
        link:"../../Services/DigitalMarketing"
    },
    {
        pre:"Cyber",
        pos:"Security",
        image:cyber,
        p1:"Safeguard your digital assets with our robust cybersecurity solutions. In an era of evolving cyber threats, our expert team specializes in creating impenetrable defenses. From comprehensive risk assessments to advanced threat detection.",
        p2:"Our cybersecurity services prioritize the resilience of your business. We go beyond conventional security measures, implementing proactive strategies to mitigate risks and protect against potential breaches.",
        p3:"In an interconnected and vulnerable digital landscape, our cybersecurity solutions provide the peace of mind necessary for your business to thrive securely.",
        link:"../../Services/CyberSecurity"
    },
    {
        pre:"DOT NET",
        pos:"Development",
        image:"https://static-cdn.qburst.com/5-4-7/images/responsive/service/serviceLanding/cloudEnablement.svg",
        p1:"ASP.NET caters to diverse programming models for application development. The Web Forms model, characterized by its event-driven approach, offers a plethora of built-in functionalities, making it particularly suitable for line-of-business applications.",
        p2:"On the other hand, the ASP.NET MVC model demands more coding effort but proves to be an excellent choice for large and intricate applications, providing developers with greater control.",
        p3:"To enhance application interfaces, we frequently incorporate AJAX libraries, ensuring a more dynamic and interactive user experience. Our portfolio includes successfully developed applications for clients across various sectors such as engineering, IT, BPO, healthcare, retail, and finance.",
        link:"../../Services/DotnetDevelopment"
    },
    {
        pre:"PHP",
        pos:"Development",
        image:php,
        p1:"PHP is renowned for its user-friendly syntax and simplicity, making it an ideal choice for developers who value ease of use. With its intuitive design, PHP allows for swift and efficient coding, reducing development time without compromising on functionality.",
        p2:"In an era where budget constraints often dictate decisions, PHP stands out as a cost-effective solution. Leveraging PHP for your web development needs ensures a robust and scalable platform without breaking the bank. Enjoy high-quality results without compromising your financial resources.",
        p3:"",
        link:"../../Services/PhpDevelopment"
    },
    {
        pre:"Python",
        pos:"Development",
        image:"https://static-cdn.qburst.com/5-4-7/images/responsive/service/serviceLanding/digitalization.svg",
        p1:"In the ever-evolving landscape of web development, Python stands out as a powerhouse, offering rapid development and prototyping capabilities that streamline the creation and integration of diverse systems.",
        p2:"This versatile language is not only proficient in handling complex websites but also excels as a backend solution for iOS and Android applications. In this dynamic realm, we harness the prowess of Python, specifically leveraging the robust Django framework and lightweight Flask to accelerate and elevate the development process.",
        p3:"",
        link:"../../Services/PythonDevelopment"
    },
    {
        pre:"Devops",
        pos:"",
        image:devops,
        p1:"At Seqto, we are committed to revolutionizing your business operations through cutting-edge DevOps and DevSecOps solutions. Our tailored services ensure seamless collaboration between development and operations teams, enhancing efficiency and security throughout your software development lifecycle.",
        p2:"Experience a paradigm shift in software development with Seqto's DevOps solutions. We streamline collaboration, automate workflows, and optimize processes to deliver faster and more reliable results. Our experts leverage industry best practices to integrate development and operations seamlessly, reducing time-to-market and enhancing overall product quality.",
        p3:"",
        link:"../../Services/Dev"
    },
    {
        pre:"Testing",
        pos:"",
        image:test,
        p1:"Elevate your digital defenses with Seqto's advanced security testing solutions. Our comprehensive approach ensures thorough examination of vulnerabilities, offering a robust shield against potential threats. Trust Seqto for cutting-edge security testing that safeguards your digital assets.",
        p2:"In the fast-paced digital landscape, the efficiency of your website plays a pivotal role in ensuring a seamless user experience. At Seqto, we specialize in performance testing, a crucial aspect of web development that goes beyond just functionality. Our dedicated team is committed to enhancing the speed, responsiveness, and overall performance of your website, ensuring it meets the high standards expected by today's online audience.",
        p3:"",
        link:"../../Services/T"
    }
]

function SerDetails(props) {
    const c=data.filter((item)=>item.pre===props.name)
    console.log(c)
   
  return (
    <div>
      {
        c.map((item,i)=>{
            return <div className="containerS">
                <h1>{item.pre} <span>{item.pos}</span></h1>
                <div className="ConS">
                    <div className="lefts">
                    <div className="im">
                        <img src={item.image} alt="" />
                    </div>
                    <button><NavLink to={item.link}>Learn More</NavLink></button>
                </div>
                <div className="rights">
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                </div>
                </div>
            </div>
            
        })
      }
    </div>
  )
}

export default SerDetails
