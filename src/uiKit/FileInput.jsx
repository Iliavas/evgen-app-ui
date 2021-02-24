
import ImageUploading from "react-images-uploading";

import "./css/file-input.css"

export const MyFileInput = () => {
    return <ImageUploading>{() => {return <div>hi there</div>}}</ImageUploading>
}