import React from "react";
import { Column, Table } from "react-virtualized";
import { connect } from 'react-redux'
import  { videoTableAction } from "../actions/videoTableAction";

// import Draggable from "react-draggable";

const TOTAL_WIDTH = 500;

async function getFiles() {
  try {
      const response = await fetch('api/videos', {
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Orign':'*'
          }
      })
      const json = await response.json()
      console.log("json - tableReducer",json)
      videoTableAction(json);

  }
  catch (err) { 
      console.log(err)
  }
}
class VideoTable extends React.Component {

  state = {
    widths: {
      name: 0.5,
      location: 0.5
      // description: 0.33
    }
  };
componentDidMount(){
  getFiles()
  console.log("VideoTable did mount")
}


  render() {
    console.log('Table.js props = ',this.props)
    // console.log('TAble list = ',list)
    // const { list } = list;
    const { list } = this.props;
    const { widths } = this.state;
    console.log('Table.js widths = ',widths)

    return (
    
      <Table
        width={TOTAL_WIDTH}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
        onRowClick={this.logArgs}
      >
      
        <Column
          headerRenderer={this.headerRenderer}
          dataKey="name"
          label="Name"
          width={widths.name * TOTAL_WIDTH}
        />
        {/* <Column
          headerRenderer={this.headerRenderer}
          dataKey="location"
          label="Location"
          width={widths.location * TOTAL_WIDTH}
        /> */}
        {/* <Column
          dataKey="description"
          label="Description"
          width={widths.description * TOTAL_WIDTH}
        /> */}
      </Table>
    );
  }


  logArgs(event,index){
    console.log( 'here is the event:',event,
                 'the index:',index,
                //  'the object:',this.state.bpTableData[index]
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
        {/* <Draggable
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
        </Draggable> */}
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
  return {
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    videoTableAction: (json) => dispatch(videoTableAction(json))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoTable)