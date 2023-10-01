import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'


const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
      <a className='target' id='program'/>
      <h2 className='display-4 anchor mb-3'>Program</h2>
      <p>
          TBA...
      </p>
    </Container>



)

export default Program


//    <Row className="justify-content-center my-5">
//      <Col xs lg="1"> 
//      </Col>
//
//      <Col xs lg="2"> 
//        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
//      </Col>
//      <Col>
//  <h4>Lean and Agile Software Development</h4>
//  <h5>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h5>
//  <h4><a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h4>          
//      <p className='mt-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
//      <p>Current Time:
//         <Clock 
//           format={'HH:mm:ss'}
//           ticking={true}
//           className="mx-2" />
//       </p>
//      </Col>
//     <Col xs lg="1"> 
//      </Col>
//    </Row> 

/*
  
    <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Tuesday,<br /> March. 28</th><th>SRC Poster Exhibit (room: A046)</th></tr>
        <tr><td className='text-nowrap'>14:00 - 16:00</td><td>Why and Where Software Developers are (Not) using Project Data in Agile Retrospectives (<em>Leon Bein</em>)</td></tr>
        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>

        <tr className='text-center table-primary'><th>Wednesday, March. 29</th><th>Full Paper Session (room: A224)</th></tr>
        <tr><td className='text-nowrap'>11:00 - 11:05</td><td><a href='/LASD2023.ppt' target="_blank" rel="noopener noreferrer">Track opening</a> (<em>Adam Przybyłek</em>)</td></tr>

        <tr><td className='text-nowrap'>11:05 - 11:20</td><td>Towards a Recommender System-Based Process for Managing Risks in Scrum Projects (<em>Ademar Sousa Neto, Felipe Ramos, Danyllo Albuquerque, Emanuel Dantas, Mirko Perkusich, Hyggo Almeida, Angelo Perkusich</em>)</td></tr>
        <tr><td className='text-nowrap'>11:20 - 11:35</td><td>Tailoring Hybrid Software Processes in a Medium-Size Software Company  (<em>Jacqueline Marín, Julio Ariel Hurtado, María Cecilia Bastarrica, Luis Silvestre</em>)</td></tr>
        <tr><td className='text-nowrap'>11:35 - 11:50</td><td>Challenges in Large-Scale Agile Software Development Projects (<em>Hina Saeeda, Muhammad Ovais Ahmad, Tomas Gustavsson</em>)</td></tr>
        <tr><td className='text-nowrap'>11:50 - 12:05</td><td><a href='https://youtu.be/9nUUGlhBwzc'>An Exploratory Study about Non-functional Requirements Documentation Practices in Agile Teams</a> (<em>Shahraz Nasir, Eduardo Guerra, Luciana Zaina, Jorge Melegati</em>)</td></tr>
        <tr><td className='text-nowrap'>12:05 - 12:20</td><td><a href='https://youtu.be/0l6_pgq1eK8'>Which Challenges Do Exist with Agile Culture in Practice?</a> (<em>Thorben Kuchel, Michael Neumann, Philipp Diebold, Eva-Maria Schön</em>)</td></tr>


        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>

        <tr className='text-center table-primary'><th>Wednesday, March. 29</th><th>Poster Exhibit (room: A046)</th></tr>
        <tr><td className='text-nowrap'>14:30 - 16:30</td><td>
          <ul>
      <li>Agile GUI Testing by computing novel Mobile App Coverage Using Appium Tool  (<em>Sangharatna Godboley, Debasish Dalei, Ravichandra Sadam, Durga Prasad Mohapatr</em>)</li>
      <li>Differences in Performance, Scalability, and Cost of Using Microservice and Monolithic Architecture (<em>Przemysław Jatkiewicz, Szymon Okrój</em>)</li>
          </ul>
        </td></tr>

      </tbody>
    </Table>
  </Container>
*/