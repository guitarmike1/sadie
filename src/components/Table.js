import React, {Fragment} from 'react';
import { Column, Table, AutoSizer } from "react-virtualized";
import { connect } from 'react-redux'
// import  { videoTableAction } from "../actions/videoTableAction";
import { videoTableAction } from "../actions/videoTableAction"
import  { videoSelectAction } from "../actions/videoSelectAction"
import "../css/index.css";
import _ from "lodash";
import "../css/styles.css";
import "../css/App.css";

import Draggable from "react-draggable";

const TOTAL_WIDTH = 300;


class VideoTable extends React.Component {

  state = {
    widths: {
      name: 0.3,
      location: 0.3,
      description: 0.33
    }
  };

  componentDidMount() {
    // getFiles()
  this.logArgs = this.logArgs.bind(this)
  console.log("Videos - CDM")
    this.props.videoTableActionProperty()
    // this.props.videoSelectActionProperty()
} 
logArgs(event,index){
  console.log( 'here is the event:',event,
               'the index:',index,
  );

  this.props.videoSelectActionProperty(event.rowData.fileName)
  this.forceUpdate()
}

  render() {
    console.log('Table.js props = ',this.props)
    const { list } = this.props;
    console.log("Table list = ",list.length)
    const { widths } = this.state;
    console.log('Table.js widths = ',widths)
    console.log("TOTAL_WIDTH = ",TOTAL_WIDTH)

    

    return (
<Fragment>

      <div className="container">
        <h5 className="light-blue darken-1">Be yourself, everyone else is already taken</h5>
        <h5 className="orange lighten-4">We are all in the gutter, but some of us are looking at the stars</h5>
        <h5 class="purple darken-3 white-text">To live is the rarest thing in the world. Most people exist, that is all</h5>
        <h5 class="teal darken-2 yellow-text text-lighten-3">Experience is simply the name we give our mistakes</h5>
        <h5 class="yellow lighten-3 purple-text text-darken-2">Always forgive your enemies - nothing annoys them so much</h5>
      </div>


      <div className="container">
      <Table columns = "3"
      
        width={TOTAL_WIDTH}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
        onRowClick={this.logArgs}
      >
      
        <Column  className="orange lighten-4"
          headerRenderer={this.headerRenderer}
          dataKey="fileName"
          label="fileName"
          // width = "300"
          
          width={widths.name * TOTAL_WIDTH}
        />

        <Column className="purple darken-3 white-text"
          headerRenderer={this.headerRenderer}
          dataKey="fileDate"
          label="fileDate"
          // width = "300"
          width={widths.location * TOTAL_WIDTH}
        />
        <Column
          dataKey="description"
          label="Description"
          // width= "300"
          width={widths.description * TOTAL_WIDTH}
        />
        
      </Table>
      </div>

    </Fragment>

    );
  }

  headerRenderer = ({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection
  }) => {
    return (
      <React.Fragment key={dataKey}>
        <div className="ReactVirtualized__Table__headerTruncatedText">
          {label}
        </div>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) =>
            this.resizeRow({
              dataKey,
              deltaX
            })
          }
          position={{ x: 0 }}
          zIndex={999}
        >
          <span className="DragHandleIcon">⋮</span>
        </Draggable>
      </React.Fragment>
    );
  };

  resizeRow = ({ dataKey, deltaX }) =>
    this.setState(prevState => {
      const prevWidths = prevState.widths;
      const percentDelta = deltaX / TOTAL_WIDTH;

      // This is me being lazy :)
      const nextDataKey = dataKey === "name" ? "location" : "description";

      return {
        widths: {
          ...prevWidths,
          [dataKey]: prevWidths[dataKey] + percentDelta,
          [nextDataKey]: prevWidths[nextDataKey] - percentDelta
        }
      };
    });
}


const mapStateToProps = (state) => {
  console.log("Table.js mapStP")

  return {
    list: state.list,
    age: state.age,
    videoPath: state.videoPath
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("Table.js mapDtP")

  return {
    // videoTableActionProperty: (json) => dispatch(videoSelectAction(json)),
    videoTableActionProperty: (json) => dispatch(videoTableAction(json)),
    videoSelectActionProperty: (event) => dispatch(videoSelectAction(event))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoTable)