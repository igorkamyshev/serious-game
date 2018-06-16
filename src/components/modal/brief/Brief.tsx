import * as React from 'react'

import Container from './BriefContainer'

export interface Props {
    content: string
}

export class Brief extends React.PureComponent<Props> {

    public render() {
        const { content } = this.props

        return (
            <p>{content}</p>
        )
    }
}

export default Container(Brief)