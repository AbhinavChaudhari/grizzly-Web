import React from 'react'
import { Footer, Header } from './components'
import OnDemandSteps from './components/onDemand/OnDemandSteps'
import Serving from './components/serving/Serving'
import Employee from './components/employee/Employee'
import Testimonials from './components/testimonials/Testimonials'
import Jobseekers from './components/jobSeekers/jobseekers'
import Grizzlycities from './components/grizzlyCities/Grizzlycities'

const App = () => {
  return (
    <div className='w-full font-neue text-primary text-[1rem]'>
        <>
        <Header />
        <OnDemandSteps />
        <Serving />
        <Employee />
        <Testimonials />
        <Jobseekers />
        <Grizzlycities />
        <Footer />
        </>
    </div>
  )
}

export default App