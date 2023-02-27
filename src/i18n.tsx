import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './lang/en/common.json'
import translationZhCN from './lang/zh-cn/common.json'

const resources = {
  en: {
    translation: translationEn
  },
  zhCN: {
    translation: translationZhCN
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'zhCN'
})

export default i18next
