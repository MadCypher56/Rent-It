import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import '../App.css' // Import App.css for shared styles and animations

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

export default function Login() {
  const [serverMessage, setServerMessage] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  })

  async function onSubmit(values) {
    setServerMessage(null)
    await new Promise((r) => setTimeout(r, 600))
    // Temporary mock users
    // Consumer: email consumer@example.com / password: password123
    // Lender: handled on /lender/login for now
    if (values.email === 'consumer@example.com' && values.password === 'password123') {
      window.location.assign('/consumer-landing') // Changed to consumer-landing
      return
    }
    setServerMessage({ type: 'error', text: 'Invalid credentials for consumer. Try consumer@example.com / password123' })
  }

  return (
    <div className="login-container fade-in">
      <div className="login-card slide-down">
        <header className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Access your rentals and dashboard.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" {...register('email')} className="form-input" />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Your password" {...register('password')} className="form-input" />
            {errors.password && <div className="error-message">{errors.password.message}</div>}
          </div>

          <button type="submit" disabled={isSubmitting} className="login-btn primary-btn">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>

          {serverMessage && (
            <div className={`server-message ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="login-footer-links">
            <span>New here? </span>
            <Link to="/signup" className="link">Create a consumer account</Link>
            <span> or </span>
            <Link to="/register-lender" className="link">register as lender</Link>
          </div>
        </form>
      </div>
    </div>
  )
}