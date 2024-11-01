import React, { useState } from 'react';
import Styles from './Photography.module.css';
import D3 from '/photo4.jpg';
import preWeddingImage1 from '/photo1.jpg';
import preWeddingImage2 from '/photo1.jpg';
import weddingImage1 from '/photo1.jpg';
import weddingImage2 from '/photo1.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function PhotographyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar />

            <div className={Styles.topImageContainer}>
                <img src={D3} alt="Top Banner" className={Styles.topImage} />
            </div>

            <section className={Styles.photographyPage}>
                {/* Pre-Wedding Section */}
                <div className={Styles.section}>
                    <h2 className={Styles.heading}>Pre-Wedding</h2>
                    <p className={Styles.description}>Capturing the excitement and joy before the big day.</p>
                    <div className={Styles.gallery}>
                        {[preWeddingImage1, preWeddingImage2, preWeddingImage1, preWeddingImage2, preWeddingImage1, preWeddingImage2, preWeddingImage1, preWeddingImage2].map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Pre-Wedding ${index + 1}`}
                                onClick={() => openModal(image)}
                                className={Styles.thumbnail}
                            />
                        ))}
                    </div>
                </div>

                {/* Wedding Section */}
                <div className={Styles.section}>
                    <h2 className={Styles.heading}>Wedding</h2>
                    <p className={Styles.description}>Timeless moments from the most important day of your life.</p>
                    <div className={Styles.gallery}>
                        {[weddingImage1, weddingImage2, preWeddingImage1, preWeddingImage2, preWeddingImage1, preWeddingImage2, preWeddingImage1, preWeddingImage2].map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Wedding ${index + 1}`}
                                onClick={() => openModal(image)}
                                className={Styles.thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className={Styles.modal} onClick={closeModal}>
                    <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={Styles.closeButton} onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Full View" className={Styles.fullImage} />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default PhotographyPage;
