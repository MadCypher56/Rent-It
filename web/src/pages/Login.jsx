import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

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
      window.location.assign('/consumer')
      return
    }
    setServerMessage({ type: 'error', text: 'Invalid credentials for consumer. Try consumer@example.com / password123' })
  }

  return (
    <main className="landing">
      <div className="container">
        <header className="brand" style={{ marginBottom: 20 }}>
          <div className="logo-circle">R</div>
          <div>
            <h1 className="title">Log in</h1>
            <p className="subtitle">Welcome back. Access your rentals and dashboard.</p>
          </div>
        </header>

        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" placeholder="you@example.com" {...register('email')} />
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="input" placeholder="Your password" {...register('password')} />
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>

          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>

          {serverMessage && (
            <div className={`banner ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="form-footnote">
            <span>New here? </span>
            <Link to="/signup" className="link">Create a consumer account</Link>
            <span> or </span>
            <Link to="/register-lender" className="link">register as lender</Link>
          </div>
        </form>
      </div>
    </main>
  )
}


