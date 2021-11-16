import {
  FileTextOutlined,
  GithubOutlined,
  LinkedinFilled,
  MediumSquareFilled,
} from '@ant-design/icons'
import NextImage from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { keyframes, styled } from 'stitches.config'
import shallow from 'zustand/shallow'

import { LinkWithIcon } from 'components'
import { resumeUrl, githubUrl, linkedinUrl, mediumUrl } from 'constant/links'
import { useStore } from 'hooks'
import { Moon, Sun } from 'icons'

export default function Home({ imageProps }) {
  const { theme, toggleTheme } = useStore(
    state => ({ theme: state.theme, toggleTheme: state.toggleTheme }),
    shallow
  )

  return (
    <Container>
      <Greeting>
        <Text>Welcome! Hope you are well.</Text>
        <Text>
          I&apos;m Fatih. I&apos;m a front end developer based in İzmir, Turkey.
        </Text>
        <Actions>
          <LinkWithIcon icon={<GithubOutlined />} href={githubUrl}>
            Review my code
          </LinkWithIcon>
          <LinkWithIcon icon={<FileTextOutlined />} href={resumeUrl}>
            Check out my resume
          </LinkWithIcon>
          <LinkWithIcon icon={<LinkedinFilled />} href={linkedinUrl}>
            Check out my profile
          </LinkWithIcon>
          <LinkWithIcon icon={<MediumSquareFilled />} href={mediumUrl}>
            Read my blog
          </LinkWithIcon>
        </Actions>
      </Greeting>
      <ImageContainer>
        <NextImage {...imageProps} placeholder="blur" />
      </ImageContainer>
      <DarkModeToggle onClick={toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </DarkModeToggle>
    </Container>
  )
}

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder('/images/floating.png')

  return {
    props: {
      imageProps: {
        src: img.src,
        layout: 'fill',
        objectFit: 'contain',
        blurDataURL: base64,
      },
    },
  }
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  transition: 'background-color 0.3s ease',
  background: '$background',

  '@maxMd': {
    px: 16,
  },
})

const Greeting = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  widthPercent: 100,
  maxWidth: 600,

  '@maxMd': {
    gap: 8,
  },
})

const Text = styled('span', {
  fontSize: 24,
  lineHeight: '32px',
  textAlign: 'center',
  color: '$text',
  transition: 'color 0.3s ease',

  '@maxMd': {
    fontSize: 18,
    lineHeight: '24px',
  },
})

const Actions = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  mt: 24,
  gap: 16,
})

const float = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(-10px)',
  },
})

const ImageContainer = styled('div', {
  widthPercent: 100,
  maxWidth: 500,
  pt: '100%',
  animation: `${float} 1.5s ease-in-out infinite alternate-reverse`,
  mt: 32,

  '@md': {
    pt: '50%',
  },

  '@xl': {
    pt: '25%',
  },
})

const DarkModeToggle = styled('button', {
  position: 'absolute',
  top: 16,
  right: 16,
  transition: 'background-color 0.3s ease',
  p: 16,
  borderRadius: '50%',
  color: '$text',
})
