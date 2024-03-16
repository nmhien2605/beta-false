import { HTMLAttributes } from 'react';
import NextImage from 'next/image';
import { cn } from '@/utils/classname';

const Image = ({
  src,
  alt,
  fit = 'contain',
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  src: any;
  alt: string;
  fit?: 'contain' | 'cover';
}) => {
  return (
    <div {...props} className={cn('[&>img]:!static', className)}>
      <NextImage src={src} alt={alt} fill style={{ objectFit: fit }} />
    </div>
  );
};

export default Image;
