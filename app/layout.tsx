import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core'
import { Open_Sans } from 'next/font/google'
import '@mantine/core/styles.css'
import AppWrapper from 'components/AppWrapper/AppWrapper'

interface Props {
  children: React.ReactNode
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
const theme = createTheme({
  colors: {
    dark: [
      '#1a1a1a',
      '#1f1f1f',
      '#242424',
      '#272727',
      '#2c2c2c',
      '#2f2f2f',
      '#333333',
      '#363636',
      '#393939',
      '#3c3c3c',
    ],
    light: [
      '#ffffff',
      '#fafafa',
      '#f5f5f5',
      '#f0f0f0',
      '#eaeaea',
      '#e0e0e0',
      '#d6d6d6',
      '#cccccc',
      '#c2c2c2',
      '#b8b8b8',
    ],
  },
})

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="description" content="" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <main className={openSans.className}>
          <MantineProvider theme={theme}>
            <AppWrapper>{children}</AppWrapper>
          </MantineProvider>
        </main>
      </body>
    </html>
  )
}
