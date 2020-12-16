import React from 'react'
import Link from 'next/link'

export default ({content}) => (
    <div>
        <h1>{content.title}</h1>
        <Link href="/notes"> Go to notes</Link>
    </div>
)

export function getStaticProps() {
    return {
        props: {
            content: {
                title: 'This is my really nice app'
            }
        }
    }
}