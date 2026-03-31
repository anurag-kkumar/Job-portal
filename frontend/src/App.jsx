import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Code, 
  BarChart, 
  Layout, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Clock,
  DollarSign
} from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Technology', icon: <Code className="w-6 h-6" />, count: '1.2k' },
  { id: 2, name: 'Marketing', icon: <TrendingUp className="w-6 h-6" />, count: '840' },
  { id: 3, name: 'Design', icon: <Layout className="w-6 h-6" />, count: '650' },
  { id: 4, name: 'Finance', icon: <BarChart className="w-6 h-6" />, count: '420' },
  { id: 5, name: 'Customer Service', icon: <Users className="w-6 h-6" />, count: '1.1k' },
  { id: 6, name: 'Health Care', icon: <ShieldCheck className="w-6 h-6" />, count: '310' },
];

const FEATURED_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "TechFlow Systems",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$140k - $180k",
    posted: "2h ago",
    logoBg: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    company: "Growthly",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$110k - $150k",
    posted: "5h ago",
    logoBg: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Austin, TX",
    type: "Contract",
    salary: "$80 - $100 / hr",
    posted: "1d ago",
    logoBg: "bg-pink-100 text-pink-600"
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataMinds",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    posted: "2d ago",
    logoBg: "bg-green-100 text-green-600"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                JobPortal
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="text-blue-600">Find Jobs</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Companies</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Salaries</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition">Resources</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-slate-600 font-medium hover:text-blue-600 transition px-4 py-2">
                Log in
              </button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Sign up
              </button>
            </div>

            {/* Mobile toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4">
            <a href="#" className="block py-2 text-blue-600 font-medium">Find Jobs</a>
            <a href="#" className="block py-2 text-slate-600">Companies</a>
            <a href="#" className="block py-2 text-slate-600">Salaries</a>
            <button className="w-full text-center py-3 border border-slate-200 rounded-lg">Log in</button>
            <button className="w-full text-center py-3 bg-blue-600 text-white rounded-lg">Sign up</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Find your next <span className="text-blue-600 italic">career-defining</span> role
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            We bridge the gap between world-class talent and high-growth companies. 
            Start your search today.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-r border-slate-100">
              <Search className="text-slate-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                className="w-full py-4 bg-transparent outline-none text-slate-700"
              />
            </div>
            <div className="flex-1 flex items-center px-4">
              <MapPin className="text-slate-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="City or Remote" 
                className="w-full py-4 bg-transparent outline-none text-slate-700"
              />
            </div>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Search Jobs
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <span>Popular:</span>
            <a href="#" className="hover:text-blue-600 underline">UI Designer</a>
            <a href="#" className="hover:text-blue-600 underline">Software Engineer</a>
            <a href="#" className="hover:text-blue-600 underline">Project Manager</a>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Live Jobs', val: '12,400+' },
            { label: 'Companies', val: '2,800+' },
            { label: 'New Daily', val: '450+' },
            { label: 'Hired Monthly', val: '1,200+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-slate-900">{stat.val}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Browse by Category</h2>
            <p className="text-slate-500">Explore jobs across different industries and niches.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            See All Categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition cursor-pointer group"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{cat.name}</h3>
              <p className="text-slate-500 font-medium">{cat.count} open positions</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Opportunities</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Hand-picked roles from top-performing companies that are looking for talented individuals like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_JOBS.map((job) => (
              <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${job.logoBg}`}>
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition">{job.title}</h3>
                      <p className="text-slate-400">{job.company}</p>
                    </div>
                  </div>
                  <span className="bg-slate-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4" /> {job.salary}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {job.posted}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <button className="text-blue-400 font-bold hover:text-white transition">View Details</button>
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition">
              Explore All 12k+ Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Hiring talent for your team?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              Post your job openings to our community of over 500,000 monthly active job seekers and find the perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                Post a Job for Free
              </button>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition border border-blue-500">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center relative">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-400 rounded-full"></div>
                <div>
                  <div className="w-24 h-2 bg-white/40 rounded-full mb-1"></div>
                  <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-64 h-4 bg-white/30 rounded-full"></div>
                <div className="w-48 h-4 bg-white/20 rounded-full"></div>
                <div className="w-56 h-4 bg-white/10 rounded-full"></div>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="w-20 h-8 bg-blue-500/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold">HireStream</span>
              </div>
              <p className="text-slate-500 mb-6 max-w-sm">
                The leading job portal platform helping millions of job seekers connect with top employers globally.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition">
                    <span className="sr-only">{social}</span>
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900">For Candidates</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Job Alerts</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Career Advice</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Resume Builder</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">For Employers</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Post a Job</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Pricing Plans</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Candidate Search</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Hiring Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© 2024 HireStream Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">English (US)</a>
              <a href="#" className="hover:text-slate-600">USD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}