import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Copy, Download, Loader, CheckCircle, AlertCircle } from 'lucide-react';

type ConfigType = 'v2ray' | 'npv' | 'ehi';
type Mode = 'fast' | 'stable';
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Generator() {
  const [configType, setConfigType] = useState<ConfigType>('v2ray');
  const [server, setServer] = useState('');
  const [mode, setMode] = useState<Mode>('fast');
  const [status, setStatus] = useState<Status>('idle');
  const [generatedConfig, setGeneratedConfig] = useState('');
  const [copied, setCopied] = useState(false);

  const servers = [
    { id: 'us-east', name: 'United States - East (New York)' },
    { id: 'us-west', name: 'United States - West (Los Angeles)' },
    { id: 'uk-london', name: 'United Kingdom (London)' },
    { id: 'de-frankfurt', name: 'Germany (Frankfurt)' },
    { id: 'sg-singapore', name: 'Singapore' },
    { id: 'jp-tokyo', name: 'Japan (Tokyo)' },
    { id: 'au-sydney', name: 'Australia (Sydney)' },
    { id: 'nl-amsterdam', name: 'Netherlands (Amsterdam)' },
  ];

  const generateConfig = () => {
    if (!server) {
      setStatus('error');
      setGeneratedConfig('Please select a server location');
      return;
    }

    setStatus('loading');
    
    // Simulate generation delay
    setTimeout(() => {
      const selectedServer = servers.find(s => s.id === server);
      let config = '';

      switch (configType) {
        case 'v2ray':
          config = `{
  "v": "2",
  "ps": "${selectedServer?.name} - ${mode.toUpperCase()}",
  "add": "${server}.vpnconfig.net",
  "port": "443",
  "id": "a8c${Math.random().toString(36).substring(2, 15)}",
  "aid": "0",
  "net": "ws",
  "type": "none",
  "host": "${server}.vpnconfig.net",
  "path": "/vpn",
  "tls": "tls",
  "sni": "${server}.vpnconfig.net",
  "alpn": "h2,http/1.1",
  "mode": "${mode}"
}`;
          break;
        case 'npv':
          config = `npv://config?server=${server}.vpnconfig.net&port=443&uuid=npv${Math.random().toString(36).substring(2, 15)}&security=tls&encryption=aes-256-gcm&mode=${mode}&name=${encodeURIComponent(selectedServer?.name || '')}`;
          break;
        case 'ehi':
          config = `ehi://encrypt?host=${server}.vpnconfig.net:443&key=ehi${Math.random().toString(36).substring(2, 15)}&protocol=tls1.3&cipher=chacha20-poly1305&mode=${mode}&region=${encodeURIComponent(selectedServer?.name || '')}`;
          break;
      }

      setGeneratedConfig(config);
      setStatus('success');
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadConfig = () => {
    const blob = new Blob([generatedConfig], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vpn-config-${configType}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Generator</h1>
          <p className="text-gray-400 text-center mb-12">
            Configure and generate your VPN connection settings
          </p>

          {/* Form Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 mb-6">
            <div className="space-y-6">
              {/* Config Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Config Type</label>
                <select
                  value={configType}
                  onChange={(e) => setConfigType(e.target.value as ConfigType)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="v2ray">V2Ray</option>
                  <option value="npv">NPV</option>
                  <option value="ehi">EHI</option>
                </select>
              </div>

              {/* Server Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Server Location</label>
                <select
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a server...</option>
                  {servers.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Mode</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode('fast')}
                    className={`flex-1 py-3 rounded-lg transition-all ${
                      mode === 'fast'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-900 text-gray-400 border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    Fast
                  </button>
                  <button
                    onClick={() => setMode('stable')}
                    className={`flex-1 py-3 rounded-lg transition-all ${
                      mode === 'stable'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-900 text-gray-400 border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    Stable
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                variant="primary" 
                onClick={generateConfig}
                className="w-full"
              >
                Generate
              </Button>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
            <h2 className="font-semibold mb-4">Generated Configuration</h2>
            
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 min-h-[200px] relative">
              {status === 'idle' && (
                <div className="flex items-center justify-center h-[168px] text-gray-500">
                  Select options above and click Generate
                </div>
              )}

              {status === 'loading' && (
                <div className="flex flex-col items-center justify-center h-[168px] text-gray-400">
                  <Loader className="animate-spin mb-2" size={32} />
                  <span>Generating configuration...</span>
                </div>
              )}

              {status === 'success' && (
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-green-400 text-sm">Configuration generated successfully!</span>
                  </div>
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap break-all font-mono">
                    {generatedConfig}
                  </pre>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-2 h-[168px] items-center justify-center">
                  <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                  <span className="text-red-400">{generatedConfig}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyToClipboard}
                disabled={status !== 'success'}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed rounded-lg transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle size={18} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={downloadConfig}
                disabled={status !== 'success'}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed rounded-lg transition-all"
              >
                <Download size={18} />
                Download
              </button>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-200">
                <strong>Security Note:</strong> Keep your configuration credentials secure and do not share them publicly. For best security, regenerate configurations periodically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
