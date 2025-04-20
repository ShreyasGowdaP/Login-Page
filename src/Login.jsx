import { useState } from 'react'
import { supabase } from './supabaseClient'
import styles from './login.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', isError: false })

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', isError: false })
    
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      setMessage({ text: 'Logged in successfully!', isError: false })
    } catch (error) {
      setMessage({ text: error.message, isError: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Tea Master</h1>
          
          <form className={styles.form} onSubmit={handleAuth}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            {message.text && (
              <div className={`${styles.message} ${message.isError ? styles.error : styles.success}`}>
                {message.text}
              </div>
            )}
            
            <button 
              type="submit" 
              className={styles.button}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
