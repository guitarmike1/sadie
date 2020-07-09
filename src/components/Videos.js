import React, { Component } from 'react';

class Videos extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        fetch('api/videos', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Orign':'*'
            }
        })
        .then(res => res.json())
        .then(videos => this.setState({videos}, () => console.log('videos fetch..', videos)));
    }
        render()    {
            return (
                <div>
                    <h2>Sadie videos </h2>
                    <ul>
                        {this.state.videos.map(videos =>
                            <li key={videos.id}>{ videos.name } {videos.date } </li>
                        )}
                    </ul>
                </div>
            )
        }
}

export default Videos