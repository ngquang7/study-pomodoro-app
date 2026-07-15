import React, { useEffect, useState } from "react";


interface BackgroundScene {
  id: string;
  name: string;
  type: "custom" | "preset";
  value: string; // Holds the parsed Base64 image string
  accent: string;
  glowColor: string;
}

export const ImageUpload: React.FC = () => {
const [activeScene, setActiveScene] = useState<BackgroundScene | null>(null);

  // Syncs the active scene object to the global document body style
  useEffect(() => {
    if (activeScene && activeScene.value) {
      document.body.style.backgroundImage = `url(${activeScene.value})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [activeScene]);

  // File loading processor
  const handleImageFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Highly recommend providing actual image assets.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (!dataUrl) return;

      const customSceneObj: BackgroundScene = {
        id: "custom_user_space",
        name: "🖼️ Custom Oasis",
        type: "custom",
        value: dataUrl,
        accent: "purple",
        glowColor: "#a855f7",
      };

      setActiveScene(customSceneObj);
    };

    reader.readAsDataURL(file);
  };


    return(
<>
        <div className="custom-css">
            <span className="header-custom-css"> 📤 Background Custom </span>
            <span className="below-header-custom-css">Set the spatial tone & brightness layer</span>
                
                <div className="text-upload-css">
                    <div className="wrapper">
                        <div className="relativeContainer">
                            <label
                            id="label-custom-bg-uploader"
                            className="customBgLabel"
                            >
                                <div className="uploadIcon" />
                                    <span className="labelText">📤 Upload backdrop</span>
                                    <input
                                    id="input-file-bg-trigger"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageFileLoad}
                                    className="hiddenInput"
                                    />
                            </label>
                        </div>
                    </div>
                </div>
        </div>
        

</>
  );
}