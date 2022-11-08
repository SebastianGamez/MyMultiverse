import React from 'react'

type Props = {
    title: string,
    styles: string
    onClick: () => void
}

export const Button = ({title, styles, onClick}: Props ) => {
  return (
    <
        button
        className={styles}
        onClick={onClick}
    >
        { title }
    </button>
  )
}
