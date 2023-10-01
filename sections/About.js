import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className="bg-white section p-4 mt-0 mb-5 rounded">
    <a className='target' id='about'/>
    <h2 className="display-4 anchor mb-3">About</h2>
    <p>The international conference on Lean and Agile Software Development (LASD) was founded in 2017 as a part of the FedCSIS multiconference. The conference grew each year until 2020 when it noticed a substantial decline in the number of submissions. To remedy this issue, in 2021 and 2022, LASD was held as a standalone, free of charge conference. Since 2023, it has joined ACM SAC as a track.</p>
    <p><strong>The objective of LASD is to advance the state-of-the-art in lean and agile software development and disseminate best practices, along with success stories of successful transitions and adaptations to the evolving work environment.</strong></p> 
    <p>LASD has already established itself as a prominent forum where practitioners, researchers, and academics meet to share and discuss their concerns, experience, and research findings. 
In the previous two editions, authors of approximately 50% of accepted full papers have been invited by either the editor of <span className="font-italic">Computer Science and Information Systems (ComSIS, IF: 1.4)</span> or the <span className="font-italic">Journal of Computer Languages (Cola, IF: 2.2)</span> to publish an extended version of their papers. The conference is also famous for its conscientious PC members, who diligently provide detailed reviews of journal-quality standards.</p>
  </Container>
)

export default About

//LASD'21 and LASD'22 received media sponsorship from the Agile Alliance


