import React from 'react'
import "/src/index.css"

export default function Login() {
    const [info, setInfo] = React.useState({
        email: '',
        password: ''
    })
    const [error, setError] = React.useState(null)

    function changeEmail(event) {
        const {value, name} = event.currentTarget
        setInfo(prevInfo => {return({...prevInfo, email: value})})
    }

    function changePassword(event) {
        const {value, name} = event.currentTarget
        setInfo(prevInfo => {return({...prevInfo, password: value})})
    }

    function handleSubmit(event) {
        console.log(info)
        event.preventDefault()

        const {email, password} = info

        if (!email || !password) {
            setError('Please enter a username and password.')
            console.log(error)
            return
        }

        const isAuthenticated = true
        if (isAuthenticated) {
            alert('Login successful!')
            console.log('Login successful')
        } else {
            setError('Invalid email or password.')
        }
    }

    return (
    <div className="bg-sky-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl text-center mb-6 text-sky-900">Welcome to GymKnight!</h2>
        <form onSubmit={handleSubmit}>
          <div className="email-field mb-4">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="email"
              placeholder="Email"
              value={info.email}
              onChange={changeEmail}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="password-field mb-6">
            <input
              type="password"
              id="password"
              name="password"
              aria-label="password"
              placeholder="Password"
              value={info.password}
              onChange={changePassword}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}