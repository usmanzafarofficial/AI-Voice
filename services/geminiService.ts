
import { GoogleGenAI, Modality } from "@google/genai";
import { decode, decodeAudioData, pcmToWav } from "../utils/audioUtils";

const API_KEY = process.env.API_KEY || "";

async function getRawSpeech(text: string, voiceName: string = 'Kore') {
  if (!API_KEY) throw new Error("API Key is missing");
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: text }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: voiceName },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64Audio) throw new Error("No audio data received from Gemini");
  
  return decode(base64Audio);
}

export async function generateSpeech(text: string, voiceName: string = 'Kore'): Promise<void> {
  try {
    const pcmBytes = await getRawSpeech(text, voiceName);
    const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const audioBuffer = await decodeAudioData(pcmBytes, outputAudioContext, 24000, 1);

    const source = outputAudioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(outputAudioContext.destination);
    source.start();
  } catch (error) {
    console.error("Error generating speech:", error);
  }
}

export async function downloadSpeech(text: string, voiceName: string = 'Kore', filename: string = "urdu-narration.wav"): Promise<void> {
  try {
    const pcmBytes = await getRawSpeech(text, voiceName);
    const wavBlob = pcmToWav(pcmBytes, 24000);
    
    const url = URL.createObjectURL(wavBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading speech:", error);
  }
}
