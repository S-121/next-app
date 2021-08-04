import BazarImage from '@component/BazarImage'
import { Paragraph } from '@component/Typography'
import { Box, Button, Grid, styled } from '@material-ui/core'
import React from 'react'

export interface CarouselCard4Props {}

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '.title': {
    fontSize: 50,
    marginTop: 0,
    marginBottom: '1.35rem',
    lineHeight: 1.2,
  },
  [theme.breakpoints.up('sm')]: {
    '.grid-item': {
      minHeight: 424,
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    paddingLeft: 0,

    '.title': {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down('xs')]: {
    '.title': {
      fontSize: 16,
    },
    '.title + *': {
      fontSize: 13,
    },
    '.button-link': {
      height: 36,
      padding: '0 1.5rem',
      fontSize: 13,
    },
  },
}))

const CarouselCard4: React.FC<CarouselCard4Props> = () => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className="title">Share your stuff, earn cash</h1>
          <Paragraph color="secondary.main" mb={2.7}>
          Make money lending your belongings to your fellow classmates.
          </Paragraph>
          <Button
            className="button-link"
            variant="contained"
            color="primary"
            disableElevation
            sx={{
              px: '1.75rem',
              height: '44px',
              borderRadius: '8px',
            }}
          >
            Get Access
          </Button>
        </Grid>
        <Grid item sm={5} xs={12}>
          <BazarImage
            src="/assets/images/products/sharestash-02.png"
            alt="apple-watch-1"
            sx={{
              display: 'block',
              mx: 'auto',
              maxHeight: 400,
              maxWidth: '100%',
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default CarouselCard4