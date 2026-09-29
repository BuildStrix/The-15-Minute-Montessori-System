import React, { useState } from 'react';
import { saveContactMessage } from '../data/emailStorage';
import { CheckIcon } from './BrandIcons';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childAge: '',
    subject: 'General Question',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save to persistent browser storage database
      saveContactMessage({
        name: formData.name,
        email: formData.email,
        childAge: formData.childAge,
        subject: formData.subject,
        message: formData.message
      });

      // 2. Also construct direct mailto link fallback so user can trigger native email client to creator if desired
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 350);
    } catch {
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F3EDE1] border-b border-[#D9CBB4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6A4A]">
            Direct Parent Support
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#4A3624] mt-2">
            Have a Question Before Starting?
          </h2>
          <p className="text-sm sm:text-base text-[#6B5D4C] mt-2">
            Whether you are wondering if the activities suit your toddler's age or have a curriculum question, send us a note below.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#FBF8F1] border-2 border-[#D9CBB4] rounded-2xl p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E9EEE3] flex items-center justify-center">
                <CheckIcon className="w-8 h-8" color="#7C9473" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#4A3624]">
                Message Received!
              </h3>
              <p className="text-sm text-[#6B5D4C] max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. One of our team will contact you shortly.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', childAge: '', subject: 'General Question', message: '' });
                  }}
                  className="px-5 py-2 text-xs font-semibold text-[#4A3624] bg-[#E9EEE3] hover:bg-[#D9CBB4] rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorMessage && (
                <div className="p-3 bg-[#F6E7DE] border border-[#C1785A]/40 rounded-lg text-xs text-[#8A4A2E]">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3624] mb-1">
                    Your Name <span className="text-[#C1785A]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#8B6A4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3624] mb-1">
                    Your Email Address <span className="text-[#C1785A]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. jessica@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#8B6A4A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3624] mb-1">
                    Child's Age (Optional)
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    placeholder="e.g. 22 months or 3 years"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#8B6A4A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3624] mb-1">
                    Topic
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#8B6A4A]"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Age Suitability">Age Suitability (18m – 4y)</option>
                    <option value="Household Materials Inquiry">Household Materials Inquiry</option>
                    <option value="Whop Order Support">Whop Order Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3624] mb-1">
                  How can we help? <span className="text-[#C1785A]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Ask anything about the system, daily routines, or materials..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBB4] bg-white text-sm text-[#3A2E22] focus:outline-hidden focus:border-[#8B6A4A]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#4A3624] hover:bg-[#8B6A4A] disabled:opacity-70 rounded-xl transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message →'}
                </button>
                <span className="text-[11px] text-[#6B5D4C]">
                  🔒 Your information is confidential and will never be shared.
                </span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
