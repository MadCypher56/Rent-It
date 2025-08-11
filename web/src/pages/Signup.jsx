import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import '../App.css' // Import App.css for shared styles and animations

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match'
})

export default function Signup() {
  const [serverMessage, setServerMessage] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onTouched'
  })

  async function onSubmit(values) {
    setServerMessage(null)
    await new Promise((r) => setTimeout(r, 900))
    setServerMessage({ type: 'success', text: 'Account created (mock). Backend integration coming soon.' })
  }

  return (
    <div className="signup-container fade-in">
      <div className="signup-card slide-down">
        <header className="signup-header">
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join Rent-It and start exploring items.</p>
        </header>

        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" placeholder="John" {...register('firstName')} className="form-input" />
              {errors.firstName && <div className="error-message">{errors.firstName.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" placeholder="Doe" {...register('lastName')} className="form-input" />
              {errors.lastName && <div className="error-message">{errors.lastName.message}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" {...register('email')} className="form-input" />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" {...register('password')} className="form-input" />
              {errors.password && <div className="error-message">{errors.password.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input id="confirmPassword" type="password" placeholder="Repeat password" {...register('confirmPassword')} className="form-input" />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword.message}</div>}
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="signup-btn primary-btn">
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </button>

          {serverMessage && (
            <div className={`server-message ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="signup-footer-links">
            <span>Are you a lender? </span>
            <Link to="/register-lender" className="link">Register here</Link>
            <span> or </span>
            <Link to="/login" className="link">log in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}