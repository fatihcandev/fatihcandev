import { styled } from 'stitches.config'

const LinkWithIcon = ({ icon, href, children }) => {
  return (
    <Container href={href} target="_blank" rel="noreferrer">
      {icon}
      {children}
    </Container>
  )
}

export default LinkWithIcon

const Container = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 24,
  lineHeight: '32px',
  transition: 'color 0.3s ease',
  color: '$text',

  '&:hover': {
    color: '$blue',
  },

  '@maxMd': {
    fontSize: 18,
    lineHeight: '20px',
  },
})
