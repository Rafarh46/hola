'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './video-player.module.css';
import {
  ImageProps,
  blurDataUrl as fallbackBlurDataUrl,
} from '@/src/common-types';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';

/**
 * Tailwind classess
 */
const iconStyle = cn(
  `w-[100px] h-[100px] rounded-5 bg-primary grid place-items-center duration-350 text-white hover:bg-black transition-all`
);
const cursorStyle = cn(`cursor-pointer`);

export interface VideoPlayerProps {
  /**
   * Video thumbnail image info
   */
  thumbnail: ImageProps & {
    blurDataURL?: string;
    className?: string;
  };
  /**
   * Please use embed link as like as (https://www.youtube.com/embed/SxVmSQaPc4E)
   */
  videoUrl: string;
  palyBtnClassName?: ClassValue;
}

/**
 *
 * @param {object}  VideoPlayerProps
 * @returns JSX.Element
 */
export const VideoPlayer = ({
  thumbnail,
  videoUrl,
  palyBtnClassName,
}: VideoPlayerProps) => {
  const [showModal, setShowModal] = useState(false);
  const { src, alt, width, height, blurDataURL, className } = thumbnail;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const Modal = () => {
    return (
      <div
        data-testid="backdrop"
        className={styles['modal-video']}
        role="dialog"
        onClick={() => setShowModal(false)}
      >
        <div className={styles['modal-video-body']}>
          <div className={styles['modal-video-inner']}>
            <div className={styles['modal-video-wrap']}>
              <button className={styles['modal-video-close-btn']} />
              <iframe
                width="460"
                height="230"
                src={videoUrl}
                allow={
                  'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div data-testid="video-player" className="inline-grid">
      {/* thumbnail image  */}
      <div
        data-testid="media-wrapper"
        onClick={() => setShowModal(true)}
        className={cn(
          styles['media-wrapper'],
          cursorStyle,
          'relative  inline-flex overflow-hidden rounded-5',
          // General

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear'
        )}
      >
        <span
          className={cn(
            styles['media-overlay'],
            'absolute inset-0 z-[1] hidden'
          )}
        ></span>
        <Image
          className={cn('block object-cover', className)}
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder={'blur'}
          blurDataURL={
            blurDataURL !== undefined ? blurDataURL : fallbackBlurDataUrl
          }
          sizes="100vw"
        />

        {/* Play btn  */}

      </div>

      {/* modal  */}
      {showModal && createPortal(<Modal />, document.body)}
    </div>
  );
};
