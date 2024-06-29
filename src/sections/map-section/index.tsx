import { mapSectionData } from '@/data/map-section';

export interface MapSectionProps {
  embedUrl: string;
}

export function MapSection() {
  const { embedUrl } = mapSectionData;
  return (
    <div className="container mx-20 my-0 p-0">
      <div className="absoulte relative bottom-[450px] h-[600px] w-[850px]">
        <iframe
          className="h-full w-full border-none"
          src={embedUrl}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
