var videoList = []

export const videoTableActionAsync = (json) => {
    console.log("videoTableActionAsync")
    return {
      type: "VIDEO_TABLE",
      value:  json
    };
  };

  export const ageUpAsnc = val => {
    return { type: "AGE_UP", value: val };
  };



  export const videoTableAction = () => {
    console.log("vTA - 1",videoList)
    return dispatch => {
      const json = getFiles()
    console.log("vTA - 2",videoList)
    setTimeout(() => {
    console.log("vTA - 3",videoList)
    console.log("videoList array = ",videoList)

        dispatch(videoTableActionAsync(videoList));
      }, 500);
    };
  };

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
        videoList = json
        return json
    }
    catch (err) {
        console.log(err)
    }
}