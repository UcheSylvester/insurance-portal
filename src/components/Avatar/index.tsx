import "./styles.scss";

export interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  ...otherProps
}) => (
  <div className="avatar">
    <img className="avatar__image" {...otherProps} src={src} alt={alt} />
  </div>
);

export default Avatar;
