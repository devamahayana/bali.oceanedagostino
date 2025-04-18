'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState<{message: string, isError: boolean} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('https://bali.oceanedagostino.com/contact-api.php', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Gagal mengirim pesan');
      }

      setStatus({ message: data.message, isError: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan';
      setStatus({ message: errorMessage, isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nama"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div>
        <textarea
          placeholder="Pesan"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`px-4 py-2 rounded text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
      
      {status && (
        <p className={`p-2 rounded ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}