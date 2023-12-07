'use client'
import { useMantineColorScheme, AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

const AppWrapper = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure(false)
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()
  return (
    <AppShell
      header={{ height: { base: 48, sm: 60, lg: 76 } }}
      navbar={{
        width: 256,
        breakpoint: 'sm',
        collapsed: { mobile: opened, desktop: true },
      }}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header>
        <Header
          opened={opened}
          toggle={toggle}
          toggleColorScheme={toggleColorScheme}
          colorScheme={colorScheme}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section>
          <Navbar />
        </AppShell.Section>
        <AppShell.Section>
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default AppWrapper
