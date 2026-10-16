import React, { useState, useEffect } from 'react';
import { CheckCircle2, Send, Building2, GraduationCap, Microscope, Rocket, Loader2, AlertCircle } from 'lucide-react';

export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzf_pc_bme4a9INi5pPRtT8Ao9qKkYQfbz50_f37LGfmdg6O14bPkk3pMQ35iAt_zdbgA/exec';

export interface NFApplicationFormProps {
  initialTrack?: string;
  isDark?: boolean;
  isModal?: boolean;
  onCancel?: () => void;
  onSuccess?: () => void;
}

export const NFApplicationForm: React.FC<NFApplicationFormProps> = ({
  initialTrack = 'student',
  isDark = false,
  isModal = false,
  onCancel,
  onSuccess,
}) => {
  const [selectedTrack, setSelectedTrack] = useState(initialTrack);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    projectTitle: '',
    domain: '',
    description: '',
    stage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTrack(initialTrack);
  }, [initialTrack]);

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      institution: '',
      projectTitle: '',
      domain: '',
      description: '',
      stage: '',
    });
  };

  const tracks = [
    {
      id: 'student',
      name: 'Student Startup Track',
      icon: GraduationCap,
    },
    {
      id: 'faculty',
      name: 'Faculty Startup Track',
      icon: Microscope,
    },
    {
      id: 'external',
      name: 'External / Solo Founder',
      icon: Rocket,
    },
    {
      id: 'institutional',
      name: 'Campus / Institutional Partner',
      icon: Building2,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const trackName = tracks.find((t) => t.id === selectedTrack)?.name || selectedTrack;

    const payload = {
      track: trackName,
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      organization: formData.institution.trim(),
      technology: formData.domain,
      stage: formData.stage,
      idea: formData.description.trim(),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned error status: ${response.status}`);
      }

      const data = await response.json().catch(() => null);
      if (data && data.success === false) {
        throw new Error(data.message || 'Failed to submit application. Please try again.');
      }

      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Error submitting application to Google Apps Script:', err);
      setErrorMessage(
        err.message || 'Unable to submit your application. Please check your network connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 sm:py-10 space-y-4">
        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Application Submitted Successfully
        </h3>
        <p className="max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Thank you for applying to NF Venture Studio (Naree Care Foundation). Our review committee will evaluate your submission and contact you within 48 business hours.
        </p>
        <div
          className={`p-4 rounded-xl border max-w-sm mx-auto text-left text-xs space-y-1.5 ${
            isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-[#DCE3EC] text-slate-700'
          }`}
        >
          <p><span className="font-semibold text-slate-900 dark:text-white">Applicant:</span> {formData.fullName || 'Innovator'}</p>
          <p><span className="font-semibold text-slate-900 dark:text-white">Track:</span> {tracks.find((t) => t.id === selectedTrack)?.name}</p>
          <p><span className="font-semibold text-slate-900 dark:text-white">Helpline:</span> +91 8379879846</p>
        </div>
        <div>
          {isModal ? (
            <button
              onClick={() => {
                handleReset();
                if (onCancel) onCancel();
              }}
              className="mt-4 px-6 py-2.5 bg-[#123B73] hover:bg-[#0B1F3A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Done
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#123B73] hover:bg-[#0B1F3A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Submit Another Application
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {errorMessage && (
        <div
          className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
            isDark
              ? 'bg-rose-950/50 border-rose-800 text-rose-300'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Submission Failed</p>
            <p className="opacity-90 mt-0.5">{errorMessage}</p>
          </div>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
            aria-label="Dismiss error"
          >
            ×
          </button>
        </div>
      )}

      {/* Track Selection */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Select Your Incubation Track *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tracks.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedTrack === t.id;
            return (
              <button
                type="button"
                key={t.id}
                disabled={isSubmitting}
                onClick={() => setSelectedTrack(t.id)}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-slate-800 border-sky-400 text-white font-semibold ring-1 ring-sky-400'
                      : 'bg-[#EAF1F9] border-[#123B73] text-[#123B73] font-semibold ring-1 ring-[#123B73]'
                    : isDark
                      ? 'border-slate-800 text-slate-300 bg-slate-900/60 hover:border-slate-700'
                      : 'border-[#DCE3EC] text-slate-700 bg-slate-50/70 hover:border-slate-300'
                } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div
                  className={`p-1.5 rounded-lg ${
                    isSelected
                      ? isDark
                        ? 'bg-slate-700 text-sky-400'
                        : 'bg-white text-[#123B73] shadow-xs'
                      : isDark
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-200/80 text-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs">{t.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Full Name *
          </label>
          <input
            type="text"
            required
            disabled={isSubmitting}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Dr. / Prof. / Mr. / Ms. Name"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                : 'bg-white border-[#DCE3EC] text-slate-900 placeholder-slate-400'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Email Address *
          </label>
          <input
            type="email"
            required
            disabled={isSubmitting}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="innovator@example.com"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                : 'bg-white border-[#DCE3EC] text-slate-900 placeholder-slate-400'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Contact Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            disabled={isSubmitting}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9876543210"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                : 'bg-white border-[#DCE3EC] text-slate-900 placeholder-slate-400'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            University / College / Organization *
          </label>
          <input
            type="text"
            required
            disabled={isSubmitting}
            value={formData.institution}
            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
            placeholder="e.g. Pune University / Institution"
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                : 'bg-white border-[#DCE3EC] text-slate-900 placeholder-slate-400'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Technology Domain *
          </label>
          <select
            required
            disabled={isSubmitting}
            value={formData.domain}
            onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white'
                : 'bg-white border-[#DCE3EC] text-slate-900'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <option value="">Select Domain</option>
            <option value="AI">AI &amp; Machine Learning</option>
            <option value="IoT">IoT &amp; Embedded Systems</option>
            <option value="Robotics">Robotics &amp; Automation</option>
            <option value="Electronics">Electronics &amp; Hardware</option>
            <option value="DeepTech">Deep-Tech Academic IP Translation</option>
            <option value="CampusHub">Campus Innovation Hub / Institutional</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
            Current Stage *
          </label>
          <select
            required
            disabled={isSubmitting}
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
            className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-white'
                : 'bg-white border-[#DCE3EC] text-slate-900'
            } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            <option value="">Select Current Stage</option>
            <option value="Ideation">Ideation / Conceptual Phase</option>
            <option value="Prototype">Laboratory Prototype / PoC</option>
            <option value="Patented">Patent Filed / Academic Research</option>
            <option value="MVP">MVP Ready (Validation Stage)</option>
            <option value="Scaling">Commercialization &amp; Scaling</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
          Brief Idea / Project Overview
        </label>
        <textarea
          rows={3}
          disabled={isSubmitting}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Summarize your innovation, core problem solved, and expected studio support..."
          className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors focus:outline-hidden focus:border-[#123B73] focus:ring-1 focus:ring-[#123B73] resize-none ${
            isDark
              ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
              : 'bg-white border-[#DCE3EC] text-slate-900 placeholder-slate-400'
          } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
        />
      </div>

      {/* Submit footer */}
      <div
        className={`pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}
      >
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          Helpline: <a href="tel:8379879846" className="font-semibold text-slate-800 dark:text-slate-200 hover:underline">8379879846</a>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {isModal && onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer border ${
                isDark
                  ? 'text-slate-300 bg-slate-800 border-slate-700 hover:bg-slate-700'
                  : 'text-slate-700 bg-slate-100 border-slate-200 hover:bg-slate-200'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#123B73] hover:bg-[#0B1F3A] rounded-xl shadow-xs transition-all cursor-pointer text-center ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Application</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
