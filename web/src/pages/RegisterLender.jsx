import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

const lenderSchema = z.object({
  businessName: z.string().min(2, 'Business name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number').max(20),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

export default function RegisterLender() {
  const [serverMessage, setServerMessage] = useState(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(lenderSchema),
    mode: 'onTouched'
  })

  async function onSubmit(values) {
    setServerMessage(null)
    await new Promise((r) => setTimeout(r, 900))
    setServerMessage({ type: 'success', text: 'Lender registered (mock). Backend integration coming soon.' })
  }

  return (
    <main className="landing">
      <div className="container">
        <header className="brand" style={{ marginBottom: 20 }}>
          <div className="logo-circle">R</div>
          <div>
            <h1 className="title">Register as Lender</h1>
            <p className="subtitle">List your items and manage rentals.</p>
          </div>
        </header>

        <form className="form-card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid-2">
            <div className="form-field">
              <label className="form-label" htmlFor="businessName">Business name</label>
              <input id="businessName" className="input" placeholder="Acme Rentals" {...register('businessName')} />
              {errors.businessName && <div className="error">{errors.businessName.message}</div>}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contactName">Contact name</label>
              <input id="contactName" className="input" placeholder="Jane Doe" {...register('contactName')} />
              {errors.contactName && <div className="error">{errors.contactName.message}</div>}
            </div>
          </div>

          <div className="grid-2">
            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="input" placeholder="you@business.com" {...register('email')} />
              {errors.email && <div className="error">{errors.email.message}</div>}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input id="phone" type="tel" className="input" placeholder="+1 555 123 4567" {...register('phone')} />
              {errors.phone && <div className="error">{errors.phone.message}</div>}
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="input" placeholder="Create a strong password" {...register('password')} />
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>

          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </button>

          {serverMessage && (
            <div className={`banner ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="form-footnote">
            <span>Already a Lender?, </span>
            <Link to="/lender/login" className="link">Log-in</Link>
          </div>
        </form>
      </div>
    </main>
  )
}


