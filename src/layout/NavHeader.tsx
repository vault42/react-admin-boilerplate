import { FC } from 'react'
import ColorControl from '@components/ColorControl'
import { useAppDispatch } from '@hooks/use-app-dispatch'
import { useAppSelector } from '@hooks/use-app-selector'
import { setPrimaryColor } from '@store/global-slice'
import ToggleTheme from '../components/ToggleTheme'

const NavHeader: FC = () => {
  const dispatch = useAppDispatch()
  const { primaryColor } = useAppSelector((state) => state.global)

  return (
    <div className='w-full flex justify-end'>
      <span className='ml-2'>
        <ColorControl
          onChange={(color) => {
            dispatch(setPrimaryColor(color))
          }}
          value={primaryColor}
        />
      </span>
      <span className='ml-2'>
        <ToggleTheme />
      </span>
    </div>
  )
}

export default NavHeader
