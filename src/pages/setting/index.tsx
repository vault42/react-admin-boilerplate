import PageLayout from '@components/PageLayout'
import { Tabs } from '@mantine/core'
import { FC } from 'react'

const SettingPage: FC = () => {
  return (
    <PageLayout title='Setting' subTitle='global system settings'>
      <Tabs defaultValue='1' variant='default'>
        <Tabs.List>
          <Tabs.Tab value='1'>Gallery</Tabs.Tab>
          <Tabs.Tab value='2'>Messages</Tabs.Tab>
          <Tabs.Tab value='3'>Settings</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </PageLayout>
  )
}

export default SettingPage
