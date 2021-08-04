import BazarCard from '@component/BazarCard'
import BazarIconButton from '@component/BazarIconButton'
import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Container, Grid } from '@material-ui/core'
import { ShieldRounded } from '@material-ui/icons'
import React from 'react'
import { H4, Span } from '../Typography'

const Section9 = () => {
  return (
    <Container id="Howto" sx={{ mb: '70px' }}>
      <Grid id="Howto" container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '3rem',
                height: '100%',
                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarIconButton
                fontSize="1.75rem"
                height="64px"
                width="64px"
                bgcolor="grey.200"
              >
                <item.icon fontSize="inherit" />
              </BazarIconButton>
              {/* <FlexBox
                justifyContent="center"
                alignItems="center"
                borderRadius="300px"
                bgcolor="grey.200"
                height="64px"
                height="64px"
              >
                <Icon color="secondary" size="1.75rem">
                  {item.icon}
                </Icon>
              </FlexBox> */}
              <H4 mt={2.5} mb={1.25} textAlign="center">
                {item.title}
              </H4>
              <Span textAlign="center" color="grey.600">
                  {item.status}
              </Span>
            </BazarCard>
          </Grid>
        ))}
      </Grid>
      {/* </Card> */}
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Unlimited Access',
    status: 'Rent practically anything you desire right from your phone.',
  },
  {
    icon: CreditCardVerified,
    title: 'Forget the Price Tag',
    status: 'Finally, a way to access all the things you need, without the price tag.',
  },
  {
    icon: ShieldRounded,
    title: 'Total Flexibility',
    status: 'Rent whatever you need for as long (or as short) as you want.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    status: 'Every user is vetted to ensure a trustworthy process on both sides.',
  },
]

export default Section9