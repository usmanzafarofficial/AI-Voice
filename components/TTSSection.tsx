
import React, { useState } from 'react';
import { generateSpeech, downloadSpeech } from '../services/geminiService';
import Button from './Button';

const TTSSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const urduText = `آج کے دور میں نوکری حاصل کرنا آسان نہیں رہا۔
ڈگری، اسکلز اور تجربہ ہونے کے باوجود ہزاروں لوگ ریجیکٹ ہو جاتے ہیں۔
کیا آپ جانتے ہیں اس کی سب سے بڑی وجہ کیا ہے؟
ایک کمزور CV۔

آپ کا CV صرف ایک کاغذ نہیں ہوتا،
یہ آپ کی پہچان، آپ کی قابلیت اور آپ کا پہلا تاثر ہوتا ہے۔
کمپنی آپ کو ملنے سے پہلے
آپ کا CV دیکھتی ہے، آپ کو نہیں۔

اگر آپ کا CV پروفیشنل نہیں،
اگر اس میں درست اسکلز اور صحیح فارمیٹ نہیں،
تو بہترین امیدوار ہونے کے باوجود
آپ کو انٹرویو کال نہیں ملتی۔

آج زیادہ تر کمپنیاں ATS سسٹم استعمال کرتی ہیں،
جو ہزاروں CVs میں سے صرف وہی CV منتخب کرتا ہے
جو درست Keywords اور اسٹرکچر پر بنا ہو۔

ہم آپ کے لیے بناتے ہیں
پروفیشنل، ATS-فرینڈلی اور جدید CV
جو ریکروٹر کی نظر میں فوراً نمایاں ہو۔

چاہے آپ فریش گریجویٹ ہوں،
جاب چینج کرنا چاہتے ہوں،
یا انٹرنیشنل جاب اپلائی کر رہے ہوں —
ایک مضبوط CV آپ کے لیے گیم چینجر ثابت ہو سکتا ہے۔

ایک اچھا CV آپ کو
زیادہ انٹرویو کالز،
بعد بہتر مواقع
اور ایک مضبوط کیریئر کی طرف لے جاتا ہے۔

یاد رکھیں،
نوکری پہلے CV کو ملتی ہے، پھر انسان کو۔

آج ہی اپنا پروفیشنل CV بنوائیں
اور اپنے کیریئر کو وہ آغاز دیں
جس کا وہ حق دار ہے۔

آپ کا مستقبل، ایک مضبوط CV سے شروع ہوتا ہے۔`;

  const handlePlay = async () => {
    setIsPlaying(true);
    await generateSpeech(urduText);
    setTimeout(() => setIsPlaying(false), 5000);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    await downloadSpeech(urduText);
    setIsDownloading(false);
  };

  return (
    <section id="why-cv" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold urdu-font text-right leading-tight">
                ایک طاقتور CV کی اہمیت
              </h2>
              <div className="bg-white/5 rounded-2xl p-6 text-right space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                <p className="urdu-font text-lg md:text-xl text-blue-100 whitespace-pre-line leading-loose">
                  {urduText}
                </p>
              </div>
              <div className="flex justify-end pt-4 gap-4">
                <Button 
                  onClick={handleDownload} 
                  isLoading={isDownloading}
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/20 scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span className="urdu-font">ڈاؤن لوڈ کریں</span>
                </Button>
                <Button 
                  onClick={handlePlay} 
                  isLoading={isPlaying}
                  className="bg-blue-500 hover:bg-blue-400 text-white border-none shadow-lg shadow-blue-500/50 scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  <span className="urdu-font">آواز سنیں</span>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default">
                <div className="text-blue-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold urdu-font text-right mb-2">پہلا تاثر</h3>
                <p className="text-gray-300 text-right text-sm leading-relaxed">آپ کا CV آپ کی پہچان ہے۔ کمپنی آپ کو ملنے سے پہلے آپ کا CV دیکھتی ہے۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default">
                <div className="text-green-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                </div>
                <h3 className="text-xl font-bold urdu-font text-right mb-2">ATS فرینڈلی</h3>
                <p className="text-gray-300 text-right text-sm leading-relaxed">زیادہ تر کمپنیاں خودکار سسٹمز استعمال کرتی ہیں۔ ہم آپ کا CV ان کے مطابق بناتے ہیں۔</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TTSSection;
