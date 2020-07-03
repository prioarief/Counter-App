import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter, resetCounter } from '../redux/actions/counter'

class Counter extends Component {
	render() {
		return (
			<div className='d-flex align-items-center flex-column'>
				<h1>Counter App</h1>
				<h1>{this.props.counter.value}</h1>
				<div>
					<Button onClick={() => this.props.decreaseCounter()}>-</Button>
					<Button onClick={() => this.props.resetCounter()} className='mr-2 ml-2'>Reset</Button>
					<Button onClick={() => this.props.increaseCounter()}>+</Button>
				</div>
				<div className='mt-2'>
					<Link to='/display'>Go to Display</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	counter: state.counter,
})

const mapDispatchToProps = { increaseCounter, decreaseCounter, resetCounter }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
