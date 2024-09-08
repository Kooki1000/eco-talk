import { decode } from 'base64-arraybuffer';
import { randomUUID } from 'expo-crypto';
import * as FileSystem from 'expo-file-system';
import mime from 'mime';

import { supabase } from '@/lib/supabase';

export const uploadPostImage = async (
  image: string
): Promise<string | undefined> => {
  if (!image.startsWith('file://')) {
    return;
  }

  const fileExtension = image.split('.').pop()?.toLowerCase();
  if (!fileExtension) {
    return;
  }

  const contentType = mime.getType(fileExtension);
  if (!contentType) {
    return;
  }

  const base64 = await FileSystem.readAsStringAsync(image, {
    encoding: 'base64',
  });

  const filePath = `${randomUUID()}.${fileExtension}`;

  try {
    const { data, error } = await supabase.storage
      .from('post-images')
      .upload(filePath, decode(base64), { contentType });

    if (error) {
      throw new Error(error.message);
    }

    const { data: urlData } = supabase.storage
      .from('post-images')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    throw error;
  }
};

export const uploadAvatar = async (
  image: string
): Promise<string | undefined> => {
  if (!image.startsWith('file://')) {
    return;
  }

  const fileExtension = image.split('.').pop()?.toLowerCase();
  if (!fileExtension) {
    return;
  }

  const contentType = mime.getType(fileExtension);
  if (!contentType) {
    return;
  }

  const base64 = await FileSystem.readAsStringAsync(image, {
    encoding: 'base64',
  });

  const filePath = `${randomUUID()}.${fileExtension}`;

  try {
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(filePath, decode(base64), { contentType });

    if (error) {
      throw new Error(error.message);
    }

    const { data: urlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    throw error;
  }
};
