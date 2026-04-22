import React from 'react'

type SectionHeadingProps = {
    title: string,
    cssClass?: string,
    size?: 'sm' | 'md' | 'lg',
    includeGameTitle?: boolean
    gameTitle?: string
}

const SectionHeading = ({title, cssClass, size, includeGameTitle, gameTitle}: SectionHeadingProps) => {
    const finalTitle = includeGameTitle && gameTitle ? `${gameTitle} ${title}` : title;
    const Tag = size === 'sm' ? 'h5' : size === 'lg' ? 'h2' : 'h4'

    return (
        <Tag className={cssClass || ''}>{finalTitle}</Tag>
    )
}

export default SectionHeading