import React, { Component } from 'react';
import { connect } from 'react-redux'
// import  { videoTableActionAsync } from "../actions/videoTableAction";
import * as actionCreator from "../actions/videoTableAction"

class Videos extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        }
    }
    

    

    componentDidMount() {
        // getFiles()
        console.log("Videos - CDM")
        this.props.onAgeUp()
    } 
    
        render()    {
            return (
                <div>
                    <h2>Sadie videos </h2>
                    {/* <button onClick={this.props.videoTableAction}>Age UP</button> */}
                    <button onClick={this.props.onAgeUp}>Age UP</button>
                    <ul>
                        {console.log("list",this.props.list)}
                        {/* {this.props.list.map(videos => */}
                        // {this.state.videos.map(videos =>
                            <li key={videos.id}>{ videos.fileName } {videos.fileDate } </li>
                        )}
                    </ul>
                </div>
            )
        }
}

export async function getFiles() {
    try {
        const response = await fetch('api/videos', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Orign':'*'
            }
        })
        const json = await response.json()
        console.log("Video.js json",json)
    }
    catch (err) {
        console.log(err)
    }
}
const mapStateToProps = (state) => {
    console.log("Videos.js mapStP")
  
    return {
      list: state.list,
      age: state.age
    }
  }
  const mapDispatchToProps = (dispatch) => {
    console.log("Videos.js mapDtP")
  
    return {
        // onAgeUp: () => dispatch(videoTableActionAsync),
        onAgeUp: () => dispatch(actionCreator.videoTableActionAsync()),
        // onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
        // videoTableAction: (json) => dispatch(videoTableAction(json))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Videos)

// export default Videos