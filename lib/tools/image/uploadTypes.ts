export const SUPPORTED_IMAGE_UPLOAD_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/svg+xml',
] as const;

type SupportedImageUploadType = (typeof SUPPORTED_IMAGE_UPLOAD_TYPES)[number];

export function isSupportedImageUploadType(file: File | null | undefined) {
  if (!file) return false;
  return SUPPORTED_IMAGE_UPLOAD_TYPES.includes(file.type as SupportedImageUploadType);
}
