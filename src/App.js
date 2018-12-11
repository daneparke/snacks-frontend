import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Snack from './components/Snack'
import Login from './components/Login'
import Edit from './components/Edit'
import Add from './components/Add'
import './App.css';
import snacksLogo from './snacks_logo.png'


class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      snackList: [],
      signUpInputted: false,
      existingUserInputted: false,
      oneSnack: [],
      title: '',
      reviewText: '',
      rating: 0,
      reviewInputted: false,
      reviews: [],
      review: [],
      reviewSnackID: undefined,
      showExistingInput: false,
      showSignUpInput: false,
      showFirstButtons: true,
      currentUser: [],
      invalidUser: false,
      userLoggedIn: false
    }
  }
  componentDidMount() {
    this.loadSnacks()
    this.loadReviews()
  }
  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
      invalidUser: false
    })
    if (this.state.title.length > 0 && this.state.reviewText.length > 0 && this.state.rating > 0) {
      if (this.state.rating <= 5) {
        this.setState({
          reviewInputted: true,
        })
      }
    }
    else if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({
        signUpInputted: true
      })
    }
    else if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({
        existingUserInputted: true
      })
    }
  }
  existingClick = () => {
    this.setState({
      showExistingInput: true,
      showFirstButtons: false,
      showSignUpInput: false
    })
  }
  signUpClick = () => {
    this.setState({
      showSignUpInput: true,
      showExistingInput: false,
      showFirstButtons: false
    })
  }
  existingUser = (event) => {
    if (this.state.existingUserInputted === false) {
      console.log('nope')
    } else {
      fetch('http://localhost:3000/users')
        .then(result => result.json())
        .then((response) => {
          response.map(user => {
            if (user.email === this.state.email && user.hashed_password === this.state.password) {
              this.setState({
                currentUser: user,
                userLoggedIn: true
              })
            }
            return null
          })
        })
    }
  }
  addUser = (event) => {
    if (this.state.signUpInputted === false) {
      alert('Please Fill Out All Fields')
    }
    var newUser = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      hashed_password: this.state.password
    }
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          currentUser: response,
          signUpInputted: false,
          email: '',
          password: '',
          userLoggedIn: true
        })
      })
  }

  snackDetailsClick = (event) => {
    fetch(`http://localhost:3000/snacks/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          oneSnack: [response]
        })
      })
  }
  deleteReview = (event) => {
    fetch(`http://localhost:3000/reviews/${event.target.id}`, {
      method: 'DELETE',
    }).then(() => this.loadReviews())
  }
  addReview = (event) => {
    if (this.state.reviewInputted === false) {
      alert('Please Fill Out All Fields')
    }
    else if (this.state.rating > 5) {
      alert('Ratings must be 1-5')
    }
    else {
      var newReview = {
        title: this.state.title,
        text: this.state.reviewText,
        rating: this.state.rating,
        snack_id: this.state.reviewSnackID,
        user_id: this.state.currentUser.id
      }
      fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview)
      })
        .then(response => response.json())
        .then(() => this.loadReviews())
        .then(() => {
          this.setState({
            reviewInputted: false,
            rating: 0
          })
        })
    }
  }
  snackIDForReview = (event) => {
    this.setState({
      reviewSnackID: event.target.id
    })
  }
  editReviewClick = (event) => {
    fetch(`http://localhost:3000/reviews/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          review: [response],
          rating: response.rating,
          title: response.title,
          reviewText: response.text,
          reviewInputted: true,
        })
      })
  }
  editReview = (event) => {
    if (this.state.reviewInputted === false) {
      alert('Please Fill Out All Fields')
    }
    else if (this.state.rating > 5) {
      alert('Ratings must be 1-5')
    }
    else {
      var updatedReview = {
        title: this.state.title,
        text: this.state.reviewText,
        rating: this.state.rating,
        snack_id: this.state.reviewSnackID,
      }
      fetch(`http://localhost:3000/reviews/${event.target.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReview)
      }).then(response => response.json())
        .then(() => this.loadReviews()).then(() => {
          this.setState({
            reviewInputted: false,
            rating: 0,
            title: '',
            reviewText: '',
            review: []
          })
        })
    }
  }
  loadReviews = () => {
    fetch('http://localhost:3000/reviews')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          reviews: response
        })
      })
  }
  loadSnacks = () => {
    fetch('http://localhost:3000/snacks')
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
        <header className='row col-12'>
          <img className='col-5 snacksLogo' alt='snacks logo' src={snacksLogo}></img>
          <div className='userHeader col-7'>
            <p className='userLabel'><b>User:</b></p>
            <p className='userName'><b>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</b></p>
          </div>
        </header>
        <div className='center'>
          <Route path='/' exact render={() => (<Login existingUser={this.existingUser} addUser={this.addUser} signUpClick={this.signUpClick} existingClick={this.existingClick} handleInput={this.handleInput} {...this.state} />)} />
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