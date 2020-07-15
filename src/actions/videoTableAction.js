export const videoTableAction = (json) => {
    console.log("videoTableAction")
    return {
      type: 'VIDEO_TABLE',
      json
    }
  }