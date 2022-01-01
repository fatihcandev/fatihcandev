import { useLayoutEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('light')

  useLayoutEffect(() => {
    const themeStorage = localStorage.getItem('theme')
    if (themeStorage) setTheme(themeStorage)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const latest = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', latest)
      return latest
    })
  }

  return { theme, toggleTheme }
}

export default useTheme
