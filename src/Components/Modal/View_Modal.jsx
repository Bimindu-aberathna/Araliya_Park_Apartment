import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImgCarousel from '../Carousel/Carousel';
import { X } from 'lucide-react';

function View_Modal(props) { 
    // Add safety check for modalContent
    const modalContent = props.modalContent || {};
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='width-100'
            {... props.modalContent?.type === "facilities" ? 
                { style: { backgroundImage: `url(${props.modalContent.image})`, opacity: 0.9 } } : {}}
        >
            {!props.imageModal && (
                <Modal.Header closeButton style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {modalContent.title || "Modal heading"}
                    </Modal.Title>
                </Modal.Header>
            )}
            {!props.imageModal && props.modalContent?.type === "facilities" && (
                <Modal.Body closeButton style={{ backgroundColor: 'rgb(0, 0, 0, 0.7)', color: 'white' }}>
                    <p>
                        We offer a range of facilities to ensure a comfortable and luxurious living experience.
                    </p>
                    {modalContent.facilities && modalContent.facilities.length > 0 ? (
                        <>
                            <div>Facilities:</div>
                            <ul>
                                {modalContent.facilities.map((facility, index) => (
                                    <li key={index}>{facility}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <div>No facilities listed.</div>
                    )}
                </Modal.Body>
            )}
            {!props.imageModal && props.modalContent?.type === "pricing" && (
                <Modal.Body style={{ backgroundColor: 'rgb(0, 0, 0, 0.7)', color: 'white' }}>
                    <h6>Our pricing changes based on the season and availability. Please contact us for the most accurate and up-to-date pricing information.</h6>
                    <p>Just a reminder, we do not charge any extra fees for utilities or amenities. The price you see is the price you pay.</p>
                </Modal.Body>
            )}
            {props.imageModal && (
                <Modal.Body style={{ padding: '0', position: 'relative' }}>
                    <Button
                        variant="secondary"
                        onClick={props.onHide}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            zIndex: 2,
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <X />
                    </Button>
                    <ImgCarousel />
                </Modal.Body>
            )}
        </Modal>
    );
}

export default View_Modal;