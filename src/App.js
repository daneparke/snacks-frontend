import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Snack from './components/Snack'
import Login from './components/Login'
import Edit from './components/Edit'
import Add from './components/Add'
import Admin from './components/Admin'
import './App.css';
import Header from './components/Header'
import NewSnack from './components/NewSnack'
import EditSnack from './components/EditSnack'



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
      snackName: '',
      snackPrice: 0,
      snackPerishable: null,
      snackDescription: '',
      snackUrl: '',
      reviewSnackID: undefined,
      showExistingInput: false,
      showSignUpInput: false,
      showFirstButtons: true,
      currentUser: [],
      invalidUser: false,
      userLoggedIn: false,
      adminSelected: false
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
      fetch('https://danes-snacks-backend.herokuapp.com/users')
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
  checkAdmin = (event) => {
    if (event.target.checked) {
      this.setState({
        adminSelected: true
      })
    } else {
      this.setState({
        adminSelected: false
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
      hashed_password: this.state.password,
      admin: this.state.adminSelected
    }
    fetch('https://danes-snacks-backend.herokuapp.com/users', {
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
          email: '',
          password: '',
          userLoggedIn: true
        })
      })
  }
  snackDetailsClick = (event) => {
    fetch(`https://danes-snacks-backend.herokuapp.com/snacks/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          oneSnack: [response]
        })
      })
  }
  deleteReview = (event) => {
    fetch(`https://danes-snacks-backend.herokuapp.com/reviews/${event.target.id}`, {
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
      fetch('https://danes-snacks-backend.herokuapp.com/reviews', {
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
    this.setState({
      reviewSnackID: event.target.name
    })
    fetch(`https://danes-snacks-backend.herokuapp.com/reviews/${event.target.id}`)
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
      fetch(`https://danes-snacks-backend.herokuapp.com/reviews/${event.target.id}`, {
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
  editSnackClick = (event) => {
    fetch(`https://danes-snacks-backend.herokuapp.com/snacks/${event.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          snackName: response.name,
          snackPrice: response.price,
          snackPerishable: response.is_perishable,
          snackDescription: response.description,
          snackUrl: response.image_url,
        })
      })
  }
  editSnack = (event) => {
    var updatedSnack = {
      name: this.state.snackName,
      description: this.state.snackDescription,
      is_perishable: this.state.snackPerishable,
      price: this.state.snackPrice,
      image_url: this.state.snackUrl
    }
    fetch(`https://danes-snacks-backend.herokuapp.com/snacks/${event.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSnack)
    }).then(response => response.json())
      .then(() => this.loadSnacks()).then(() => {
        this.setState({
          snackName: '',
          snackPrice: 0,
          snackPerishable: null,
          snackDescription: '',
          snackUrl: '',
        })
      })
  }
  addSnack = (event) => {
    var newSnack = {
      name: this.state.snackName,
      description: this.state.snackDescription,
      price: this.state.snackPrice,
      is_perishable: this.state.snackPerishable,
      image_url: this.state.snackUrl,
    }
    fetch('https://danes-snacks-backend.herokuapp.com/snacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSnack)
    })
      .then(response => response.json())
      .then(() => this.loadSnacks())
      .then(() => {
        this.setState({
          // reviewInputted: false,
          // rating: 0
        })
      })
  }
  deleteSnack = (event) => {
    fetch(`https://danes-snacks-backend.herokuapp.com/snacks/${event.target.id}`, {
      method: 'DELETE',
    }).then(() => this.loadSnacks())
  }
  loadReviews = () => {
    fetch('https://danes-snacks-backend.herokuapp.com/reviews')
      .then(result => result.json())
      .then((response) => {
        this.setState({
          reviews: response
        })
      })
  }
  loadSnacks = () => {
    fetch('https://danes-snacks-backend.herokuapp.com/snacks')
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
        <Header existingClick={this.existingClick} signUpClick={this.signUpClick}{...this.state} />
        <div className='container'>
          <Route path='/' exact render={() => (<Login checkAdmin={this.checkAdmin} existingUser={this.existingUser} addUser={this.addUser} signUpClick={this.signUpClick} existingClick={this.existingClick} handleInput={this.handleInput} {...this.state} />)} />
          <Route path='/admin' render={() => (<Admin editSnackClick={this.editSnackClick} deleteSnack={this.deleteSnack} {...this.state} />)} />
          <Route path='/home' render={() => (<Home snackDetailsClick={this.snackDetailsClick} {...this.state} />)} />
          <Route path='/snack/id/:id' render={(props) => (<Snack {...props} snackIDForReview={this.snackIDForReview} deleteReview={this.deleteReview} editReviewClick={this.editReviewClick} {...this.state} />)} />
          <Route path='/edit' render={() => (<Edit handleInput={this.handleInput} editReview={this.editReview} {...this.state} />)} />
          <Route path='/add' render={() => (<Add handleInput={this.handleInput} addReview={this.addReview} {...this.state} />)} />
          <Route path='/newsnack' render={() => (<NewSnack handleInput={this.handleInput} addSnack={this.addSnack} {...this.state} />)} />
          <Route path='/editsnack/id/:id' render={(props) => (<EditSnack {...props} editSnack={this.editSnack} handleInput={this.handleInput} {...this.state} />)} />
        </div>
      </>
    );
  }
}

export default App;