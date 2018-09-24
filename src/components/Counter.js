import React from 'react'
import { connect } from 'react-redux';
import { addAction, multiplyAction } from '../store/actions/exampleActions';

const Counter = ({ counter, add, multiply }) => {
    const by = 1.5;
    return (<div><button onClick={() => multiply(by)}>Multiply by {by}</button> Counter: {counter} <button onClick={add}>Add</button></div>)
}

const mapStateToProps = (state) => ({
    counter: state.exampleReducer.counter,
})

const mapDispatchToProps = {
    add: addAction,
    multiply: multiplyAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
