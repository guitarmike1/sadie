export const videoTableAction = (json) => {
    console.log("videoTableAction",json)
    return {
      type: 'VIDEO_TABLE',
      json
    }
  }