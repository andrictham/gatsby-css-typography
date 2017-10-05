import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Container from '../components/Container'

const theme = {
  avatarSize: '96px'
}

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 ${props => props.theme.avatarSize};
  width: ${props => props.theme.avatarSize};
  height: ${props => props.theme.avatarSize};
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`

const User = ({avatar, username, excerpt}) =>
  <ThemeProvider theme={theme}>
    <UserWrapper>
      <Avatar src={avatar} alt=""/>
      <Description>
        <Username>
          {username}
        </Username>
        <Excerpt>
          {excerpt}
        </Excerpt>
      </Description>
    </UserWrapper>
  </ThemeProvider>

export default () =>
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool!</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
