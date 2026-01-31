
import React, { useState } from 'react';
import { generateSpeech, downloadSpeech } from '../services/geminiService';
import Button from './Button';

const VOICES = [
  { id: 'Kore', name: 'کوری (Kore)', gender: 'Female' },
  { id: 'Puck', name: 'پک (Puck)', gender: 'Male' },
  { id: 'Charon', name: 'کیرون (Charon)', gender: 'Male' },
  { id: 'Fenrir', name: 'فینر (Fenrir)', gender: 'Male' },
  { id: 'Zephyr', name: 'زیفر (Zephyr)', gender: 'Female' },
];

const ScriptToSpeech: React.FC = () => {
  const [script, setScript] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('Kore');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePlay = async () => {
    if (!script.trim()) return;
    setIsPlaying(true);
    await generateSpeech(script, selectedVoice);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const handleDownload = async () => {
    if (!script.trim()) return;
    setIsDownloading(true);
    await downloadSpeech(script, selectedVoice, "my-script-voice.wav");
    setIsDownloading(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold urdu-font text-slate-900 mb-4">AI وائس اسٹوڈیو</h2>
            <p className="text-slate-600 urdu-font text-lg">اپنا اسکرپٹ لکھیں اور اسے جادوئی آواز میں بدلیں</p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-xl">
            <div className="space-y-6" dir="rtl">
              <div>
                <label className="block text-right urdu-font text-slate-700 text-lg font-bold mb-3">
                  اسکرپٹ یہاں پیسٹ کریں
                </label>
                <textarea
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  className="w-full h-48 p-5 text-right urdu-font text-xl border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none shadow-inner"
                  placeholder="مثلاً: خوش آمدید! ہم آپ کے کیریئر کو ایک نئی بلندی پر لے جانے کے لیے تیار ہیں۔"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                  <label className="block text-right urdu-font text-slate-700 text-lg font-bold mb-3">
                    آواز منتخب کریں
                  </label>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full p-4 urdu-font text-lg border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none appearance-none bg-white cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 1rem center', backgroundSize: '1.2em' }}
                  >
                    {VOICES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.gender})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleDownload}
                    isLoading={isDownloading}
                    variant="outline"
                    className="flex-1 py-4 text-lg urdu-font border-slate-200 text-slate-700 hover:bg-slate-100"
                    disabled={!script.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    ڈاؤن لوڈ
                  </Button>
                  <Button
                    onClick={handlePlay}
                    isLoading={isPlaying}
                    variant="primary"
                    className="flex-1 py-4 text-lg urdu-font bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200"
                    disabled={!script.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    آواز سنیں
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptToSpeech;
