export interface ProjectData {
  id?: number;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageKitUrl?: string;
  imageKitFileId?: string;
  techStack: string[];
  category: "top-notch" | "standard";
  ownerHighlight?: "owner1" | "owner2" | null;
}

export const projects: ProjectData[] = [];
