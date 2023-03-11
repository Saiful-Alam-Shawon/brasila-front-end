import React, { useState } from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {

    let [color, setColor] = useState("#36d7b7");
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


    return (
        <div>
            <BounceLoader

                color={color}
                loading={true}
                cssOverride={override}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"></BounceLoader>
        </div>
    );
};

export default Loading;