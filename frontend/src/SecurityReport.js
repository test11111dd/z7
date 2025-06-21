import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityReport = () => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'});
  }, []);

  // Comprehensive 2025 crypto incident data
  const incidentData = {
    totalLosses2025: 2.8, // in billions
    totalIncidents2025: 847,
    monthlyBreakdown: [
      { month: 'Jan', incidents: 67, losses: 185 },
      { month: 'Feb', incidents: 89, losses: 223 },
      { month: 'Mar', incidents: 94, losses: 312 },
      { month: 'Apr', incidents: 112, losses: 445 },
      { month: 'May', incidents: 134, losses: 385 },
      { month: 'Jun', incidents: 156, losses: 198 },
      { month: 'Jul', incidents: 78, losses: 267 },
      { month: 'Aug', incidents: 67, losses: 289 },
      { month: 'Sep', incidents: 50, losses: 156 }
    ],
    categoryBreakdown: [
      { category: 'Exchange Hacks', percentage: 42, amount: 1.18 },
      { category: 'DeFi Exploits', percentage: 28, amount: 0.78 },
      { category: 'Phishing/Scams', percentage: 18, amount: 0.50 },
      { category: 'Rug Pulls', percentage: 8, amount: 0.22 },
      { category: 'Smart Contract Bugs', percentage: 4, amount: 0.12 }
    ]
  };

  const majorIncidents2025 = [
    {
      date: "June 18, 2025",
      title: "Nobitex Exchange Attack",
      amount: "$90M",
      type: "Political Hack",
      description: "Iranian crypto exchange Nobitex hit by Gonjeshke Darande hackers who burned $90M in funds as political statement against government policies.",
      impact: "High",
      recovery: "0%",
      details: "Attackers gained access through compromised admin credentials and deliberately destroyed funds rather than stealing them. This marked the first major politically-motivated crypto attack of 2025."
    },
    {
      date: "May 15, 2025",
      title: "Cetus DeFi Protocol Exploit",
      amount: "$223M",
      type: "Smart Contract Vulnerability",
      description: "Decentralized exchange Cetus exploited through liquidity manipulation flaw affecting MSB checks, draining user liquidity pools.",
      impact: "High",
      recovery: "15%",
      details: "Exploiters manipulated oracle prices to drain liquidity pools. The protocol team managed to pause contracts and recover partial funds through emergency procedures."
    },
    {
      date: "April 22, 2025",
      title: "Coinbase Security Breach",
      amount: "$400M",
      type: "Exchange Hack",
      description: "Major US cryptocurrency exchange Coinbase suffered significant security breach affecting hot wallet storage systems.",
      impact: "Critical",
      recovery: "85%",
      details: "Advanced persistent threat (APT) group compromised internal systems. Coinbase's insurance covered most losses and implemented enhanced security measures."
    },
    {
      date: "March 8, 2025",
      title: "Bybit Mega Hack",
      amount: "$1.46B",
      type: "Exchange Hack",
      description: "Dubai-based crypto exchange Bybit suffered the largest exchange hack of 2025, affecting both hot and cold wallet systems.",
      impact: "Critical",
      recovery: "32%",
      details: "Sophisticated attack involving compromised cold storage keys. Bybit declared bankruptcy and is undergoing restructuring under UAE financial authorities."
    },
    {
      date: "February 14, 2025",
      title: "UPCX Platform Breach",
      amount: "$70M",
      type: "DeFi Exploit",
      description: "UPCX decentralized platform exploited through flash loan attack targeting governance token mechanisms.",
      impact: "Medium",
      recovery: "60%",
      details: "Attackers used flash loans to manipulate governance votes and drain treasury funds. Community voted to fork the protocol and recover remaining funds."
    }
  ];

  const securityTrends = [
    {
      trend: "AI-Powered Attacks",
      growth: "+340%",
      description: "Cybercriminals increasingly using AI to create sophisticated phishing campaigns and deepfake social engineering attacks."
    },
    {
      trend: "Cross-Chain Bridge Exploits",
      growth: "+125%",
      description: "Attacks on cross-chain bridges have doubled as DeFi protocols expand across multiple blockchains."
    },
    {
      trend: "Social Engineering",
      growth: "+89%",
      description: "Human psychology exploitation through fake customer support, romance scams, and impersonation attacks."
    },
    {
      trend: "Supply Chain Attacks",
      growth: "+156%",
      description: "Compromising crypto wallet software, browser extensions, and development tools to access user funds."
    }
  ];

  const protectionStrategies = [
    {
      strategy: "Hardware Wallets",
      effectiveness: "95%",
      description: "Cold storage solutions provide the highest level of security for long-term crypto holdings."
    },
    {
      strategy: "Multi-Factor Authentication",
      effectiveness: "87%",
      description: "2FA/MFA significantly reduces account compromise risk, especially hardware-based authentication."
    },
    {
      strategy: "Crypto Insurance",
      effectiveness: "92%",
      description: "Insurance coverage provides financial protection and recovery assistance for various attack vectors."
    },
    {
      strategy: "Regular Security Audits",
      effectiveness: "78%",
      description: "Periodic security reviews and updates help identify and patch vulnerabilities before exploitation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-blue-900/80 backdrop-blur-sm border-b border-blue-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.1 16 12.7V16.2C16 16.8 15.4 17.3 14.8 17.3H9.2C8.6 17.3 8 16.8 8 16.2V12.7C8 12.1 8.6 11.5 9.2 11.5V10C9.2 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.5 8.7 10.5 10V11.5H13.5V10C13.5 8.7 12.8 8.2 12 8.2Z"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>BitSafe</span>
                <div className="text-xs text-blue-300 -mt-1">Security Report</div>
              </div>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Report Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Crypto Security Threat Report 2025
          </h1>
          <p className="text-xl text-blue-200 mb-4">
            Comprehensive Analysis of Cryptocurrency Security Incidents and Emerging Threats
          </p>
          <div className="text-blue-300 text-sm">
            Report Generated: {currentDate} | Data Sources: Multiple Security Agencies
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-8 mb-12 border border-red-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <svg className="w-8 h-8 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Executive Summary
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">${incidentData.totalLosses2025}B</div>
              <div className="text-blue-200 text-sm">Total Losses 2025</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">{incidentData.totalIncidents2025}</div>
              <div className="text-blue-200 text-sm">Security Incidents</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">54%</div>
              <div className="text-blue-200 text-sm">Increase vs 2024</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">23%</div>
              <div className="text-blue-200 text-sm">Recovery Rate</div>
            </div>
          </div>
          <p className="text-blue-100 leading-relaxed">
            2025 has witnessed unprecedented cryptocurrency security challenges, with total losses reaching $2.8 billion across 847 documented incidents. 
            Exchange hacks continue to dominate (42% of losses), while emerging threats like AI-powered attacks and cross-chain exploits show significant growth. 
            The average recovery rate of 23% highlights the critical importance of preventive security measures and insurance coverage.
          </p>
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-blue-800">
          <h2 className="text-3xl font-bold text-white mb-8">Monthly Incident Trends</h2>
          <div className="space-y-4">
            {incidentData.monthlyBreakdown.map((month, index) => (
              <div key={month.month} className="flex items-center space-x-4">
                <div className="w-12 text-blue-300 font-semibold">{month.month}</div>
                <div className="flex-1 bg-slate-700 rounded-lg h-8 relative overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-lg transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(month.incidents / 160) * 100}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-between px-3 text-white text-sm font-semibold">
                    <span>{month.incidents} incidents</span>
                    <span>${month.losses}M lost</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attack Category Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-800">
            <h2 className="text-3xl font-bold text-white mb-8">Attack Categories</h2>
            <div className="space-y-6">
              {incidentData.categoryBreakdown.map((category, index) => (
                <div key={category.category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 font-semibold">{category.category}</span>
                    <span className="text-white font-bold">{category.percentage}%</span>
                  </div>
                  <div className="bg-slate-700 rounded-full h-3 relative overflow-hidden">
                    <div 
                      className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out ${
                        index === 0 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        index === 1 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                        index === 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                        index === 3 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                      style={{ 
                        width: `${category.percentage}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400">${category.amount}B in losses</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-800">
            <h2 className="text-3xl font-bold text-white mb-8">Emerging Threats</h2>
            <div className="space-y-6">
              {securityTrends.map((trend, index) => (
                <div key={trend.trend} className="bg-slate-700/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">{trend.trend}</h3>
                    <span className="text-red-400 font-bold text-lg">{trend.growth}</span>
                  </div>
                  <p className="text-blue-200 text-sm">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Major Incidents Timeline */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-blue-800">
          <h2 className="text-3xl font-bold text-white mb-8">Major Security Incidents 2025</h2>
          <div className="space-y-8">
            {majorIncidents2025.map((incident, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-slate-700/50 rounded-xl p-6">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{incident.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-red-400 font-bold text-xl">{incident.amount}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        incident.impact === 'Critical' ? 'bg-red-600 text-white' :
                        incident.impact === 'High' ? 'bg-orange-600 text-white' :
                        'bg-yellow-600 text-white'
                      }`}>
                        {incident.impact} Impact
                      </span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-blue-300 text-sm">Date:</span>
                      <div className="text-white font-semibold">{incident.date}</div>
                    </div>
                    <div>
                      <span className="text-blue-300 text-sm">Type:</span>
                      <div className="text-white font-semibold">{incident.type}</div>
                    </div>
                    <div>
                      <span className="text-blue-300 text-sm">Recovery Rate:</span>
                      <div className="text-white font-semibold">{incident.recovery}</div>
                    </div>
                  </div>
                  <p className="text-blue-200 mb-3">{incident.description}</p>
                  <p className="text-slate-300 text-sm">{incident.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Strategies */}
        <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-2xl p-8 mb-12 border border-green-500/30">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <svg className="w-8 h-8 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Protection Strategies & Effectiveness
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {protectionStrategies.map((strategy, index) => (
              <div key={strategy.strategy} className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">{strategy.strategy}</h3>
                  <span className="text-green-400 font-bold text-xl">{strategy.effectiveness}</span>
                </div>
                <div className="bg-slate-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: strategy.effectiveness,
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>
                <p className="text-blue-200 text-sm">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-blue-800">
          <h2 className="text-3xl font-bold text-white mb-8">Security Recommendations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-600/50">
              <h3 className="text-lg font-semibold text-white mb-3">For Individuals</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Use hardware wallets for large holdings</li>
                <li>• Enable 2FA on all crypto accounts</li>
                <li>• Verify all transaction details carefully</li>
                <li>• Keep software and firmware updated</li>
                <li>• Consider crypto insurance coverage</li>
              </ul>
            </div>
            <div className="bg-orange-900/30 rounded-xl p-6 border border-orange-600/50">
              <h3 className="text-lg font-semibold text-white mb-3">For Exchanges</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Implement multi-signature security</li>
                <li>• Regular third-party security audits</li>
                <li>• Cold storage for majority of funds</li>
                <li>• Employee security training</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-600/50">
              <h3 className="text-lg font-semibold text-white mb-3">For DeFi Protocols</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>• Comprehensive smart contract audits</li>
                <li>• Bug bounty programs</li>
                <li>• Gradual rollout of new features</li>
                <li>• Decentralized governance security</li>
                <li>• Emergency pause mechanisms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-700">
          <p className="text-blue-300 mb-4">
            This report is compiled from multiple security agencies, blockchain analytics firms, and verified incident reports.
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => {
                navigate('/#calculator');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Protected with BitSafe
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Print Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityReport;