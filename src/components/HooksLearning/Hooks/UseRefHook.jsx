import { useRef } from "react"

const UseRefHook = () => {

    let videoRef = useRef(null);
    console.log(videoRef);
    // const handlePlay = () => videoRef.current
    return (
        <div>
            <h1>Video Plateform.</h1>

            <video  width="640" height="360" controls>
                <source ref={videoRef} src="https://youtu.be/WAxsu_6lnkY?si=XQ1hA-_JRwOztnnm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    )
}

export default UseRefHook