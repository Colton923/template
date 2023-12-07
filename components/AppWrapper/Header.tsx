import { Burger, Flex } from '@mantine/core'

type HeaderProps = {
  opened: boolean
  toggle: () => void
  toggleColorScheme: () => void
  colorScheme: string
}

const ColorThemeSVG = ({
  colorScheme,
  toggleColorScheme,
}: {
  colorScheme: string
  toggleColorScheme: () => void
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colorScheme === 'dark' ? '#fff' : '#000'}
      stroke={colorScheme === 'dark' ? '#fff' : '#000'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="m-83c3d5d1 m-f4e3c6be"
      onClick={toggleColorScheme}
      style={{ cursor: 'pointer' }}
    >
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    </svg>
  )
}
const Header = ({ opened, toggle, toggleColorScheme, colorScheme }: HeaderProps) => {
  return (
    <Flex direction={'row'} justify={'space-between'} align={'center'}>
      <Flex p={'xs'}>
        <Burger opened={opened} onClick={toggle} />
      </Flex>
      <Flex p={'xs'}>
        <ColorThemeSVG
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        />
      </Flex>
    </Flex>
  )
}

export default Header
