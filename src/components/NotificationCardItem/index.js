import "./index.css";
const NotificationCardItem = (props) => {
  const { notificationDetails } = props;
  const { imageUrl, text, className } = notificationDetails;

  return (
    <div className={`${className} notification-card-item`}>
      <img className="notification-image" src={imageUrl} alt={imageUrl} />
      <p>{text}</p>
    </div>
  );
};

export default NotificationCardItem;
