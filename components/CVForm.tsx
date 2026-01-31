
import React, { useState } from 'react';
import { CVData } from '../types';
import Button from './Button';

const CVForm: React.FC = () => {
  const [data, setData] = useState<CVData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-right urdu-font">اپنی معلومات درج کریں</h3>
      
      <form className="space-y-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">مکمل نام</label>
            <input 
              name="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="مثلاً: محمد علی"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">ای میل</label>
            <input 
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="example@mail.com"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 text-right">مختصر خلاصہ (Professional Summary)</label>
          <textarea 
            name="summary"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="اپنے کیریئر کے بارے میں لکھیں..."
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">فون نمبر</label>
            <input 
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="0300-1234567"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 text-right">پتہ</label>
            <input 
              name="address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="لاہور، پاکستان"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button variant="primary" className="w-full py-4 text-xl urdu-font">
            CV تیار کریں
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CVForm;
