import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreeVPN() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free VPN Plan</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started with our free tier and enjoy secure VPN configurations at no cost
            </p>
          </div>

          {/* Plan Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Access to all server locations worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Support for V2Ray, NPV, and EHI protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Unlimited configuration generations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Basic encryption and security protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span>Community support via Discord and Telegram</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Limitations</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span>Speed limited to 50 Mbps per connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span>1 simultaneous connection per account</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span>No dedicated IP addresses</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span>No priority customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span>Occasional server availability based on capacity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl">
                  🪟
                </div>
                <p className="font-medium">Windows</p>
                <p className="text-sm text-gray-400">Win 10, 11</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl">
                  🍎
                </div>
                <p className="font-medium">macOS</p>
                <p className="text-sm text-gray-400">10.15+</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl">
                  🐧
                </div>
                <p className="font-medium">Linux</p>
                <p className="text-sm text-gray-400">All Distros</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl">
                  📱
                </div>
                <p className="font-medium">Mobile</p>
                <p className="text-sm text-gray-400">iOS & Android</p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Free vs Paid Plans</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">Free</th>
                      <th className="px-6 py-4 text-center bg-blue-500/10">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-6 py-4">Server Locations</td>
                      <td className="px-6 py-4 text-center">8 locations</td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">50+ locations</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Connection Speed</td>
                      <td className="px-6 py-4 text-center">Up to 50 Mbps</td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Simultaneous Connections</td>
                      <td className="px-6 py-4 text-center">1 device</td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">5 devices</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Dedicated IP</td>
                      <td className="px-6 py-4 text-center">
                        <X className="inline text-red-400" size={20} />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">
                        <Check className="inline text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Priority Support</td>
                      <td className="px-6 py-4 text-center">
                        <X className="inline text-red-400" size={20} />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">
                        <Check className="inline text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Ad Blocking</td>
                      <td className="px-6 py-4 text-center">
                        <X className="inline text-red-400" size={20} />
                      </td>
                      <td className="px-6 py-4 text-center bg-blue-500/5">
                        <Check className="inline text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Price</td>
                      <td className="px-6 py-4 text-center font-bold text-green-400">$0/month</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-400 bg-blue-500/5">$9.99/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-6">
              Generate your first VPN configuration in seconds
            </p>
            <Link to="/generator">
              <Button variant="primary">Start Generator</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
