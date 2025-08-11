import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import '../App.css' // Import App.css for shared styles and animations

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
    <div className="register-lender-container fade-in">
      <div className="register-lender-card slide-down">
        <header className="register-lender-header">
          <h1 className="register-lender-title">Register as Lender</h1>
          <p className="register-lender-subtitle">List your items and manage rentals.</p>
        </header>

        <form className="register-lender-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessName">Business name</label>
              <input id="businessName" placeholder="Acme Rentals" {...register('businessName')} className="form-input" />
              {errors.businessName && <div className="error-message">{errors.businessName.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="contactName">Contact name</label>
              <input id="contactName" placeholder="Jane Doe" {...register('contactName')} className="form-input" />
              {errors.contactName && <div className="error-message">{errors.contactName.message}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@business.com" {...register('email')} className="form-input" />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+1 555 123 4567" {...register('phone')} className="form-input" />
              {errors.phone && <div className="error-message">{errors.phone.message}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Create a strong password" {...register('password')} className="form-input" />
            {errors.password && <div className="error-message">{errors.password.message}</div>}
          </div>

          <button type="submit" disabled={isSubmitting} className="register-lender-btn primary-btn">
            {isSubmitting ? 'Creating account…' : 'Create account'}
          </button>

          {serverMessage && (
            <div className={`server-message ${serverMessage.type}`}>{serverMessage.text}</div>
          )}

          <div className="register-lender-footer-links">
            <span>Already a Lender?, </span>
            <Link to="/lender/login" className="link">Log-in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}