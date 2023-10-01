import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Submissions = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='submissions'/>
    <h2 className='display-4 anchor mb-3'>Submissions</h2>
    <p>
      Papers submitted within the Call for Regular Papers can be accepted, by the event's Programme Committee, in one of the three categories: full papers, short papers or communication papers. Regular papers must consists of minimum 4 and maximum 10 pages at submission, but when accepted they will be published with the following upper size restrictions: up to 10 pages for full papers, up to 4 pages for short papers, up to 8 pages for communication papers. For further information please visit: <a href="https://fedcsis.org/for_authors">https://fedcsis.org/for_authors</a></p>

    <p>The revised and extended versions of the selected papers presented at KKIO'2023 will be published by Springer in volumes of the Lecture Notes in Business Information Processing series.</p>
  </Container>
)

export default Submissions


