import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Steering = ({ people }) => (
  <Container className="bg-white section p-4 my-5 rounded">
      <a className='target' id='sc'/>
      <h2 className='display-4 anchor mb-3'>Steering Commitee</h2>
      <PeopleList people={people} />
  </Container>
)

export default Steering
