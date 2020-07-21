export const videoTableActionAsync = () => {
    console.log("videoTableActionAsync")
    return {
      type: "VIDEO_TABLE",
      value:  1
    };
  };

  export const ageUpAsnc = val => {
    return { type: "AGE_UP", value: val };
  };



  export const videoTableAction = () => {
    console.log("vTA - 1")
    return dispatch => {
      // const json = getFiles()
      const json = 1
    console.log("vTA - 2")
    setTimeout(() => {
    console.log("vTA - 3")

        dispatch(videoTableActionAsync(json));
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
        return json
    }
    catch (err) {
        console.log(err)
    }
}