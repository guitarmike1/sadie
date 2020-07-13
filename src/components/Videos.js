import React, { Component } from 'react';

class Videos extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }
    

    

    componentDidMount() {
        getFiles()
    } 
    
        render()    {
            return (
                <div>
                    <h2>Sadie videos </h2>
                    <ul>
                        {this.state.videos.map(videos =>
                            <li key={videos.id}>{ videos.fileName } {videos.fileDate } </li>
                        )}
                    </ul>
                </div>
            )
        }
}

async function getFiles() {
    try {
        const response = await fetch('api/videos', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Orign':'*'
            }
        })
        const json = await response.json()
        console.log("json",json)
    }
    catch (err) {
        console.log(err)
    }
}
export default Videos