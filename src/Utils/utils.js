export function getDirectGoogleDriveImageLink(driveUrl) {
    if (!driveUrl) return null;

    // Match formats like:
    // https://drive.google.com/file/d/FILE_ID/view
    // https://drive.google.com/open?id=FILE_ID
    // https://drive.google.com/uc?id=FILE_ID&export=download
    const fileIdMatch = driveUrl.match(/[-\w]{25,}/);
    if (!fileIdMatch) return null;

    const fileId = fileIdMatch[0];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
