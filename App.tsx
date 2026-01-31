
import React from 'react';
import TTSSection from './components/TTSSection';
import ScriptToSpeech from './components/ScriptToSpeech';
import CVForm from './components/CVForm';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex text-sm">لاگ ان</Button>
            <Button className="text-sm">شروع کریں</Button>
          </div>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-6 items-center urdu-font text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">ہم سے رابطہ کریں</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">قیمتیں</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">ٹیمپلیٹس</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-bold text-blue-600">ہوم</li>
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tighter">CareerAI</span>
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="text-white h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-right order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-black urdu-font text-slate-900 leading-tight mb-6">
              پروفیشنل CV اب <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">منٹوں میں</span>
            </h1>
            <p className="text-xl text-slate-600 urdu-font leading-relaxed mb-8 max-w-xl ml-auto">
              جدید ٹیمپلیٹس، ATS فرینڈلی فارمیٹ اور AI کی طاقت سے اپنا مستقبل سنواریں۔ آج ہی اپنا پروفیشنل CV بنوائیں اور خوابوں کی نوکری حاصل کریں۔
            </p>
            <div className="flex justify-end gap-4">
              <Button variant="secondary" className="px-8 py-4 text-lg urdu-font">ٹیمپلیٹس دیکھیں</Button>
              <Button variant="primary" className="px-8 py-4 text-lg urdu-font shadow-blue-200 shadow-2xl">ابھی شروع کریں</Button>
            </div>
            
            <div className="mt-12 flex justify-end gap-8 border-r-4 border-blue-500 pr-6">
              <div>
                <span className="block text-3xl font-bold text-slate-900">10k+</span>
                <span className="text-slate-500 urdu-font">کامیاب نوکریاں</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-slate-900">98%</span>
                <span className="text-slate-500 urdu-font">ATS اسکور</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-slate-900">24/7</span>
                <span className="text-slate-500 urdu-font">سپورٹ</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/career/800/1000" 
              alt="Professional Resume Mockup" 
              className="relative rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </header>

      {/* TTS Interactive Feature Section */}
      <TTSSection />

      {/* Script to Speech Converter Section */}
      <ScriptToSpeech />

      {/* Main Form Section */}
      <main className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold urdu-font text-slate-900 mb-4">اپنا CV ڈیزائن کریں</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            <div className="lg:w-1/3 space-y-6 text-right">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 urdu-font mb-2">آپ کی سیکیورٹی اہم ہے</h4>
                <p className="text-blue-800 text-sm urdu-font">آپ کا ڈیٹا مکمل طور پر محفوظ ہے۔ ہم اسے کسی تیسرے فریق کے ساتھ شیئر نہیں کرتے۔</p>
              </div>
              <ul className="space-y-4 urdu-font text-slate-600">
                <li className="flex items-center justify-end gap-2">
                  <span>تیز ترین پروسیسنگ</span>
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>ATS تصدیق شدہ ٹیمپلیٹس</span>
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>پی ڈی ایف میں ڈاؤن لوڈ کریں</span>
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                </li>
              </ul>
            </div>
            <CVForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
            <div className="md:col-span-2">
              <div className="flex items-center justify-end gap-2 mb-6">
                <span className="text-3xl font-black tracking-tighter">CareerAI</span>
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="text-white h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-slate-400 urdu-font max-w-md ml-auto leading-loose">
                نوکری پہلے CV کو ملتی ہے، پھر انسان کو۔ آج ہی اپنا پروفیشنل CV بنوائیں اور اپنے کیریئر کو وہ آغاز دیں جس کا وہ حق دار ہے۔
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 urdu-font">لنکس</h4>
              <ul className="space-y-4 text-slate-400 urdu-font">
                <li className="hover:text-white cursor-pointer transition-colors">ٹیمپلیٹس</li>
                <li className="hover:text-white cursor-pointer transition-colors">بلاگ</li>
                <li className="hover:text-white cursor-pointer transition-colors">قیمتیں</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 urdu-font">سپورٹ</h4>
              <ul className="space-y-4 text-slate-400 urdu-font">
                <li className="hover:text-white cursor-pointer transition-colors">ہم سے رابطہ کریں</li>
                <li className="hover:text-white cursor-pointer transition-colors">پرائیویسی پالیسی</li>
                <li className="hover:text-white cursor-pointer transition-colors">شرائط و ضوابط</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 urdu-font">
            &copy; 2024 CareerAI. تمام حقوق محفوظ ہیں۔
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
