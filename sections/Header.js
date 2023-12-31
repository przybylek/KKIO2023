import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 pt-5 mb-0' style={{backgroundColor: '#f0f0f5'}}>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
	  <Image src="/Warsaw.jpg" alt='Avila' fluid />
        </div>
        <div className="col-md-6">
          <h1 className='h1 text-center anchor font-weight-bold'>KKIO 2023</h1>
          <h2 className='text-center h3 py-3'>24th Conference on <strong>Practical Aspects of and Solutions for Software Engineering</strong></h2>
          <h3 className='text-center h4 pb-3'><small>Organized within the framework of the <strong><a className='u' href='https://2023.fedcsis.org'>FedCSIS</a></strong> Conference Series</small></h3>
          <h4 className='text-center h5'>September 17 - 20, 2023</h4>
          <h4 className='text-center h5 pb-3'>Warsaw, Poland</h4>

 {/* Commenting the following section */}
 {/*
            <h4 className='text-center h5'>
		<span className='badge bg-warning p-2 m-1'><a className='u' href='https://pers.lasd.pl'>PeRS@ADBIS'23</a> (Barcelona)</span>
		<span className='badge bg-warning p-2 m-3'><a className='u' href='https://kkio.lasd.pl'>KKIO@FedCSIS'23</a> (Warsaw)</span>
	    </h4>
  */}
        </div>
      </div>
    </Container>

  </Jumbotron>
)

export default Header
