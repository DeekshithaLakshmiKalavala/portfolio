import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { META } from '../data';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import styles from './Contact.module.css';

const MailIcon   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PinIcon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const LinkedIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2" fill="currentColor" stroke="none"/></svg>;

// ── Paste your EmailJS keys here ──
const SERVICE_ID  = 'service_ive9kny';   // ← your Service ID
const TEMPLATE_ID = 'template_n5w317o';  // ← your Template ID
const PUBLIC_KEY  = 'dFQTht5JHkxscStLn';   // ← your Public Key

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState('');
  const [sending, setSending] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('⚠️ Please fill in all fields.');
      return;
    }

    setSending(true);
    setStatus('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      );

      setStatus('✅ Message sent! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('❌ Something went wrong. Please try again or email me directly.');
    }

    setSending(false);
  };

  return (
    <section id="contact" className={styles.section}>
      <SectionHeader label="Say Hello" title="Let's Work Together" />
      <div className={styles.grid}>

        <FadeIn>
          <div>
            <p className={styles.desc}>
              Open to full-time roles in Software Engineering, Backend Development, Cloud, and DevOps.
              Feel free to reach out — I'd love to connect and explore how we can collaborate.
            </p>
            {[
              { Icon: MailIcon,   label: 'Email',    val: META.email },
              { Icon: PinIcon,    label: 'Location', val: META.location },
              { Icon: LinkedIcon, label: 'LinkedIn', val: 'kalavala-deekshitha' },
            ].map(({ Icon, label, val }) => (
              <div key={label} className={styles.item}>
                <div className={styles.ico}><Icon /></div>
                <div>
                  <p className={styles.itemLabel}>{label}</p>
                  <p className={styles.itemVal}>{val}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <form className={styles.form} onSubmit={onSubmit}>
            {[
              { label: 'Name',  name: 'name',  type: 'text',  placeholder: 'Your full name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.name} className={styles.group}>
                <label>{f.label}</label>
                <input {...f} value={form[f.name]} onChange={onChange} required />
              </div>
            ))}
            <div className={styles.group}>
              <label>Message</label>
              <textarea
                name="message" rows={5}
                placeholder="Tell me about your opportunity or project..."
                value={form.message} onChange={onChange} required
              />
            </div>
            <button className={styles.submit} type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </FadeIn>

      </div>
    </section>
  );
}