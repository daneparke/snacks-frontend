import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Snack from './components/Snack'
import Login from './components/Login'
import Edit from './components/Edit'
import Add from './components/Add'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      snackList: [],
      loginInputted: false,
      oneSnack: [],
      title: '',
      reviewText: '',
      rating: 0,
      reviewInputted: false,
      reviews: [],
      review: [],
      reviewSnackID: undefined,
    }
  }

  componentDidMount() {
    this.loadSnacks()
    this.loadReviews()
  }

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
    if (this.state.title.length > 0 && this.state.reviewText.length > 0 && this.state.rating !== 0) {
      this.setState({
        reviewInputted: true,
      })
    }
  }
  snackDetailsClick = (event) => {
    fetch(`http://snacks-backend-io.herokuapp.com/snacks/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          oneSnack: [response]
        })
      })
  }
  deleteReview = (event) => {
    fetch(`http://snacks-backend-io.herokuapp.com/reviews/${event.target.id}`, {
      method: 'DELETE',
    }).then(() => this.loadReviews())
  }
  addReview = (event) => {
    if (this.state.reviewInputted === false) {
      alert("Please Fill Out All Fields")
    }
    var newReview = {
      title: this.state.title,
      text: this.state.reviewText,
      rating: this.state.rating,
      snack_id: this.state.reviewSnackID
    }
    fetch('http://snacks-backend-io.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview)
    })
      .then(response => response.json())
      .then(() => this.loadReviews())
  }
  snackIDForReview = (event) => {
    this.setState({
      reviewSnackID: event.target.id
    })
  }
  editReviewClick = (event) => {
    fetch(`http://snacks-backend-io.herokuapp.com/reviews/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          review: [response],
        })
      })
  }
  editReview = (event) => {
    var updatedReview = {
      title: this.state.title,
      text: this.state.reviewText,
      rating: this.state.rating,
      snack_id: this.state.reviewSnackID
    }
    fetch(`http://snacks-backend-io.herokuapp.com/reviews/${event.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReview)
    }).then(response => response.json())
      .then(() => this.loadReviews())

  }
  loadReviews = () => {
    fetch("http://snacks-backend-io.herokuapp.com/reviews")
      .then(result => result.json())
      .then((response) => {
        this.setState({
          reviews: response
        })
      })
  }
  loadSnacks = () => {
    fetch("http://snacks-backend-io.herokuapp.com/snacks")
      .then(result => result.json())
      .then((response) => {
        this.setState({
          snackList: response
        })
      })
  }

  render() {
    return (
      <>
        <div className='center'>
          <Route path='/' exact render={() => (<Login addUser={this.addUser} {...this.state} />)} />
          <Route path='/home' render={() => (<Home snackDetailsClick={this.snackDetailsClick} {...this.state} />)} />
          <Route path='/snack' render={() => (<Snack snackIDForReview={this.snackIDForReview} deleteReview={this.deleteReview} editReviewClick={this.editReviewClick} {...this.state} />)} />
          <Route path='/edit' render={() => (<Edit handleInput={this.handleInput} editReview={this.editReview}{...this.state} />)} />
          <Route path='/add' render={() => (<Add handleInput={this.handleInput} addReview={this.addReview} {...this.state} />)} />
        </div>
      </>
    );
  }
}

export default App;
