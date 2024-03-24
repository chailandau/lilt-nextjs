'use client';

import classNames from 'classnames';
import dynamic from 'next/dynamic';
import React, { FC, useRef, useState } from 'react';

import styles from './VideoPlayer.module.scss';

import { Image as ImageType } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Image from '@/atoms/Image';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface VideoPlayerProps {
    /** Video image placeholder */
    placeholder: ImageType;
    /** Video URL */
    url: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ placeholder, url }) => {
    const playerRef = useRef<typeof ReactPlayer>(null);

    const [ready, setReady] = useState<boolean>(false);

    const classList = classNames(
        styles['video-player__video'],
        ready && styles['video-player__video-loaded']
    );

    const wrapperClassList = classNames(
        styles['video-player'],

        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    return (
        <div className={wrapperClassList}>
            <Container className={classList}>
                <ReactPlayer
                    url={url}
                    ref={playerRef.current}
                    playsinline
                    controls
                    playing={false}
                    onReady={() => setReady(true)}
                />
            </Container>

            <Image
                src={placeholder?.url || ''}
                alt={placeholder?.alt || ''}
                width={placeholder?.width || 1000}
                height={placeholder?.height || 1000}
                base64={placeholder?.base64}
                hasBorder={false}
                className={styles['video-player__placeholder']}
            />
        </div>
    );
};

export default VideoPlayer;
