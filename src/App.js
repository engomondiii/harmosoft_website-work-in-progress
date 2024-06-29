// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CombinedHomepage from './components/homepage/CombinedHomepage'; // Import the new combined homepage
import ServicesOverview from './components/homepage/ServicesOverview';
import Testimonials from './components/homepage/Testimonials';
import AboutUs from './components/about/AboutUs'; // Combined About Us page
import CompanyHistory from './components/about/CompanyHistory';
import VisionMission from './components/about/VisionMission';
import Team from './components/about/Team';
import Careers from './components/about/Careers';
import CombinedServices from './components/services/CombinedServices'; // Combined Services page
import ServiceDetails from './components/services/ServiceDetails';
import CaseStudies from './components/services/CaseStudies';
import Process from './components/services/Process';
import CombinedProducts from './components/products/CombinedProducts'; // Combined Products page
import ProductList from './components/products/ProductList';
import DemoRequest from './components/products/DemoRequest';
import SupportDocumentation from './components/products/SupportDocumentation';
import CombinedSolutions from './components/solutions/CombinedSolutions'; // Combined Solutions page
import IndustrySolutions from './components/solutions/IndustrySolutions';
import TechnologySolutions from './components/solutions/TechnologySolutions';
import CombinedBlog from './components/blog/CombinedBlog'; // Combined Blog page
import BlogPost from './components/blog/BlogPost';
import CompanyNews from './components/blog/CompanyNews';
import IndustryNews from './components/blog/IndustryNews';
import EducationalContent from './components/blog/EducationalContent';
import CombinedResources from './components/resources/CombinedResources'; // Combined Resources page
import Whitepapers from './components/resources/Whitepapers';
import WebinarsEvents from './components/resources/WebinarsEvents';
import CombinedContact from './components/contact/CombinedContact'; // Combined Contact page
import ContactForm from './components/contact/ContactForm';
import OfficeLocations from './components/contact/OfficeLocations';
import SocialMediaLinks from './components/contact/SocialMediaLinks';
import ClientReviews from './components/testimonials/ClientReviews';
import SuccessStories from './components/testimonials/SuccessStories';
import LoginSignUp from './components/clientPortal/LoginSignUp';
import Dashboard from './components/clientPortal/Dashboard';
import FAQ from './components/faq/FAQ';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import AccessibilityOptions from './components/accessibility/AccessibilityOptions';
import LiveChat from './components/interactive/LiveChat';
import InteractiveDemos from './components/interactive/InteractiveDemos';
import SearchBar from './components/search/SearchBar';
import HarmosoftAcademy from './components/academy/HarmosoftAcademy';
import HarmosoftLab from './components/lab/HarmosoftLab'; // Import Harmosoft Lab
import ChatBot from './components/chat/ChatBot';
import Chat from './components/chat/Chat';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <ChatBot /> {/* Add the ChatBot to all pages */}
      <Routes>
        <Route path="/" element={<CombinedHomepage />} /> {/* Use CombinedHomepage */}
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutUs />} /> {/* Combined About Us page */}
        <Route path="/about/company-history" element={<CompanyHistory />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/services" element={<CombinedServices />} /> {/* Combined Services page */}
        <Route path="/services/details" element={<ServiceDetails />} />
        <Route path="/services/case-studies" element={<CaseStudies />} />
        <Route path="/services/process" element={<Process />} />
        <Route path="/products" element={<CombinedProducts />} /> {/* Combined Products page */}
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/products/demo-request" element={<DemoRequest />} />
        <Route path="/products/support-documentation" element={<SupportDocumentation />} />
        <Route path="/solutions" element={<CombinedSolutions />} /> {/* Combined Solutions page */}
        <Route path="/solutions/industry" element={<IndustrySolutions />} />
        <Route path="/solutions/technology" element={<TechnologySolutions />} />
        <Route path="/blog" element={<CombinedBlog />} /> {/* Combined Blog page */}
        <Route path="/blog/company-news" element={<CompanyNews />} />
        <Route path="/blog/industry-news" element={<IndustryNews />} />
        <Route path="/blog/educational-content" element={<EducationalContent />} />
        <Route path="/blog/post" element={<BlogPost />} />
        <Route path="/resources" element={<CombinedResources />} /> {/* Combined Resources page */}
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/webinars-events" element={<WebinarsEvents />} />
        <Route path="/contact" element={<CombinedContact />} /> {/* Combined Contact page */}
        <Route path="/contact/form" element={<ContactForm />} />
        <Route path="/contact/office-locations" element={<OfficeLocations />} />
        <Route path="/contact/social-media-links" element={<SocialMediaLinks />} />
        <Route path="/testimonials/client-reviews" element={<ClientReviews />} />
        <Route path="/testimonials/success-stories" element={<SuccessStories />} />
        <Route path="/client-portal/login-signup" element={<LoginSignUp />} />
        <Route path="/client-portal/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        <Route path="/accessibility" element={<AccessibilityOptions />} />
        <Route path="/interactive/live-chat" element={<LiveChat />} />
        <Route path="/interactive/demos" element={<InteractiveDemos />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/academy" element={<HarmosoftAcademy />} /> {/* Harmosoft Academy page */}
        <Route path="/lab" element={<HarmosoftLab />} /> {/* Harmosoft Lab page */}
        <Route path="/chat" element={<Chat />} /> {/* Chat page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
