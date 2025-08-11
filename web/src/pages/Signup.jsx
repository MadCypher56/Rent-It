import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

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
    <main className="landing">
      <div className="container">
        <header className="brand" style={{ marginBottom: 20 }}>
          <div className="logo-circle">R</div>
          <div>
            <h1 className="title">Sign up</h1>
            <p className="subtitle">Create your consumer account to browse and book items.</p>
          </div>
        </header>

        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid-2">
            <div className="form-field">
              <label className="form-label" htmlFor="firstName">First name</label>
              <input id="firstName" className="input" placeholder="John" {...register('firstName')} />
              {errors.firstName && <div className="error">{errors.firstName.message}</div>}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="lastName">Last name</label>
              <input id="lastName" className="input" placeholder="Doe" {...register('lastName')} />
              {errors.lastName && <div className="error">{errors.lastName.message}</div>}
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" placeholder="you@example.com" {...register('email')} />
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>

          <div className="grid-2">
            <div className="form-field">
              <label className="form-label" htmlFor="password">Password</label>
              <input id="password" type="password" className="input" placeholder="Create a password" {...register('password')} />
              {errors.password && <div className="error">{errors.password.message}</div>}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
              <input id="confirmPassword" type="password" className="input" placeholder="Repeat password" {...register('confirmPassword')} />
              {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
            </div>
          </div>

          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </button>

          {serverMessage && (
            <div className={`banner ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="form-footnote">
            <span>Are you a lender? </span>
            <Link to="/register-lender" className="link">Register here</Link>
            <span> or </span>
            <Link to="/login" className="link">log in</Link>
          </div>
        </form>
      </div>
    </main>
  )
}


