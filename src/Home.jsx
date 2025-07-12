import React, { useState, lazy, Suspense, useCallback, useMemo } from 'react';
import './Home.css';
import MainImg from './MainImg';
import NavigationBar from './Navbar';
import Hero from './Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./About'));
const FeatureCards = lazy(() => import('./Components/FeatureCards'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Components/Footer'));
const ScrollTop = lazy(() => import('./ScrollTop'));
const ViewModal = lazy(() => import('./Components/Modal/View_Modal'));
const WhatsApp_contact = lazy(() => import('./WhatsApp_contact'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100px' 
  }}>
    <div>Loading...</div>
  </div>
);

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [imageModal, setImageModal] = useState(false);

  // Memoize callback functions to prevent unnecessary re-renders
  const handleModalClose = useCallback(() => setShowModal(false), []);
  
  const modalProps = useMemo(() => ({
    show: showModal,
    onHide: handleModalClose,
    modalContent,
    imageModal
  }), [showModal, handleModalClose, modalContent, imageModal]);

  return (
    <div>
      {/* Critical above-the-fold content - load immediately */}
      <MainImg />
      <NavigationBar 
        setModalContent={setModalContent} 
        setShowModal={setShowModal} 
        setImageModal={setImageModal} 
      />
      <Hero 
        setShowModal={setShowModal} 
        setImageModal={setImageModal} 
      />
      
      {/* Lazy load below-the-fold content */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeatureCards 
          setShowModal={setShowModal} 
          setModalContent={setModalContent} 
          setImageModal={setImageModal} 
        />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      {/* Load interactive elements with Suspense */}
      <Suspense fallback={null}>
        <WhatsApp_contact />
      </Suspense>
      
      <Suspense fallback={null}>
        <ScrollTop />
      </Suspense>
      
      {/* Modal only renders when needed */}
      {showModal && (
        <Suspense fallback={null}>
          <ViewModal {...modalProps} />
        </Suspense>
      )}
    </div>
  );
}

export default Home;