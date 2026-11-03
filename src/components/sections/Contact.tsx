import { useEffect, useRef, useState } from 'react';
import { Check, Copy, CheckCircle2, AlertCircle, Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';
import { profile } from '../../data/content';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const formEnabled = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const channels = [
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedinHref, icon: Linkedin },
  { label: 'GitHub', value: profile.githubLabel, href: profile.githubHref, icon: Github },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
];

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = profile.emailHref;
    }
  };

  return (
    <button type="button" onClick={copy} className="btn-ghost h-12 px-5">
      {copied ? <Check size={16} className="text-primary" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  );
};

type Status = { type: 'success' | 'error'; message: string } | null;

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status) setStatus(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: 'error', message: 'Add your name and a message, then send again.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Enter an email address I can reply to, like name@company.com.' });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY! }
      );
      setStatus({ type: 'success', message: 'Message sent. I usually reply within a day.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: `The message didn't send. Email ${profile.email} directly instead.` });
    } finally {
      setSending(false);
    }
  };

  const field =
    'mt-1.5 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-ink placeholder:text-muted transition-colors focus:border-primary/60 focus:outline-none';

  return (
    <form onSubmit={submit} noValidate className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-soft">
          Name
          <input name="name" value={form.name} onChange={update} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm text-soft">
          Email
          <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm text-soft">
        Message
        <textarea name="message" rows={5} value={form.message} onChange={update} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} className="btn-primary h-12 px-6 disabled:opacity-60">
          <Send size={16} aria-hidden="true" />
          {sending ? 'Sending…' : 'Send message'}
        </button>
        {status && (
          <p
            role={status.type === 'error' ? 'alert' : 'status'}
            className={`inline-flex items-center gap-2 text-sm ${status.type === 'error' ? 'text-ink' : 'text-primary'}`}
          >
            {status.type === 'error' ? <AlertCircle size={16} aria-hidden="true" /> : <CheckCircle2 size={16} aria-hidden="true" />}
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
};

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
    <div className="container-site">
      <Reveal>
        <SpotlightCard className="overflow-hidden">
          <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
          <div className={`grid gap-12 p-7 sm:p-12 lg:p-16 ${formEnabled ? 'lg:grid-cols-2' : ''}`}>
            <div className={formEnabled ? '' : 'mx-auto max-w-2xl text-center'}>
              <p className="font-sans text-sm text-primary">
                <span className="text-muted">//</span> contact
              </p>
              <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.05]">
                Have a role in mind?
                <span className="block text-muted">Let’s talk.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-soft">
                I’m open to full stack and React Native roles. Email is the fastest way to reach me, and I usually reply within a day.
              </p>

              <div className={`mt-9 flex flex-wrap items-center gap-3 ${formEnabled ? '' : 'justify-center'}`}>
                <a href={profile.emailHref} className="btn-primary h-12 px-6">
                  <Mail size={17} aria-hidden="true" />
                  {profile.email}
                </a>
                <CopyEmail />
              </div>

              <ul className={`mt-10 flex flex-wrap gap-3 ${formEnabled ? '' : 'justify-center'}`}>
                {channels.map(({ label, value, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group inline-flex items-center gap-3 rounded-2xl border border-line bg-canvas py-2.5 pl-2.5 pr-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink/[0.05] text-soft transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">{label}</span>
                        <span className="block text-sm font-medium text-ink">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {formEnabled && <ContactForm />}
          </div>
        </SpotlightCard>
      </Reveal>
    </div>
  </section>
);

export default Contact;
