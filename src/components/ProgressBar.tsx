import { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import './ProgressBar.css'

const ProgressBar = () => {
  useEffect(() => {
    nprogress.start()

    return () => {
      nprogress.done()
    }
  }, [])

  return <></>
}
export default ProgressBar
