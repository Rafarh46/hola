import { mapSectionData } from '@/data/map-section';

export interface MapSectionProps {
  embedUrl: string;
}

export function MapSection() {
  const { embedUrl } = mapSectionData;
  return (
    <div className="container mx-20 my-0 p-0">
      <div className="relative h-[600px] w-[850px] absoulte bottom-[450px]">
      <iframe
        className="border-none h-full w-full"
        src={embedUrl}
        allowFullScreen
        loading="lazy"
      />
    </div>
    </div>
  );
}
