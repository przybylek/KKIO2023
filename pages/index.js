import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Header from '../sections/Header'
import About from '../sections/About'
import Topics from '../sections/Topics'
import Submissions from '../sections/Submissions'
import ImportantDates from '../sections/ImportantDates'
import Chairs from '../sections/Chairs'
import Steering from '../sections/Steering'
import Committee from '../sections/Committee'
import Program from '../sections/Program'
import Navigation from '../components/Navigation'

import { readCsv } from '../utils'

export default function Home({ chairs, committee, steering }) {
  return (
    <Container fluid className='px-0' style={{backgroundColor: '#f0f0f5'}}>
      <Head>
        <title>KKIO 2023</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
      </Head>

      <Navigation />

      <Header />
      <About />
      <Topics />
      <Submissions />
      <ImportantDates />
      <Program />
      <Chairs people={chairs} />
      <Steering people={steering} />
      <Committee people={committee} />
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      chairs: readCsv('./data/chairs.csv'),
      steering: readCsv('./data/steering.csv').slice(1),
      committee: readCsv('./data/committee.csv').slice(1),
    }
  }
}
