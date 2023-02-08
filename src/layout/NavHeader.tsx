import { FC } from 'react'
import ToggleTheme from './ToggleTheme'

const NavHeader: FC = () => {
  return (
    <div className='w-full flex justify-end'>
      <ToggleTheme />
    </div>
  )
}

export default NavHeader
