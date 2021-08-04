import Footer from '@component/landing/Footer'
import Section1 from '@component/landing/Section1'
import Section2 from '@component/landing/Section2'
import Section3 from '@component/landing/Section3'
import Section5 from '@component/landing/Section5'
import Section4 from '@component/landing/Section4'
import Section6 from '@component/landing/Section6'
import Section7 from '@component/landing/Section7'
import Section8 from '@component/landing/Section8'
import Section9 from '@component/landing/Section9'
import WaitListForm from '@component/landing/WaitListForm'
import { Box } from '@material-ui/system'

const IndexPage = () => {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section8 />
      <Section9 />
      <Section2 />
      
      
     { /* <Section3 /> */}
      { /* <Section4 /> */}
      {/* <Section5 /> */}
      <Footer />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer /> */}
    </Box>
  )
}

export default IndexPage
