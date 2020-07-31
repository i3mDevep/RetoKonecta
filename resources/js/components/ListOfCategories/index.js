import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from "./style"

export const ListOfCategories = ({ categories=[], deleteCategory }) => {
  const [showCategories,setShowCategories] = useState(false)
    useEffect(() => {
      const onScroll = e => {
        const newShowFixed = scrollY > 200
        showCategories !== newShowFixed && setShowCategories(newShowFixed)
      }
      document.addEventListener('scroll',onScroll)
      return () => document.removeEventListener('scroll',onScroll)
    },[showCategories])

    const renderList = (fixed) => (
      <List fixed = { fixed }>
      {
        categories.map(category => <Item key={category.id}><Category deleteCategory={deleteCategory} {...category} /></Item>)
      }
      </List>
    )
    return (
      <>
        {renderList()}
        {showCategories && renderList(true)}
      </>
    )
}