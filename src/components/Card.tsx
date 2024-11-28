interface CardProps {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({
  imgSrc,
  imgAlt,
  heading,
  content,
}: CardProps) => {
  return (
    <div className="p-6 w-full lg:w-1/3 rounded-lg c-card-container">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-64 object-cover rounded-lg c-card-img"
      />
      <h3 className="font-semibold mt-4 c-card-title">{heading}</h3>
      <p className="mt-2 c-card-text">{content}</p>
    </div>
  );
};
