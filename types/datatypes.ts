interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    description: string;
    subheading: string;
    tags: string[];
    text: string;
    mainImageUrl: string; // Main image for the left side
    additionalImageUrl?: string; // Optional for the additional image on the right side
  }