import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 mb-12">Last updated: December 27, 2025</p>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-300 mb-4">
                  Welcome to VPN Configuration Generator ("we," "our," or "us"). By accessing or using our service, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our service.
                </p>
                <p className="text-gray-300">
                  These terms apply to all users of the service, including both free and premium plan subscribers.
                </p>
              </div>

              {/* Service Description */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <p className="text-gray-300 mb-4">
                  VPN Configuration Generator provides users with tools to generate VPN configuration files for various protocols including V2Ray, NPV, and EHI. Our service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Access to multiple server locations worldwide</li>
                  <li>Configuration file generation and download capabilities</li>
                  <li>Support for multiple VPN protocols</li>
                  <li>Free and premium service tiers</li>
                </ul>
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice.
                </p>
              </div>

              {/* User Responsibilities */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">By using our service, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Use the service only for lawful purposes and in accordance with these terms</li>
                  <li>Not use the service to engage in any illegal activities or violate any local, state, national, or international law</li>
                  <li>Not attempt to gain unauthorized access to any part of the service, servers, or networks</li>
                  <li>Not use the service to transmit malware, viruses, or any harmful code</li>
                  <li>Not share your account credentials with others</li>
                  <li>Keep your configuration files secure and not distribute them to unauthorized users</li>
                  <li>Comply with all applicable laws regarding online conduct and acceptable content</li>
                </ul>
              </div>

              {/* Acceptable Use Policy */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-300 mb-4">
                  You may not use our service to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Engage in copyright infringement or intellectual property violations</li>
                  <li>Distribute spam or unsolicited communications</li>
                  <li>Conduct DDoS attacks or other harmful network activities</li>
                  <li>Access or attempt to access restricted areas of the service</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </div>

              {/* Privacy & Data Collection */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">5. Privacy & Data Collection</h2>
                <p className="text-gray-300 mb-4">
                  We are committed to protecting your privacy. Our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Does not log your browsing activity or connection data</li>
                  <li>Collects minimal information necessary for service operation</li>
                  <li>Does not sell or share your personal data with third parties</li>
                  <li>Uses industry-standard encryption to protect your data</li>
                </ul>
                <p className="text-gray-300">
                  For complete details, please refer to our Privacy Policy.
                </p>
              </div>

              {/* Free vs Premium Services */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">6. Free vs Premium Services</h2>
                <p className="text-gray-300 mb-4">
                  Our free tier provides basic access to our configuration generator with certain limitations. Premium plans offer enhanced features including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Unlimited connection speeds</li>
                  <li>Multiple simultaneous device connections</li>
                  <li>Access to additional server locations</li>
                  <li>Priority customer support</li>
                  <li>Dedicated IP addresses</li>
                </ul>
                <p className="text-gray-300">
                  Premium subscriptions are billed monthly or annually and can be cancelled at any time. Refunds are provided in accordance with our refund policy.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  Our service is provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  <li>Uninterrupted or error-free service</li>
                  <li>Complete security or privacy (no service can guarantee 100% security)</li>
                  <li>Specific connection speeds or performance levels</li>
                  <li>Availability of specific server locations at all times</li>
                </ul>
                <p className="text-gray-300">
                  We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the service.
                </p>
              </div>

              {/* Termination */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-gray-300">
                  We reserve the right to suspend or terminate your access to the service at any time, with or without cause, and with or without notice. Reasons for termination may include violation of these terms, fraudulent activity, or abuse of the service. Upon termination, your right to use the service will immediately cease.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these Terms & Conditions at any time. We will notify users of significant changes via email or through our website. Continued use of the service after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
                </p>
              </div>

              {/* Governing Law */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms & Conditions shall be governed by and construed in accordance with applicable international laws. Any disputes arising from these terms or use of the service shall be resolved through binding arbitration, except where prohibited by law.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Email:</strong> support@vpnconfig.net</li>
                  <li><strong>Telegram:</strong> @vpnconfig_support</li>
                  <li><strong>Discord:</strong> discord.gg/vpnconfig</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
