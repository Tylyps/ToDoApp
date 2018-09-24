import React from 'react'
import { connect } from 'react-redux';
import { addAction, multipleAction } from '../store/actions/exampleActions'

const Counter = ({ counter, add, multiple }) => {
    const by = 1.5;
    return (<div><button onClick={() => multiple(by)}>Multiple by {by}</button> Counter: {counter} <button onClick={add}>Add</button></div>)
}

const mapStateToProps = (state) => ({
    counter: state.exampleReducer.counter,
})

const mapDispatchToProps = {
    add: addAction,
    multiple: multipleAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
