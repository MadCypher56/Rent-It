import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

const lenderLoginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

export default function LenderLogin() {
  const [serverMessage, setServerMessage] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(lenderLoginSchema),
    mode: 'onTouched'
  })

  async function onSubmit(values) {
    setServerMessage(null)
    await new Promise((r) => setTimeout(r, 600))
    // Temporary lender mock: lender@example.com / password: strongpass
    if (values.email === 'lender@example.com' && values.password === 'strongpass') {
      setServerMessage({ type: 'success', text: 'Lender logged in (mock). Dashboard coming soon.' })
      return
    }
    setServerMessage({ type: 'error', text: 'Invalid lender credentials. Try lender@example.com / strongpass' })
  }

  return (
    <main className="landing">
      <div className="container">
        <header className="brand" style={{ marginBottom: 20 }}>
          <div className="logo-circle">R</div>
          <div>
            <h1 className="title">Lender Log in</h1>
            <p className="subtitle">Access your lender dashboard and manage your listings.</p>
          </div>
        </header>

        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" placeholder="you@business.com" {...register('email')} />
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
            <span>Need to create an account? </span>
            <Link to="/register-lender" className="link">Register as Lender</Link>
          </div>
        </form>
      </div>
    </main>
  )
}


