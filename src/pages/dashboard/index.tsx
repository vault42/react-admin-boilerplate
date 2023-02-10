import { FC } from 'react'
import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'

const DashboardPage: FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Button
        onClick={() => {
          i18n.changeLanguage('en')
        }}
      >
        {t('button.confirm')}
      </Button>
    </div>
  )
}

export default DashboardPage
