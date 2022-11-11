import React, { useEffect, useRef, useState } from 'react';

// import 'font-awesome/css/font-awesome.min.css';
import 'abcjs/abcjs-audio.css';
import abcjs, { type Responsive } from 'abcjs';

interface AbcNotationProps {
    abcString: string;
}

const resize: Responsive = 'resize';

const AbcNotation: React.FC<AbcNotationProps> = ({ abcString }) => {
    const abcNotationRef = useRef(null);
    const [visualObj, setVisualObj] = useState({});

    const [visualOptions, setVisualOptions] = useState({
        // responsive: resize,
        // clickListener: clickListener,
        add_classes: true,
        jazzchords: true,
    });

    useEffect(() => {
        if (!abcString || !visualOptions || !abcNotationRef?.current) {
            return;
        }
        const obj = abcjs.renderAbc(
            abcNotationRef.current,
            abcString,
            visualOptions
        );
        setVisualObj(obj);
    }, [abcNotationRef, abcString, visualOptions]);

    return <div ref={abcNotationRef}></div>;
};

export default AbcNotation;
