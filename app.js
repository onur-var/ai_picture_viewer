const imageContainer = document.getElementById("imageContainer");

function addImage() {
  const imageUrlInput = document.getElementById("imageUrl");
  const rawUrl = imageUrlInput.value.trim();

  if (rawUrl) {
    const processedUrl = convertToDirectLink(rawUrl);
    const imgElement = document.createElement("img");
    imgElement.src = processedUrl;
    imgElement.alt = "Image";
    imgElement.onerror = () => {
      alert("Image could not be loaded. Check the URL.");
      imgElement.remove();
    };
    imageContainer.appendChild(imgElement);
    imageUrlInput.value = ""; // Clear input
  } else {
    alert("Please enter a valid image URL.");
  }
}

function convertToDirectLink(googleDriveUrl) {
  const idMatch = googleDriveUrl.match(/id=([a-zA-Z0-9_-]+)/);
  if (idMatch) {
    return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
  }
  return googleDriveUrl; // Return as is if not a Google Drive link
}
