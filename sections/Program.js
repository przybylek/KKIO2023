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
    <h2 className='display-4 anchor mb-3'>Accepted Papers</h2>

    <Row className="justify-content-center my-2">

      <Col>
	<p>The conference received 41 submissions. After a rigorous review process, 11 submissions were accepted for presentation during the conference (please refer to the <a className='u' href='https://2023.fedcsis.org/main/s3e/program'>conference program</a>) and inclusion in the proceedings under various categories outlined below. Additionally, revised and extended versions of papers presented at the conference were published as Springer post-proceedings: <a className='u' href='https://doi.org/10.1007/978-3-031-51075-5'>LNBIP 499</a>.</p>        

    <h3 className='display-5 anchor mb-3'>Keynote Paper</h3>
	<ul>
	  <li><a className='u' href='https://2023.fedcsis.org/speakers/JerzyNawrocki'>Towards reliable rule mining about code smells: The McPython approach</a> (<em>Maciej Ziobrowski, Mirosław Ochodek, <strong>Jerzy Nawrocki</strong> and Bartosz Walter</em>)</li>
	</ul>

      </Col>
      <Col xs lg="2"> 
	<a href="https://doi.org/10.1007/978-3-031-51075-5" target="_blank" rel="noopener noreferrer">
	  <Image fluid src='/LNBIP_KKIO.png' alt='LNBIP_KKIO23'/>
	</a>        
      </Col>
    </Row>



    <h3 className='display-5 anchor mb-3'>Full Papers</h3>
	<ul>
	  <li>Multi-queue service for task scheduling based on data availability (<em>Kamil Rybiński and Michał Śmiałek</em>)</li>
	  <li>On the Applicability of the Pareto Principle to Source-Code Growth in Open Source Projects (<em>Korneliusz Szymański and Mirosław Ochodek</em>)</li>
	  <li>A reusability-oriented use-case model specification language (<em>Bogumiła Hnatkowska and Piotr Zabawa</em>)</li>
	  <li>Risk-Based Continuous Quality Control for Software in Legal Metrology (<em>Marko Esche, Levin Ho, Martin Nischwitz and Reinhard Meyer</em>)</li>
	  <li>Exploring the Prevalence of Anti-patterns in the Application of Scrum in Software Development Organizations (<em>Michał Wróbel, Dorota Przała and Paweł Weichbroth</em>)</li>
	  <li>Psychological Safety, Leadership and Non-Technical Debt in Large Scale Agile Software Development (<em>Muhammad Ovais Ahmad</em>)</li>
	</ul>

    <h3 className='display-5 anchor mb-3'>Short Papers</h3>
	<ul>
	  <li>The Effects of Native Language on Requirements Quality (<em>Fayona Cowperthwaite, Jennifer Horkoff and Sylwia Kopczyńska </em>)</li>
	  <li>Association Rule Mining for Requirement Elicitation Techniques in IT Projects (<em>Denys Gobov and Nikolai Sokolovskiy</em>)</li>
	  <li>Review of Automated Code Refactoring of C# Programs (<em>Anna Derezinska and Dawid Sygocki</em>)</li>
	</ul>


    <h3 className='display-5 anchor mb-3'>Position Paper</h3>
	<ul>
	  <li>Comparative Analysis of Low-Code Computation Systems (<em>Anna Rosłan and Michał Śmiałek</em>)</li>
	</ul>

  </Container>
)

export default Program