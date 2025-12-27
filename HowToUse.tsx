import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HowToUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Use</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started with our VPN configuration generator in three simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Open Generator</h3>
                <p className="text-blue-100">
                  Navigate to the Generator page from the main menu or click the "Start Generator" button on the homepage.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Select Server & Type</h3>
                <p className="text-purple-100">
                  Choose your preferred server location, configuration type (V2Ray/NPV/EHI), and connection mode (Fast or Stable).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Copy or Download</h3>
                <p className="text-green-100">
                  Click "Generate" to create your configuration, then copy it to clipboard or download as a file to import into your VPN app.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Instructions */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-20">
            <h2 className="text-2xl font-bold mb-6">Detailed Instructions</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Choosing the Right Protocol</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li><strong>V2Ray:</strong> Best for advanced users, highly customizable with strong encryption</li>
                  <li><strong>NPV:</strong> Optimized for speed, ideal for streaming and gaming</li>
                  <li><strong>EHI:</strong> Enhanced security protocol, recommended for maximum privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Selecting a Server Location</h3>
                <p className="text-gray-400 mb-2">
                  Choose a server close to your physical location for better speeds, or select a specific country to access geo-restricted content. Available locations include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>United States (East & West Coast)</li>
                  <li>United Kingdom</li>
                  <li>Germany</li>
                  <li>Singapore</li>
                  <li>Japan</li>
                  <li>Australia</li>
                  <li>Netherlands</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Connection Modes</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li><strong>Fast Mode:</strong> Prioritizes speed over stability, best for streaming and downloads</li>
                  <li><strong>Stable Mode:</strong> Prioritizes connection stability, ideal for video calls and browsing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Importing Configuration</h3>
                <p className="text-gray-400">
                  After generating your configuration, you'll need a compatible VPN client application. Popular choices include V2RayN (Windows), V2RayX (macOS), V2RayNG (Android), and Shadowrocket (iOS). Open your client app, look for "Import from clipboard" or "Import configuration file," and paste or select your downloaded config.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem
                question="Is the VPN configuration generator really free?"
                answer="Yes! Our basic configuration generator is completely free to use with no hidden costs. You can generate unlimited configurations and access all available server locations. Premium plans offer additional features like dedicated IPs and priority support."
              />
              <FAQItem
                question="Which VPN client apps are compatible with these configurations?"
                answer="Our configurations work with popular VPN clients including V2RayN, V2RayX, V2RayNG, Shadowrocket, Clash, and other clients that support the respective protocols. Each protocol (V2Ray, NPV, EHI) may require specific client software."
              />
              <FAQItem
                question="How often should I regenerate my configuration?"
                answer="For optimal security, we recommend regenerating your configuration every 30 days. However, you can continue using the same configuration as long as it remains functional. If you experience connection issues, try generating a new configuration."
              />
              <FAQItem
                question="Can I use the same configuration on multiple devices?"
                answer="With the free plan, each configuration is limited to one simultaneous connection. If you need to connect multiple devices at once, consider upgrading to our Premium plan which supports up to 5 simultaneous connections."
              />
              <FAQItem
                question="What should I do if my configuration stops working?"
                answer="If your configuration stops working, first try generating a new one. Server configurations may occasionally change for maintenance or optimization. If the issue persists, check our status page or contact support through our Discord or Telegram community channels."
              />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Create your first VPN configuration now and enjoy secure, private internet access.
            </p>
            <Link to="/generator">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all">
                Go to Generator
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
