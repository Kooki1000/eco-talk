// This code is modified from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/image.tsx
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import type { ImageProps } from 'expo-image';
import { Image as NImage } from 'expo-image';
import { cssInterop } from 'nativewind';

export type ImgProps = ImageProps & {
  className?: string;
};

cssInterop(NImage, { className: 'style' });

export const Image = ({
  style,
  className,
  placeholder = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
  ...props
}: ImgProps) => {
  return (
    <NImage
      className={className}
      placeholder={placeholder}
      style={style}
      {...props}
    />
  );
};

export const preloadImages = (sources: string[]) => {
  NImage.prefetch(sources);
};
