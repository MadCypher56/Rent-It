import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom' // Import useNavigate
import '../App.css' // Import App.css for shared styles and animations

const lenderLoginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

export default function LenderLogin() {
  const [serverMessage, setServerMessage] = useState(null)
  const navigate = useNavigate() // Initialize useNavigate

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(lenderLoginSchema),
    mode: 'onTouched'
  })

  async function onSubmit(values) {
    setServerMessage(null)
    await new Promise((r) => setTimeout(r, 600))
    // Temporary lender mock: lender@example.com / password: strongpass
    if (values.email === 'lender@example.com' && values.password === 'strongpass') {
      setServerMessage({ type: 'success', text: 'Lender logged in (mock). Redirecting to dashboard...' })
      navigate('/lender/dashboard') // Redirect to dashboard
      return
    }
    setServerMessage({ type: 'error', text: 'Invalid lender credentials. Try lender@example.com / strongpass' })
  }

  return (
    <div className="lender-login-container fade-in">
      <div className="lender-login-card slide-down">
        <header className="lender-login-header">
          <h1 className="lender-login-title">Lender Log in</h1>
          <p className="lender-login-subtitle">Access your lender dashboard and manage your listings.</p>
        </header>

        <form className="lender-login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@business.com" {...register('email')} className="form-input" />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Your password" {...register('password')} className="form-input" />
            {errors.password && <div className="error-message">{errors.password.message}</div>}
          </div>

          <button type="submit" disabled={isSubmitting} className="lender-login-btn primary-btn">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>

          {serverMessage && (
            <div className={`server-message ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="lender-login-footer-links">
            <span>Need to create an account? </span>
            <Link to="/register-lender" className="link">Register as Lender</Link>
          </div>
        </form>
      </div>
    </div>
  )
}