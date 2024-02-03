import React from "react";

function About(props) {
    const defaultImageSrc = "https://via.placeholder.com/215";

    return(
        <aside>
            <img src={props.ImgSrc || defaultImageSrc} alt="blog logo" />
            <p>{props.aboutText}</p>
        </aside>
    );
}

export default About;