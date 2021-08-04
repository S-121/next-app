import BazarImage from '@component/BazarImage'
import { H1, H3, H4, Paragraph } from '@component/Typography'
import { Card, Container, Grid, Button } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import React from 'react'
import FlexBox from '@component/FlexBox'
import { Box } from '@material-ui/system'
import { Link as Scroll } from 'react-scroll'


const StyledContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,

  '&:after': {
    content: '" "',
    position: 'absolute',
    height: '100px',
    width: '200px',
    top: 0,
    right: 0,

    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: '300px 300px 0 0',
    marginRight: -100,
  },

  '&:before': {
    content: '" "',
    position: 'absolute',
    height: '100px',
    width: '200px',
    bottom: 0,
    left: 0,

    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: '0 0 300px 300px',
    marginLeft: -100,
    marginBottom: -50,
  },
}))

const Section6 = () => {
  return (
    <Container id="features" sx={{ mb: '7rem' }}>
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb={7.5}
      >
        Access Over Ownership
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '260px',
                }}
              >
                <BazarImage
                  src={`/assets/images/icons/${item.icon}.svg`}
                  alt={item.title}
                  sx={{ mb: '1.5rem', height: 64 }}
                />
                {/* <item.icon color="inherit" sx={{fontSize=: "64px", mb: "1.5rem"}} /> */}
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>

      <Box maxWidth="830px" mx="auto" mb={12.5} textAlign="center"> 
        <Paragraph color="grey.700" maxWidth="400px" mx="auto" mb={4}>
            {/* This 'Paragraph' tg is just a placeholder to create space between the below 'Button" component and the images displayed above it*/}
          </Paragraph>
          <FlexBox justifyContent="center" m={-1}>
            <Button variant="contained" color="primary" sx={{ m: '0.5rem' }}>
              Join the Wait List
            </Button>
            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
            </Scroll>
          </FlexBox>
        </Box>


    </Container>
  )
}

const list = [
  {
    icon: 'verify',
    title: 'Renting',
  },
  {
    icon: 'cloud-data',
    title: 'Lending',
  },
  {
    icon: 'multivendor',
    title: 'Buying',
  },
  
  {
    icon: 'admin-dashboard',
    title: 'Selling',
  },
 
]

export default Section6
