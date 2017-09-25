import React from 'react';

const Child = (props) => {
    return(
        <div>자식컴포넌트의 숫자 값 : {props.num} </div>
    );
};

export default Child;