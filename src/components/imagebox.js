import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    imageFrame,
    imageFrameText,
} from './layout.module.css'

const ImageBox = ({ children }) => {
    return (
        <div className={imageFrame}> 
            <StaticImage 
                alt="Curious Little Calf" 
                src="../images/babymoo.jpg"
            />
            <p className={imageFrameText}>{ children }</p>
        </div>
    )
}

export default ImageBox