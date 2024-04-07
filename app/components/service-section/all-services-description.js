import desginImg from '../../../public/assets/img/services/design.png'
import frontImg from '../../../public/assets/img/services/front.png'
import backImg from '../../../public/assets/img/services/back.png'
import supportImg from '../../../public/assets/img/services/support.png'
import cloudImg from '../../../public/assets/img/services/cloud.png'

const servicesLibrary = [
    {
        id: 'design',
        name: 'Design',
        htmlDescription: `
            <div>
                <p>Our design services go beyond aesthetics.</p>
                <p>We create responsive, custom designs tailored for desktop, tablet, and mobile devices. 
                By thoroughly studying your business and understanding your needs, we ensure that the design reflects your brand identity and engages your target audience.</p> 
                <p>Our iterative process involves continuous client collaboration, guaranteeing satisfaction before moving forward.</p>
            </div>
        `,
        image: desginImg
    },
    {
        id: 'front-end-development',
        name: 'Front-end Development',
        htmlDescription: `
            <div>
                <p>Once the design is approved, our front-end development team steps in.</p>
                <p>We translate the approved design into a fully functional user interface for your website. 
                Regular updates and feedback sessions keep you in the loop, ensuring that the development aligns with your vision. </p>
                <p>Our goal is to deliver a seamless and user-friendly experience that resonates with your audience.</p>
            </div>
        `,
        image: frontImg
    },
    {
        id: 'back-end-development',
        name: 'Back-end Development and Deployment',
        htmlDescription: `
            <div>
                <p>When your website is ready to go live, we handle the deployment process. 
                Our team assists with domain setup, ensuring a smooth transition from development to a live environment. 
                Your website becomes accessible on your chosen domain, ready to make a lasting impression on your audience.</p>
                <p>For added functionality, we offer back-end development services. 
                This involves the integration and connection of your website to third-party applications using APIs.</p>
                <p>Whether it's data storage, database management, or API implementation, our team ensures a robust back-end that complements the user interface, creating a cohesive and efficient web solution.</p>
            </div>
        `,
        image: backImg
    },
    {
        id: 'support',
        name: 'Support',
        htmlDescription: `
            <div>
                <p>Customer satisfaction is at the forefront of our services. 
                For commercial websites, we offer dedicated customer support services. 
                Whether it's addressing queries, resolving issues, or providing technical assistance, our support team ensures a positive and responsive experience for your users.</p>
            </div>
        `,
        image: supportImg
    },
    {
        id: 'cloud-consulting',
        name: 'Cloud consulting',
        htmlDescription: `
            <div>
                <p>Optimizing your website's performance is crucial in today's digital landscape. </p>
                <p>Our cloud consulting services focus on enhancing the scalability, security, and efficiency of your web infrastructure. 
                By leveraging cloud technologies, we ensure that your website operates at peak performance, providing a seamless experience for your users.</p>
            </div>
        `,
        image: cloudImg
    }
]

export default servicesLibrary