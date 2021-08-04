import FlexBox from '@component/FlexBox'
import LazyImage from '@component/LazyImage'
import { H1, H4, Paragraph } from '@component/Typography'
import { Button, Container } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'
import { Link as Scroll } from 'react-scroll'
import Header from './Header'
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'

const Section1 = () => {
  return (
    <Box
      sx={{
        background: 'url(/assets/images/landing/landing-bg-1.svg) center/cover',
      }}
    >
      <Header />

      <Container
        id="section-1"
        sx={{ mt: '4rem', mb: '7rem', position: 'relative', }}
      >
        <Box maxWidth="830px" mx="auto" mb={12.5} textAlign="center">
          
          <H4 color="primary.main" fontSize="18px">
            Coming Soon - August 2021
          </H4>
          <H1 color="secondary.main" fontSize="40px" mb={2} fontWeight="900">
            The Rental Marketplace for Students
          </H1>
          <Paragraph color="grey.700" maxWidth="400px" mx="auto" mb={4}>
            Access everything you need for school, life and beyond... without buying a single thing! 
          </Paragraph>
          <FlexBox justifyContent="center" m={-1}>
            <Button variant="contained" color="primary" sx={{ m: '0.5rem' }}>
              Get Early Access
            </Button>
            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
              <Button variant="outlined" color="primary" sx={{ m: '0.5rem' }}>
                How It Works
              </Button>
            </Scroll>
          </FlexBox>
        </Box>

{/* This is code for a demo image. Enable the code to show product image on landing page */
        <LazyImage
          src="/assets/images/landing/sharestash-04.png"
          width={1207}
          height={383}
          layout="responsive"
        />
        }

        {/* <Card
          sx={{
            position: 'absolute',
            bottom: '-36px',
            left: 'calc(50% - 95px)',
            boxShadow: 'regular',
            borderRadius: '8px',
          }}
        >
          <Button variant="text" sx={{ p: '1.5rem 2.5rem' }}>
            <Span fontWeight="700">Ready For</Span>
            <Figma />
          </Button>
        </Card> */}
      </Container>
    </Box>
  )
}

export default Section1
