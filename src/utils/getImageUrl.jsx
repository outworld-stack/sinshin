import React from 'react'

function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href
}

export default getImageUrl