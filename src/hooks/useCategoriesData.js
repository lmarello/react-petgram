import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://petgram-server-lmarello-j7jzprsh4-leomarello.vercel.app/categories'
    )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}
