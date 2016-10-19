import React, { PropTypes } from 'react';

const blockStyle = (color, size) => ({
    "height": `${size}px`,
    "backgroundColor": color,
    "border": "1px solid white"
})

const Block = props =>
    <div style={blockStyle(props.color, props.size)}>
        <span />
    </div>

Block.defaultProps = {
    color: "green",
    size: 10
}

Block.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

export default Block;