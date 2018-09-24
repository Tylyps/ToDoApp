import React from 'react'
import { connect } from 'react-redux';
import { addAction } from '../store/actions/exampleActions'

const Counter = ({ counter, add }) => {
    return (<div>Counter: {counter} <button onClick={add}>Add</button></div>)
}

const mapStateToProps = (state) => ({
    counter: state.exampleReducer.counter,
})

const mapDispatchToProps = {
    add: addAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
