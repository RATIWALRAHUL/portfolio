"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import styles from "./ProjectGallery.module.css";

export interface GalleryItem {
  url: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryItem[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
    }
  }, [lightboxIndex, images.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
    }
  }, [lightboxIndex, images.length]);

  // Keyboard Navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  if (!images || images.length === 0) return null;

  return (
    <section className={styles.gallerySection} aria-label={`${projectTitle} Showcase Gallery`}>
      <div className={styles.galleryHeader}>
        <div className={styles.titleArea}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkles size={18} color="var(--accent-orange)" aria-hidden="true" />
            <h2 className={styles.heading}>Interface Gallery &amp; Screens</h2>
          </div>
          <p className={styles.subtitle}>
            Click any screen below to preview in high-resolution fullscreen mode:
          </p>
        </div>
        <span className={styles.countBadge}>
          {images.length} {images.length === 1 ? "Screen" : "Screens & Mockups"}
        </span>
      </div>

      {/* Grid of Interactive Thumbnails */}
      <div className={styles.galleryGrid}>
        {images.map((item, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Preview image ${index + 1} of ${images.length}: ${item.caption || projectTitle}`}
          >
            <Image
              src={item.url}
              alt={item.caption || `${projectTitle} mockup ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.thumbImage}
            />

            {/* Hover overlay with Click to preview pill */}
            <div className={styles.hoverOverlay}>
              <div className={styles.previewPill}>
                <Maximize2 size={12} aria-hidden="true" />
                <span>Click to Preview</span>
              </div>
              {item.caption && (
                <p className={styles.itemCaption}>{item.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview modal"
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeLightbox}
                aria-label="Close preview modal"
              >
                <X size={20} />
              </button>

              {/* Prev / Next Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.prevBtn}`}
                    onClick={showPrev}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${styles.nextBtn}`}
                    onClick={showNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Main Preview Image */}
              <div className={styles.lightboxImageWrap}>
                <Image
                  src={images[lightboxIndex].url}
                  alt={images[lightboxIndex].caption || `${projectTitle} preview`}
                  fill
                  priority
                  sizes="90vw"
                  className={styles.lightboxImage}
                />
              </div>

              {/* Footer with caption and counter */}
              <div className={styles.lightboxFooter}>
                <p className={styles.lightboxCaption}>
                  {images[lightboxIndex].caption || projectTitle}
                </p>
                <span className={styles.counterPill}>
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
