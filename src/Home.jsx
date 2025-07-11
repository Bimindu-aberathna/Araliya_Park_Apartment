import React, { useState, lazy, Suspense, useCallback, useMemo } from 'react';
import './Home.css';
import MainImg from './MainImg';
import NavigationBar from './Navbar';
import Hero from './Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./About').catch(() => ({ default: () => <div>Error loading About</div> })));
const FeatureCards = lazy(() => import('./Components/FeatureCards').catch(() => ({ default: () => <div>Error loading FeatureCards</div> })));
const Contact = lazy(() => import('./Contact').catch(() => ({ default: () => <div>Error loading Contact</div> })));
const Footer = lazy(() => import('./Components/Footer').catch(() => ({ default: () => <div>Error loading Footer</div> })));
const ScrollTop = lazy(() => import('./ScrollTop').catch(() => ({ default: () => <div>Error loading ScrollTop</div> })));
const ViewModal = lazy(() => import('./Components/Modal/View_Modal').catch(() => ({ default: () => <div>Error loading ViewModal</div> })));
const WhatsAppContact = lazy(() => import('./WhatsApp_contact').catch(() => ({ default: () => <div>Error loading WhatsAppContact</div> })));

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
  const [setError] = useState(null);

  // Memoize callback functions to prevent unnecessary re-renders
   const handleModalClose = useCallback(() => {
    try {
      setShowModal(false);
    } catch (err) {
      setError(err.message);
    }
  }, [setError]);
  
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
        <WhatsAppContact />
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