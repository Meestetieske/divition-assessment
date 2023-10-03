const getFavoritesFromStorage = () => {
  const favorites = localStorage.getItem('favorites')
  return favorites?.split(',').filter((id) => id !== '') || []
}

export default getFavoritesFromStorage
